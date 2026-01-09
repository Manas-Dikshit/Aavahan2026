import React from "react";
import Head from "next/head";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-scroll-behavior', 'smooth');`
          }}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main
          className={`${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable} ${font_bebas.variable}`}
        >
          <Component {...pageProps} />
          <Analytics />
          {showCursor && <SplashCursor />}
        </main>
      </motion.div>
    </>
  );
}

