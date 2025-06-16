// import { LucideProps } from "lucide-react";
// import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Link {
    name: string;
    path: string;
    // icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
}

export interface Trailer {
    image: string;
    videoUrl: string;
}

export interface Actor {
    name: string;
    profilePath: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Show {
    _id: string;
    id: string;
    title: string;
    overview: string;
    posterPath: string;
    backdropPath: string;
    genres: Genre[];
    cast: Actor[];
    releaseDate: string;
    originalLanguage: string;
    tagline: string;
    averageRating: number;
    voteCount: number;
    runtime: number;
}

export interface User {
    _id: string;
    username: string;
}

export interface Booking {
    _id: string;
    showId: string;
}