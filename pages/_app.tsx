import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
