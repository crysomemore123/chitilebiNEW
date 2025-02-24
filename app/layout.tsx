import type { Metadata } from "next";
import Script from "next/script"; // Import next/script
import "./globals.css";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "./_components/Header";
import Navigation from "./_components/navigation/Navigation";
import Footer from "./_components/Footer";

const notoSansGeorgian = Noto_Sans_Georgian({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["georgian"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ევროპული ჩითილები",
    template: "%s | ევროპული ჩითილები",
  },

  description:
    "„ევროპული ჩითილები“ დასპეციალიზებულია მხოლოდ მაღალხარისხიანი ჩითილების მოყვანაზე. ასორტიმენტშია – წიწაკა, პომიდორი, კიტრი, სალათა, ნესვი, საზამთრო, ბადრიჯანი, ბროკოლი, ყვავილოვანი კომბოსტო და მრავალი სხვა. გამოგიყვანთ პრაქტიკულად ნებისმიერი ბოსტნეულის ჩითილს. ფასი დამოკიდებულია მცენარის სახეობაზე, მოყვანის პერიოდზე, კასეტის ზომაზე და რიგ სხვა დეტალზე.",
  keywords: [
    "ევროპული ჩითილები",
    "ჩითილები",
    "იაფი ჩითილები",
    "evropuli chitilebi",
    "chitilebi",
    "iafi chitilebi",
  ],
  openGraph: {
    title: {
      default: "ევროპული ჩითილები",
      template: "%s | ევროპული ჩითილები",
    },
    description:
      "„ევროპული ჩითილები“ დასპეციალიზებულია მხოლოდ მაღალხარისხიანი ჩითილების მოყვანაზე. ასორტიმენტშია – წიწაკა, პომიდორი, კიტრი, სალათა, ნესვი, საზამთრო, ბადრიჯანი, ბროკოლი, ყვავილოვანი კომბოსტო და მრავალი სხვა.",
    siteName: "ევროპული ჩითილები",
    locale: "ge-ka",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "plants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ER1V05SFWH"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ER1V05SFWH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${notoSansGeorgian.className} text-slate-950 overflow-x-hidden`}
      >
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
