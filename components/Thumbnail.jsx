import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({movie},ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
   return (
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform hover:z-50 sm:hover:scale-105 ">
        <Image layout="responsive" height={1080} width={1920} src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}/>

        <div>
            <p className=" truncate max-w-md">{movie.overview}</p>
            <h2 className="mt-1 text-2xl text-gray-100 group-hover:font-bold transition-all duaration-100 ease-in-out">{movie.title || movie.original_name}</h2>
            <p className=" flex items-center opacity-0 group-hover:opacity-100">
            {movie.media_type && `${movie.media_type} •`}{" "}
            {movie.release_date || movie.first_air_date} •{" "}
                <ThumbUpIcon className="h-5 mx-2"/>
            </p>
        </div>
    </div>
  )
})

export default Thumbnail