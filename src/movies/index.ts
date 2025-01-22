

export async function searchMovies(query: string) {
    const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=bd9d39a7`
    )
    const { results } = await response.json();
    return results.map(({ id, poster_path, title }: { id: string; poster_path: string; title: string }) => ({
        id,
        poster_path,
        title
    })).filter(({ poster_path }: { poster_path: string }) => !poster_path);
}