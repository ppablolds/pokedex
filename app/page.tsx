import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <NavBar />
      <PokemonGrid pokemonList={pokemonList} />
      <Footer />
    </>
  );
}
