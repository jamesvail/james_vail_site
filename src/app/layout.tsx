import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "James Vail | Portfolio",
  description: "Welcome to my site! :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = "bg-gray-800 text-white">
        <Navbar /> 
        <main className="pt-16">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
