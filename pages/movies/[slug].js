import Link from "next/link"; // import Next.js "Link" component for navigation
import Head from "next/head"; // import Next.js "Head" component to modify the head of the page
import { useRouter } from "next/router"; // import Next.js "useRouter" hook for accessing the router object
import { movies } from "../../lib/data"; // import movies data from a local data file

export default function MoviePage() {
  const router = useRouter(); // create the router object using useRouter hook

  // destructure slug property from the router query object
  const { slug } = router.query;

  // find the current movie from the movies data based on the "slug"
  const currentMovie = movies.find((movie) => movie.slug === slug);

  // if current movie or slug doesn't exist, display a message.
  if (!currentMovie || !slug) {
    return <h1>No movie found</h1>;
  }

  // destructure properties from the currentMovie object
  const { title, description, year } = currentMovie;

  return (
    <>
      {/* Set the page title to "Movies Title" by using the Next.js Head component */}
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        {title} {year}
      </h1>
      <p>{description}</p>
      {/* Link to navigate back to the movies list */}
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
