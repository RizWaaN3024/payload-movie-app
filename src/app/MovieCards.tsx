import React, { useState } from "react";
import type { Movie, Media } from "payload-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ThumbsUpIcon, VoteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MovieCards({ movies: initialMovies }: { movies: Movie[] }) {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);

    return (
        <div className="flex flex-wrap gap-3">
            {movies.map((movie) => {
                return (
                    <React.Fragment key={movie?.id}>
                        <Card className="md:max-w-72">
                            <CardHeader>
                                <CardTitle>{movie?.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Link href={`/movie/${movie.slug}`}>
                                    <Image
                                        src={(movie.poster as Media)?.url ?? ''}
                                        alt={(movie.poster as Media)?.text ?? ''}
                                        width={(movie.poster as Media)?.width ?? 100}
                                        height={(movie.poster as Media)?.height ?? 100}
                                    />
                                </Link>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <ThumbsUpIcon />
                                        <div>{movie?.votes}</div>
                                    </div>
                                    <Button
                                        onClick={async () => {
                                            setMovies(await addVote(movie?.id))
                                        }}
                                    >
                                        <VoteIcon /> Vote
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </React.Fragment>
                )
            })}
        </div>
    )
}