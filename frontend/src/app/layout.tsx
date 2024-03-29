
import type { Metadata } from "next";
import { inter } from "./fonts";
import "@/assets/css/main.css";
import Header from "./components/header";
import CommentProvider from "./context/commentContext";

export const metadata: Metadata = {
  title: "Paratic Piyasalar: Canlı Piyasa Verileri ve Grafik Ekranı",
  description: "Piyasalardaki son durumdan ilk siz haberdar olun. Canlı ekranlar, anlık grafikler ve muhteşem özellikler; Piyasa.Paratic.com'da sizleri bekliyor.",

  category: "Finance",
  keywords: "piyasa, borsa, forex, kripto, canlı, veri, grafik, ekran, paratic, paratic.com, paraticpiyasalar, paraticpiyasa, paraticpiyasalar.com, paraticpiyasa.com",
  twitter: {
    card: "summary",
    site: "@paraticpiyasa",
    creator: "@paraticpiyasa",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <CommentProvider>
          <Header />
          {children}
        </CommentProvider>
      </body>
    </html>
  );
}
