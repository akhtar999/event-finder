import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festiva",
  description: "Generated by create next app",
};
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
