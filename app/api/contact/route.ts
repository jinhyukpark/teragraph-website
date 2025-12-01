import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactMessages, insertContactMessageSchema } from "@/shared/schema";
import nodemailer from "nodemailer";

function createTransporter() {
  console.log("[Email] Creating transporter with:", {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: process.env.SMTP_PORT || "587",
    user: process.env.SMTP_USER ? "configured" : "NOT SET",
    pass: process.env.SMTP_PASS ? "configured" : "NOT SET",
  });

  const port = parseInt(process.env.SMTP_PORT || "465");
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactMessageSchema.parse(body);

    const [message] = await db
      .insert(contactMessages)
      .values(validatedData)
      .returning();

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: "manager@teragraph.io",
          subject: `[TeraGraph Contact] ${validatedData.purpose}: ${validatedData.title}`,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Title:</strong> ${validatedData.title}</p>
            <p><strong>Purpose:</strong> ${validatedData.purpose}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.content.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
        });
        console.log("Email sent successfully to manager@teragraph.io");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    } else {
      console.log("SMTP credentials not configured, skipping email");
    }

    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process contact form",
      },
      { status: 400 }
    );
  }
}
