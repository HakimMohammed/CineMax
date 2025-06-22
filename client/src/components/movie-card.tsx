import { Genre, Show } from "@/types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MovieCard = ({ show }: { show: Show }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66">
      <Image
        onClick={() => {
          router.push(`/movies/${show._id}`);
          scrollTo(0, 0);
        }}
        alt="movie illustration"
        height={1000}
        width={2000}
        src={show.backdrop_path}
        className="rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer"
        
      />

      <p className="font-semibold mt-2 truncate">{show.title}</p>
      <p className="text-sm text-gray-400 mt-2">
        {new Date(show.release_date).getFullYear()} - {" "}
        {show.genres
          .slice(0, 2)
          .map((genre: Genre) => genre.name)
          .join(" | ")}{" "}
        - {show.runtime}
      </p>

      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={() => {
            router.push(`/movies/${show._id}`);
            scrollTo(0, 0);
          }}
          className="px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Buy Tickets
        </button>
        <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
          <StarIcon className="h-4 w-4 text-primary fill-primary" />
          {show.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
