import ActorLists from "@/components/ActorLists";
import MovieDetailsTopContent from "@/components/MovieDetailsTopContent";
import { GetServerSideProps } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const movieId = ctx?.query?.id || "";
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  });

  const res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    }
  );

  const actors = await res2.json();

  const movieDetails = await res.json();

  return {
    props: { movieDetails, actors },
  };
};

const MovieDetails = ({ movieDetails, actors }) => {
  console.log({ actors });

  return (
    <section className="h-[100vh] w-full">
      <div
        className="section-top min-h-[25vh] sm:min-h-[30vh] md:min-h-[35vh] lg:min-h-[40vh] flex justify-center items-center flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h4 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] underline">
          {movieDetails?.title}
        </h4>
        <p className="text-[2.2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-[2.8rem]">
          {movieDetails?.tagline}
        </p>
      </div>
      <div className="container mt-[2vh]">
        <MovieDetailsTopContent movieDetails={movieDetails} />
        <div className="more-like-this mt-[4rem]">
          <ActorLists actors={actors.cast} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
