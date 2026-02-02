import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Chakra_Petch, Poppins } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from "@vercel/analytics/react";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), {
  ssr: false,
});

const font_chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

const font_ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const font_bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

const font = Poppins({
  subsets:['latin'],
  weight:['100','300','400','500','600','700'],
  variable:'--font-poppins'
})

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showCursor, setShowCursor] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!prefersReducedMotion && hasFinePointer) {
      setShowCursor(true);
    }

    const handleRouteChangeStart = () => {
      // Placeholder for future lightweight route-change feedback if needed.
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Cultural Logo.svg" type="image/svg +xml " />
      </Head>
      <Script id="smooth-scroll" strategy="afterInteractive">
        {"document.documentElement.setAttribute('data-scroll-behavior', 'smooth');"}
      </Script>
      <div>
        <main
          className={`${font.variable} ${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable} ${font_bebas.variable}`}
        >
          <Component {...pageProps} />
          <Analytics />
          {showCursor && <SplashCursor />}
        </main>
      </div>
    </>
  );
}

