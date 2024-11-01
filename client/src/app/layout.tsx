import { ChakraProvider, Box } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "../../components/globals";
import "./globals.css";

// Import local fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

// Metadata
export const metadata: Metadata = {
    title: "Orbit",
    description: "Your HR management tool",
};

// RootLayout Component
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ChakraProvider>
                    <Box bg="var(--background-color)" minH="100vh">
                        {children}
                        <Footer />
                    </Box>
                </ChakraProvider>
            </body>
        </html>
    );
}
