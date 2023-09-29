import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

type Props = {};

function Socials({}: Props) {
  return (
    <div className="flex justify-evenly mb-2">
      <button className="p-2 bg-white bg-opacity-10 rounded-xl">
        <Link href="https://www.linkedin.com/in/samy-layaida/">
          <AiFillLinkedin size={30} />
        </Link>
      </button>
      <button className="p-2 bg-white bg-opacity-10 rounded-xl">
        <Link href="https://github.com/Samylay">
          <AiFillGithub size={30} />
        </Link>
      </button>
    </div>
  );
}

export default Socials;
