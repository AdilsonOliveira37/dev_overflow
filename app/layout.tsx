import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform to share your knowledge",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient hover:invert-colors",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
