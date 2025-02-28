import type { Metadata } from "next";
import Sidebar from "@/components/layout/sidebar";
import Footer from "@/components/layout/footer";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "James Vail | Portfolio",
  description: "Welcome to my site! :)",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8">{children}</main> 
        </div>
        <Footer />
      </body>
    </html>
  );
}
