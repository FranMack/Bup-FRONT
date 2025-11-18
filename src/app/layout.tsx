import { AssistantChatContextProvider } from "@/context/assistantChat";
import { MenuMobileContextProvider } from "@/context/mobileMenu.context";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import {
  AssistantButton,
  AssistantChat,
  Footer,
  MobileMenu,
  Navbar,
  WhatsUpButton,
} from "../features";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
  description:
    "Impulsa el crecimiento empresarial con soluciones tecnológicas innovadoras. Automatizamos procesos y conectamos áreas para transformar tu negocio con resultados visibles.",
  keywords:
    "tecnología empresarial, innovación tecnológica, automatización, transformación digital, consultoría tecnológica, soluciones tecnológicas, liderazgo empresarial, Business Up",
  robots: "index, follow",

  // Open Graph Meta Tags
  openGraph: {
    title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
    description:
      "Lidera tu industria con Business Up. Convertimos inversiones tecnológicas en avances visibles y soluciones que transforman la gestión y operación de tu negocio.",
    images: [
      {
        url: "https://business-up-landing.vercel.app/favicon.png",
        width: 1200,
        height: 630,
        alt: "Logo Business Up",
      },
    ],
    url: "https://business-up-landing.vercel.app/",
    type: "website",
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Up - Tecnología e Innovación para Líderes Visionarios",
    description:
      "Automatiza procesos y conecta cada área de tu negocio con tecnología que funciona. Business Up, tu socio estratégico en innovación tecnológica.",
    images: [
      {
        url: "https://business-up-landing.vercel.app/favicon.png",
        alt: "Logo Business Up",
      },
    ],
  },

  authors: [
    { name: "Business Up", url: "https://business-up-landing.vercel.app/" },
  ],
};

// 👇 Acá va el themeColor ahora
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0070f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://business-up-landing.vercel.app/" />
      </head>

      <body className={`antialiased`}>
        <MenuMobileContextProvider>
          <Navbar />
          <MobileMenu />
          <WhatsUpButton />
          <AssistantChatContextProvider>
            <AssistantButton />
            <AssistantChat />
          </AssistantChatContextProvider>
          <ToastContainer style={{ fontSize: "1rem" }} />
        </MenuMobileContextProvider>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
