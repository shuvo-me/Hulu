import useFetch from "hooks/useFetch";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Thumbnail from "./Thumbnail";
import Link from "next/link";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="bg-slate-800 text-slate-100 h-[40px] w-[40px] rounded-full flex justify-center items-center "
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[2rem] h-[2rem]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
};
const settings = {
  dots: false,
  initialSlide: 0,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  Autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="bg-slate-800 text-slate-100 h-[40px] w-[40px] rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-[2rem] h-[2rem]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
    </button>
  );
};

const ActionMovies = () => {
  const router = useRouter();

  const sliderRef = useRef(null);
  const getMovies = async () => {};
  const { genere } = router.query;
  const {
    data: movies,
    error,
    loading,
  } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?with_genres=28",
    "GET"
  );
  return (
    <>
      <div className="flex justify-between items-center py-3">
        <h4 className="text-[2rem] font-bold ">Action Movies</h4>
        <div className="flex items-center gap-5">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {movies?.map((movie) => (
          <Link href={`/moives/${movie.id}`}>
            <Thumbnail key={movie.id} movie={movie} />
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default ActionMovies;
