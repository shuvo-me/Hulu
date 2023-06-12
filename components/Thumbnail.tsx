import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { FC, forwardRef } from "react";

interface ThumbnailProps {
  movie: {
    id: number;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    title: string;
    original_name: string;
    media_type: string;
    release_date: string;
    first_air_date: string;
  };
}

const Thumbnail: FC<ThumbnailProps> = forwardRef(({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="p-2 group cursor-pointer transition duration-200 ease-in transform hover:z-50 sm:hover:scale-105">
        <div className="relative  min-w-[290px] min-h-[163px] rounded-md overflow-hidden">
          <Image
            layout="fill"
            src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
            alt="image"
          />
        </div>

        <div className="mt-3">
          {/* <p className=" truncate max-w-md">{movie.overview}</p> */}
          <h2 className="mt-1 text-lg text-gray-200 font-bold transition-all duaration-100 ease-in-out text-[1.7rem] text-left">
            {movie.title || movie.original_name}
          </h2>
          <p className=" flex items-center opacity-0 group-hover:opacity-100 text-[1.4rem] mt-2">
            {movie.media_type && `${movie.media_type} •`}{" "}
            {movie.release_date || movie.first_air_date} •{" "}
            <ThumbUpIcon className="h-5 mx-2" />
            {movie.id}
          </p>
        </div>
      </div>
    </Link>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
