import Providers from "@/components/Providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  twitter: {
    site: "",
    siteId: "",
    creator: "",
    creatorId: "",
    description: "",
    title: "",
    images: "",
  },
  openGraph: {
    type: "website",
    url: "https://nextjs.org",
    title: "Create Next App",
    description: "Generated by create next app",
    images: [
      {
        url: "https://nextjs.org/og-image.png",
        alt: "Create Next App",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Providers>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center`}
      >
      <main className="max-w-md">
        {children}
      </main>
      </body>
    </Providers>
    </html>
  );
}
