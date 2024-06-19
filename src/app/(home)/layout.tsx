import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erudition",
  description: "Learning AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
     </body>
    </html>
  );
}
