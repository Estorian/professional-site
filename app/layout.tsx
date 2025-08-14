import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Jason Lee",
  description: "Technologist, Ethicist, Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
