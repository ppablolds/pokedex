import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export async function getStaticPaths() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, page) => {
    item.id = page + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <NavBar />
      <div>
        <ul>
          {pokemons &&
            pokemons.map((pokemon) => <li key={pokemon.id}>{pokemon.name}</li>)}
        </ul>
      </div>
      <Footer />
    </>
  );
}
