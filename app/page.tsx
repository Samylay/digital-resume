import Socials from "@/Components/Socials";
import Particles from "../Components/particles";
import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-400 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen  md:block" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
        />
        <h1 className="z-10 text-5xl font-semibold tracking-wider duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-7xl whitespace-nowrap bg-clip-text ">
          Samy Layaida
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block " />
        <div className="my-16 text-center animate-fade-in max-w-[90%]">
          <h2 className="text-sm text-zinc-400 ">
            Hi, my name is Samy, I&apos;m a passionate Computer science student
            with a strong interest in DevOps engineering.
          </h2>
          <div className="mt-20 mx-20">
            <Socials />
          </div>
        </div>
        <footer className="my-16 animate-fade-in">
          <p>&copy; 2023 Layaida Samy</p>
        </footer>
      </main>
    </>
  );
}
