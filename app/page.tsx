import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-[50%] items-center justify-center px-10 py-10 grid grid-rows-1 m-auto">
        <h1 className="font-black text-4xl">Desculpe...</h1>
        <p className="pt-5 flex items-center justify-center">
          Desculpe, mas estamos com problemas para continuar usando a API do pokeAPI!!!
        </p>
        <div className="pt-10 flex items-center justify-center">
          <Image
            src="/images/charizard.png"
            alt="Charizard"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
