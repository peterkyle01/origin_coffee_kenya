import ScrollToTopButton from "./components/buttons/ScrollToTopBtn";
import Footer from "./components/footer/Footer";
import NavbarWrapper from "./components/navbar/NavbarWrapper";
import "./globals.css";
import {
  Herr_Von_Muellerhoff,
  Roboto,
  Source_Sans_Pro,
} from "next/font/google";

export const metadata = {
  title: "Origin Coffee Kenya",
  description: "Origin Coffee Kenya Website",
  icons: {
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  link: { rel: "manifest", href: "/manifest.json" },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "100",
  variable: "--font-roboto",
  display: "swap",
});

const source_sans_pro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source_sans_pro",
  display: "swap",
});

const herr_von_muellerhoff = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-herr_von_muellerhoff",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${roboto.className} ${herr_von_muellerhoff.variable} ${source_sans_pro.variable}`}
      >
        <NavbarWrapper />
        <ScrollToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
