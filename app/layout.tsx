import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ViewResume from "@/components/Home/ViewResume";

const myFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomilola Oluwafem ~ Portfolio website",
  description: "A software engineer from Lagos state,
  openGraph: {
    images: ["https://avatars.githubusercontent.com/u/93817917?v=4"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
        <ViewResume />
      </body>
    </html>
  );
}
