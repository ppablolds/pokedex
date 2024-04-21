import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="flex py-10 px-10 bg-red-600 text-white">
      <div className="flex w-full gap-3">
        <Link href="/" className="flex space-x-5">
          <Image
            src="/images/pokeball.png"
            alt={"Logo"}
            width={50}
            height={50}
          />
          <h1 className="flex pt-3 font-black">PokeDex</h1>
        </Link>
      </div>
      <div className="pt-3 space-x-4">
        <Link href="/">Home</Link>
        <Link href="About">Sobre</Link>
      </div>
    </nav>
  );
}
