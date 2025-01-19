"use client";
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

//  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen bg-background">
            <div className="container mx-auto">{children}</div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}