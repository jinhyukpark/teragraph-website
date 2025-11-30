import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "TeraGraph | AI, 모바일, 디자인 ICT 솔루션 전문기업",
  description: "TeraGraph는 20년 이상의 경험을 가진 ICT 솔루션 전문기업입니다. AI 솔루션, 모바일/웹 개발, UI/UX 디자인 서비스를 제공합니다. 24시간 기술 지원, 98% 고객 만족도.",
  keywords: ["ICT 솔루션", "AI 개발", "인공지능", "모바일 앱 개발", "웹 개발", "UI/UX 디자인", "소프트웨어 개발", "IT 컨설팅", "테라그래프", "TeraGraph", "디지털 전환", "머신러닝"],
  authors: [{ name: "TeraGraph" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://teragraph.io/",
    title: "TeraGraph | AI, 모바일, 디자인 ICT 솔루션 전문기업",
    description: "TeraGraph는 20년 이상의 경험을 가진 ICT 솔루션 전문기업입니다. AI 솔루션, 모바일/웹 개발, UI/UX 디자인 서비스를 제공합니다.",
    siteName: "TeraGraph",
    locale: "ko_KR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@replit",
    title: "TeraGraph | AI, 모바일, 디자인 ICT 솔루션 전문기업",
    description: "TeraGraph는 20년 이상의 경험을 가진 ICT 솔루션 전문기업입니다. AI 솔루션, 모바일/웹 개발, UI/UX 디자인 서비스를 제공합니다.",
  },
  alternates: {
    canonical: "https://teragraph.io/",
  },
  other: {
    "theme-color": "#0d9488",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TeraGraph",
              "url": "https://teragraph.io",
              "logo": "https://teragraph.io/favicon.png",
              "description": "TeraGraph는 AI, 모바일/웹 개발, UI/UX 디자인 서비스를 제공하는 ICT 솔루션 전문기업입니다.",
              "foundingDate": "2004",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seoul",
                "addressCountry": "KR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "manager@teragraph.io",
                "contactType": "customer service",
                "availableLanguage": ["Korean", "English"]
              },
              "knowsAbout": ["Artificial Intelligence", "Mobile Development", "Web Development", "UI/UX Design", "ICT Solutions"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TeraGraph",
              "image": "https://teragraph.io/favicon.png",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seoul",
                "addressCountry": "KR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "50"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
