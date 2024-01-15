import Link from "next/link"; // import Next.js "Link" component for navigation
import Head from "next/head"; // import Next.js "Head" component to modify the head of the page
import { useRouter } from "next/router"; // import Next.js "useRouter" hook for accessing the router object
import { movies } from "../../lib/data"; // import movies data from a local data file

export default function Movies() {
  const router = useRouter(); // create the router object using useRouter hook

  return (
    <>
      {/* Set the page title to "Movies List" by using the Next.js Head component */}
      <Head>
        <title>Movies List</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              {/* Create a Link to each movie's page using its slug */}
              <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      {/* IMPERATIVE ROUTING */}
      <button
        type="button"
        onClick={() => {
          // Confirm dialog to check user response
          if (confirm("Are you aquaman")) {
            // If confirmed, navigate to the Aquaman movie page
            router.push("/movies/aquaman");
          }
        }}
      >
        Are you really Aquaman?
      </button>
    </>
  );
}
