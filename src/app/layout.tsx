import { MenuMobileContextProvider } from "@/context/mobileMenu.context";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Footer, MobileMenu, Navbar, WhatsUpButton } from "../features";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Business Up - Tecnología e Innovación para Líderes Visionarios (Versión de prueba)",
  description:
    "Versión de prueba de Business Up. Esta instancia es solo para desarrollo y no debe indexarse.",
  keywords: "prueba, desarrollo, no indexar, business up",

  // 🚫 Bloquea indexación TOTAL
  robots: "noindex, nofollow",

  openGraph: {
    title: "Business Up (Versión de prueba)",
    description:
      "Esta es la versión de prueba de Business Up. No debe indexarse.",
    images: [
      {
        url: "https://business-up-landing.vercel.app/favicon.png",
        width: 1200,
        height: 630,
        alt: "Logo Business Up",
      },
    ],
    url: "https://business-up-landing.vercel.app",
    type: "website",
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Up (Versión de prueba)",
    description: "Instancia no indexable para pruebas y desarrollo.",
    images: [
      {
        url: "https://business-up-landing.vercel.app/favicon.png",
        alt: "Logo Business Up",
      },
    ],
  },

  authors: [
    {
      name: "Business Up",
      url: "https://business-up-landing.vercel.app",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" prefix="og: http://ogp.me/ns#">
      <body className={`antialiased`}>
        <MenuMobileContextProvider>
          <Navbar />
          <MobileMenu />
          <WhatsUpButton />
          {/*<AssistantChatContextProvider>
            <AssistantButton />
            <AssistantChat />
          </AssistantChatContextProvider>*/}
          <ToastContainer style={{ fontSize: "1rem" }} />
        </MenuMobileContextProvider>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
