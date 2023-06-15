import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import React from "react";
import Image from "next/image";
import MoreLikeThis from "@/components/MoreLikeThis";
import SearchMovieDetailsTop from "@/components/SearchMovieDetailsTop";

SwiperCore.use([Pagination]);

export async function getServerSideProps(ctx) {
  const query = ctx.query.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await res.json();

  const urls = await data?.results
    ?.filter((item: any) => !!item.backdrop_path)
    ?.map((movie) => movie.backdrop_path);

  return {
    props: {
      movies: data?.results || [],
      urls,
    },
  };
}

const Search = ({ movies, urls }) => {
  if (!movies?.length) {
    return <span>Not Found</span>;
  }
  return (
    <section className="">
      <div className="slider-area relative">
        <Swiper
          effect="fade"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {urls?.map((backdrop_path) => (
            <SwiperSlide className="w-full h-auto relative" key={backdrop_path}>
              <div className="w-full min-h-[25vh]  sm:min-h-[30vh] md:min-h-[35vh] lg:min-h-[40vh] relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                  alt="img"
                  layout="fill"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination absolute bottom-0 right-0 m-0 z-[51]"></div>
        <div
          className="absolute top-0 left-0 w-full h-full z-50"
          style={{
            background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
          }}
        >
          {/* {router?.query?.query} */}
        </div>
      </div>

      <div className="container mt-[2vh]">
        <SearchMovieDetailsTop movie={movies[0]} />
        <div className="more-like-this mt-[4rem]">
          <MoreLikeThis movies={movies} />
        </div>
      </div>
    </section>
  );
};

export default Search;
