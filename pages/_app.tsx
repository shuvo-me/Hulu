import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress
        delay={300}
        options={{ showSpinner: false }}
        color="#22c55e"
      />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// https://github.com/beeinger/next-progress
