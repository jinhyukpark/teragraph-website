import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactMessages, insertContactMessageSchema } from "@/shared/schema";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: "manager@illunex.com",
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
        console.log("Email sent successfully to manager@illunex.com");
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
