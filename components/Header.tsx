import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";

const bannerImages = [
  "/images/banner/banner-1.jpg",
  "/images/banner/banner-2.jpg",
  "/images/banner/banner-3.jpg",
  "/images/banner/banner-4.jpg",
  "/images/banner/banner-5.jpg",
];

export default function Header() {
  const router = useRouter();
  const [searcing, setSearching] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    router.events.on("routeChangeStart", () => setSearching(true));
    router.events.on("routeChangeComplete", () => setSearching(false));
    router.events.on("routeChangeError", () => setSearching(false));
  }, []);

  return (
    <header className="relative">
      <Swiper
        effect="fade"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImages?.map((img) => (
          <SwiperSlide className="w-full h-auto relative" key={img}>
            <div className="w-full min-h-[70vh] relative">
              <Image src={img} alt="img" layout="fill" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-black bg-opacity-70 absolute top-0 left-0 w-full h-full z-[99] flex justify-center items-center flex-col">
        <h3 className="text-[4rem] capitalize font-bold">
          Find the best <span className="text-green-500">movies</span> In town
        </h3>
        <div className="mt-8">
          <div className="border border-slate-300 border-opacity-60 flex items-center overflow-hidden rounded-md px-3 transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Search by movie name"
              className="bg-transparent outline-none border-0 p-2 text-[1.6rem] text-slate-200 placeholder:text-[1.4rem]"
              value={query}
              onInput={(e: any) => setQuery(e.target?.value)}
            />
            {query && (
              <button onClick={() => router.push(`/search?query=${query}`)}>
                {searcing ? (
                  <small>
                    <Oval height={20} width={20} />
                  </small>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
// https://blog.logrocket.com/next-js-routechangestart-router-events/
