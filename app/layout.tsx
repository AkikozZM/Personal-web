import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Geming Zhu Portfolio",
  description: "My web dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
