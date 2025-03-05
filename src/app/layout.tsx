import type { Metadata } from "next";
import Sidebar from "@/components/layout/sidebar";
import Footer from "@/components/layout/footer";
import LayoutAnimation from "@/components/layout/LayoutAnimation";
import "./styles/globals.css";


{/* seo not looking too good, rework this. */}
export const metadata: Metadata = {
  title: "James Vail | Portfolio",
  description: "Welcome to my site! :)",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text overflow-x-hidden">
        <div className="flex min-h-screen">
          <div className="relative z-50">
            <Sidebar />
          </div>

          {/* main */}
          <div className="flex flex-col flex-1 w-full">
            <LayoutAnimation>{children}</LayoutAnimation>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
