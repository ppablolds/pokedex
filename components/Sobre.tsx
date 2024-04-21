import Image from "next/image";

export function Sobre() {
  return (
    <>
      <div className="w-[50%] items-center justify-center px-10 py-10 grid grid-rows-1 m-auto">
        <h1 className="font-black text-4xl">Sobre o Projeto</h1>
        <p className="pt-5 flex items-center justify-center">
          Projeto desenvolvido com NextJS e Shadcn/UI. aprendendo a consumir uma API, e fazemos isso usando o API do pokeAPI, uma API criado para o meio de aprendizado, e com isso você vai poder aprimorar suas habilidades e criar projetos muito maiores.
          Aqui estamos exercendo as habilidades de consumir uma API para mostrar os pokemons e usamos também a fonte de busca, que vai te ajudar a achar os pokemons pelo nome.
          Agradeçemos sua presença!
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
    </>
  );
}
