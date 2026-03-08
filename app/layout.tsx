import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "NoJS",
  description: "Go back to the perfectly good days of HTML + CSS websites.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${monoFont.variable} antialiased flex flex-col h-screen`}>
        <main className="text-sm flex-1 flex items-center justify-center">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
