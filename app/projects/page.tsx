import Card from "@/Components/Card";
import { Navigation } from "@/Components/Navigation";
import Particles from "@/Components/particles";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center w-screen md:h-screen overflow-scroll bg-gradient-to-tl from-black via-zinc-600/20 to-black font-mono ">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      <Navigation first_link={"resume"} second_link={"contact"} />
      <div>
        <div className="text-center md:mt-12 mt-20 lg:mt-24">
          <header>
            <h1 className="text-4xl md:text-5xl">Contact Me!</h1>
          </header>
          <br />
        </div>
        <Card />
      </div>
      <footer>
        <p>&copy; 2023 Layaida Samy</p>
      </footer>
    </main>
  );
}

export default page;
