export type Link = {
    name: string;
    path: string;
}

export type Cast = {
  name: string;
  profile_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Trailer = {
  image: string;
  videoUrl: string;
};

export type Show = {
  _id: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genres: Genre[];
  casts: Cast[];
  release_date: string;
  original_language: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
};
