import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Keshav Raj - Full Stack Developer | Next.js & Golang",
  description: "Full Stack Developer specializing in Next.js, Golang, and MongoDB. Building scalable web applications at QuantiqueMinds. Expertise in React, TypeScript, REST APIs, Docker, and Microservices.",
  keywords: ["Full Stack Developer", "Next.js Developer", "Golang Developer", "React", "MongoDB", "Web Development", "Software Engineer", "TypeScript", "REST APIs", "Docker", "Microservices"],
  authors: [{ name: "Keshav Raj" }],
  creator: "Keshav Raj",
  publisher: "Keshav Raj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keshav-raj.web.app/",
    title: "Keshav Raj - Full Stack Developer | Next.js & Golang",
    description: "Full Stack Developer specializing in Next.js, Golang, and MongoDB. Building scalable web applications at QuantiqueMinds.",
    siteName: "Keshav Raj Portfolio",
    images: [
      {
        url: "https://keshav-raj.web.app/static/media/logo.b36d65247f85d561949d.png",
        width: 1200,
        height: 630,
        alt: "Keshav Raj - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshav Raj - Full Stack Developer | Next.js & Golang",
    description: "Full Stack Developer specializing in Next.js, Golang, and MongoDB. Building scalable web applications.",
    images: ["https://keshav-raj.web.app/static/media/logo.b36d65247f85d561949d.png"],
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        poppins.variable
      )}>
        {children}
      </body>
    </html>
  );
}
