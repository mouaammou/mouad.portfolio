import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Full-Stack Software Engineer Portfolio',
  description: 'Full-Stack Developer | Building Scalable and Innovative Solutions',
  openGraph: {
    title: 'Full-Stack Software Engineer Portfolio',
    description: 'Full-Stack Developer | Building Scalable and Innovative Solutions',
    url: 'https://your-portfolio.com',
    siteName: 'Full-Stack Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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