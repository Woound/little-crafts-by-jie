import { Baloo_2, Caveat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-baloo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "little crafts by jie · handmade crochet",
  description:
    "handmade crochet bags, drawstring pouches, heart keychains and cosy little bits, each one made by hand in the uk. browse the shop or commission something just for you.",
  openGraph: {
    title: "little crafts by jie · handmade crochet",
    description:
      "handmade crochet bags, drawstring pouches, heart keychains and cosy little bits, each one made by hand in the uk.",
    siteName: "little crafts by jie",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${caveat.variable} ${nunito.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
