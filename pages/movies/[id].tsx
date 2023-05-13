import { useRouter } from "next/router";
import React from "react";

const MovieDetails = () => {
  const router = useRouter();
  return <div>{JSON.stringify(router)}</div>;
};

export default MovieDetails;
