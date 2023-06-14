import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const Actor = ({ actor }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform hover:z-50 sm:hover:scale-105">
      <div className="relative  min-w-[290px] min-h-[163px] rounded-md overflow-hidden">
        <Image
          layout="fill"
          src={`${BASE_URL}${actor?.profile_path}`}
          alt="image"
        />
      </div>

      <div className="mt-3">
        <h2 className="mt-1 text-lg text-gray-200 font-bold transition-all duaration-100 ease-in-out text-[1.7rem] text-left">
          {actor.original_name}
        </h2>
        <p className=" flex items-center opacity-0 group-hover:opacity-100 text-[1.4rem] mt-2">
          {actor.character && `${actor.character} •`}{" "}
          {actor.known_for_department || actor.known_for_department} •{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {actor?.popularity}
        </p>
      </div>
    </div>
  );
};

export default Actor;
