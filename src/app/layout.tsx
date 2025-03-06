import type { Metadata } from "next";
import { Suspense } from "react";
import Sidebar from "@/components/layout/sidebar";
import Footer from "@/components/layout/footer";
import LayoutAnimation from "@/components/layout/LayoutAnimation";
import LoadingFallback from "@/components/layout/ui/LoadingFallback";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "James Vail | Portfolio",
  description: "Aspiring Full-Stack Developer interested in emerging tech.",
  keywords: ["developer", "engineer", "portfolio", "react", "nextjs", "typescript"],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-background text-text overflow-x-hidden flex h-full">
        <Sidebar />
        
        <main className="flex flex-col flex-1 w-full">
          <Suspense fallback={<LoadingFallback />}> 
            <LayoutAnimation>{children}</LayoutAnimation>
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
}