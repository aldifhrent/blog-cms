import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Book | Categories",
  description: "Categories of your posts",
};

interface CategoryLayoutProps {
  children: React.ReactNode;
}
export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
