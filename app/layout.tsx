import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NovelNexus",
    description: "A modern platform for writers to create and organize their manuscripts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body className={cn("min-h-full bg-background font-sans antialiased", "bg-gradient-to-br from-gray-50 to-white", "dark:from-gray-900 dark:to-gray-950", inter.className)}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
                    <div className="relative flex">
                        <div className="contents" id="app-container">
                            <Sidebar />
                            <main className="relative flex-1">{children}</main>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
