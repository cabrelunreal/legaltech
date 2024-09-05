import type { Metadata } from "next";
// import notoSansJP from './font';
import "./globals.css";


export const metadata: Metadata = {
  title: "Tribune Justice",
  description: "Designed using nextjs developed by lunaking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      
      <body>{children}</body>
    </html>
  );
}
