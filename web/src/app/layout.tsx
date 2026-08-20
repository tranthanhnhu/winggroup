import type { Metadata } from "next";
import { Be_Vietnam_Pro, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyNav } from "@/components/MobileStickyNav";
import { SocialDock } from "@/components/SocialDock";
import { BackToTop } from "@/components/BackToTop";
import { BuyCtaProvider, BuyCtaSheet } from "@/components/BuyCtaSheet";
import { company } from "@/data/company";

const heading = Be_Vietnam_Pro({
  variable: "--font-heading",
  subsets: ["vietnamese", "latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} — ${company.slogan}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${heading.variable} ${body.variable} h-full`}>
      <body className="page-shell flex min-h-full flex-col antialiased">
        <BuyCtaProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyNav />
          <SocialDock />
          <BackToTop />
          <BuyCtaSheet />
        </BuyCtaProvider>
      </body>
    </html>
  );
}
