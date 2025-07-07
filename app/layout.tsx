// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import ClientProvider from "./ClientProvider";

export const metadata: Metadata = {
  title: "AGC NewsNet - Latest African News & Stories",
  description: "Stay updated with breaking news, top stories, and in-depth articles from Africa on AGC NewsNet.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/euclid-circular-a"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}