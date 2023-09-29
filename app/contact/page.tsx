import Socials from "@/Components/Socials";
import { Navigation } from "@/Components/Navigation";
import Particles from "@/Components/particles";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-scroll bg-gradient-to-tl from-black via-zinc-600/20 to-black font-mono p-1">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <Navigation first_link={"projects"} second_link={"resume"} />
      <div className="text-center md:mt-12 mt-20 lg:mt-24">
        <header>
          <h1 className="text-4xl md:text-5xl">Contact Me!</h1>
        </header>
        <br />
        <form className="flex flex-col space-y-4 w-fit mx-auto mb-10 text-black">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline focus:border-gray-500"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline focus:border-gray-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline focus:border-gray-500"
          />
          <textarea
            placeholder="Message..."
            className="w-full h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline focus:border-gray-500"
          ></textarea>
          <button className="bg-inherit border hover:bg-white hover:bg-opacity-10 text-white font-semibold focus:border-gray-500 focus:outline py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>

        <footer>
          <p>&copy; 2023 Layaida Samy</p>
        </footer>
      </div>
    </main>
  );
}

export default page;
