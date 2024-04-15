import Image from "next/image";

export function Sobre() {
  return (
    <>
      <div className="w-[50%] items-center justify-center px-10 py-10 grid grid-rows-1 m-auto">
        <h1 className="font-black text-4xl">Sobre o Projeto</h1>
        <p className="pt-5 flex items-center justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius
          voluptatum, in adipisci corrupti enim, vero, voluptas earum natus
          veniam cupiditate dicta eos ab molestiae iure deleniti consectetur
          possimus corporis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam possimus dicta sunt doloribus saepe, illum facilis
          reprehenderit quo ex consequatur officiis molestias, incidunt fugiat
          ab quibusdam a temporibus animi atque.
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
