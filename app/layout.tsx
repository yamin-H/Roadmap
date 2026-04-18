import "./globals.css";
import Header from "@/components/layout/Header";
import ThemeProvider from "@/components/ThemProvider";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}