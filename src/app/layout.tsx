import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WalletModal } from "@/components/WalletModal";
import { SearchModal } from "@/components/SearchModal";

const neueGalano = localFont({
  src: [
    {
      path: "./fonts/NeueGalanoUnlicensedTest-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NeueGalanoUnlicensedTest-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-galano",
  display: "swap",
});

const mamaKilo = localFont({
  src: [
    {
      path: "./fonts/MamaKilo Decorative.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mamakilo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLACKfrica | On-Chain African Modeling, Fashion & Art",
  description:
    "Bridging African modeling, fashion, art, and digital ownership. Redefining cultural provenance into on-chain assets that empower models and connect global fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueGalano.variable} ${mamaKilo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('blackfrica-theme');
                  var theme = stored ? JSON.parse(stored).state.theme : 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans font-light antialiased min-h-screen flex flex-col justify-between selection:bg-brand-gold selection:text-black">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WalletModal />
          <SearchModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
