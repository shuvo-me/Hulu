import React, { FC, useEffect, useState } from "react";
import SkeletonLoaderImageWithText from "./SkeletonLoaderImageWithText";

interface MovieDetailsTopContentProps {
  movieDetails: {
    title: string;
    genres: Array<any>;
    poster_path: string;
    popularity: Number;
    overview: string;
  };
}

const MovieDetailsTopContent: FC<MovieDetailsTopContentProps> = ({
  movieDetails,
}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [loved, setLoved] = useState(false);

  const formatNumber = (n) => {
    if (n < 1e3) return Math.round(n) / 1000 + "K";
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (movieDetails) {
        setShowSkeleton(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [movieDetails]);

  if (showSkeleton) {
    return <SkeletonLoaderImageWithText />;
  }

  return (
    <div className="flex items-center">
      <div className="movie-details">
        <div className="movie-details-top flex flex-col md:flex-row gap-10">
          <div className="movie-image flex-auto relative h-[300px] max-w-[200px] rounded-md over-flow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt="movie-image"
              className="rounded-md"
            />
          </div>
          <div className="movie-info flex-auto">
            <h4 className="movie-title font-bold text-[2.4rem] ">
              {movieDetails?.title}
            </h4>
            <div className="genres flex flex-wrap gap-2 my-[1.6rem]">
              {movieDetails?.genres?.map((genres) => (
                <span
                  className="text-[1.4rem] px-9 py-2 bg-trasparent rounded-full border border-slate-900 text-slate-400"
                  key={genres?.id}
                >
                  {genres?.name}
                </span>
              ))}
            </div>
            <div className="buttons flex gap-3">
              <button className="flex items-center gap-1 bg-green-600 px-[2.4rem] py-2 text-slate-200 rounded-full">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <small className="font-bold text-[1.6rem]">Watch</small>
              </button>

              <button
                className={`flex items-center justify-center transition ease-linear duration-[0.5s] ${
                  loved
                    ? "border-green-600 text-green-600"
                    : "border-slate-800 text-slate-400"
                } border  h-[4rem] w-[4rem] bg-transparent rounded-full  text-[2rem]`}
                onClick={() => setLoved(!loved)}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  className={`flex items-center justify-center transition ease-linear duration-[0.5s] border border-slate-800 text-slate-400  h-[4rem] w-[4rem] bg-transparent rounded-full  text-[2rem]`}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </span>
                </button>

                <span className="text-[1.6rem]">
                  {formatNumber(movieDetails?.popularity)}
                </span>
              </div>
            </div>
            <div className="movie-details-bottom mt-[2.5rem]">
              <h5 className="text-[1.5rem]">StoryLine.</h5>
              <p className="text-[1.8rem] text-slate-300 mt-4">
                {movieDetails?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsTopContent;
