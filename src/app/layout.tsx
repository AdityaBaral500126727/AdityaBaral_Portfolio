import type { Metadata } from "next";
import { Instrument_Serif, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityabaral.dev"),
  title: "Aditya Baral — Software Developer | Full-Stack & Backend Systems",
  description:
    "Personal engineering portfolio of Aditya Baral. Computer Science student at UPES and former software development intern at Xebia and ONGC GEOPIC. Building resilient backend services, REST APIs, and full-stack web applications.",
  keywords: [
    "Aditya Baral",
    "Software Developer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Node.js",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "UPES",
    "Xebia",
    "ONGC GEOPIC",
    "REST APIs",
    "MongoDB",
  ],
  authors: [{ name: "Aditya Baral" }],
  creator: "Aditya Baral",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityabaral.dev",
    title: "Aditya Baral — Software Developer | Full-Stack & Backend Systems",
    description:
      "Explore the software engineering portfolio, enterprise internship work, and backend projects of Aditya Baral.",
    siteName: "Aditya Baral Portfolio",
    images: [
      {
        url: "/images/aditya-baral-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Baral — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Baral — Software Developer",
    description:
      "Full-stack and backend software developer building scalable web systems, APIs, and real-time applications.",
    images: ["/images/aditya-baral-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://adityabaral.dev/#person",
        name: "Aditya Baral",
        jobTitle: "Software Developer",
        description:
          "Software developer building full-stack applications and reliable backend systems.",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Petroleum and Energy Studies (UPES)",
        },
        image: "https://adityabaral.dev/images/aditya-baral-portrait.jpg",
        sameAs: [
          "https://github.com/AdityaBaral500126727",
          "https://linkedin.com/in/aditya-baral",
        ],
        knowsAbout: [
          "Full-Stack Development",
          "Backend Engineering",
          "Java",
          "Spring Boot",
          "Node.js",
          "Express.js",
          "React",
          "Next.js",
          "TypeScript",
          "MongoDB",
          "Firebase",
          "REST APIs",
          "Authentication & RBAC",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://adityabaral.dev/#website",
        url: "https://adityabaral.dev",
        name: "Aditya Baral Portfolio",
        publisher: {
          "@id": "https://adityabaral.dev/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#292821] text-[#e5ddce] antialiased selection:bg-[#9a7655] selection:text-[#e5ddce]">
        <div className="film-grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
