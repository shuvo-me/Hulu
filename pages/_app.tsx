import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextProgress from "next-progress";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <NextProgress
        delay={300}
        options={{ showSpinner: false }}
        color="#22c55e"
      />
      <SessionProvider session={session}>
        <Nav />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;

// https://github.com/beeinger/next-progress
