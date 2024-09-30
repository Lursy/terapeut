import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

export const metadata: Metadata = {
  title: "Terapeut",
  description: "Assistente psicológico",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Recuperar a sessão do servidor
  const session = await auth();

  return (
    <html lang="pt-br">
      <body
        className={`flex ${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {/* Passar a sessão ao SessionProvider */}
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
