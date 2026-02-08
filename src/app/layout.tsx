import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "SetYourClaw — Tu Asistente de IA Personal",
  description:
    "Instalamos y configuramos tu asistente de IA personal. Responde mensajes, organiza tu agenda, navega la web, y aprende tu estilo — 24/7.",
  metadataBase: new URL("https://setyourclaw.com"),
  openGraph: {
    title: "SetYourClaw — Tu Asistente de IA Personal",
    description:
      "Instalamos y configuramos tu asistente de IA personal. Responde mensajes, organiza tu agenda, navega la web, y aprende tu estilo — 24/7.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  other: { "theme-color": "#0A0A0F" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
