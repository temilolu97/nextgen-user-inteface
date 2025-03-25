import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Football Tournament",
  description: "Your premier destination for football tournament updates",
  
  icons: {
    icon: '/nextGenlogo.png',
    shortcut: '/nextGenlogo.',
    apple: '/nextGenlogo.png',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-black text-gray-400 text-sm py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} NextGEN. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
