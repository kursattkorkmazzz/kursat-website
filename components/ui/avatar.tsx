"use client";

import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

import avatarImg from "@/public/avatar.png";
import Person from "@/person.config";

export default function Avatar() {
  const professions: string[] = [];
  Person.profession.map((profession) => {
    professions.push(profession + " !");
  });

  return (
    <div className="flex flex-col items-center text-white select-none">
      <div className="rounded-full border-8 border-primary/10 hover:border-primary/20 hover:scale-[1.02] transition duration-200">
        <Image
          src={avatarImg}
          alt="Picture of me"
          className="rounded-full w-[160px]"
        ></Image>
      </div>
      <h2 className="font-montserrat leading-10 text-[32px] font-bold text-center ">
        {Person.personal.name.toUpperCase()}
        <br />{" "}
        <span className="text-primary">
          {Person.personal.surname.toUpperCase()}
        </span>
      </h2>
      <br />
      <div className="flex gap-1 font-mulish">
        I am a
        <TypewriterComponent
          options={{
            strings: professions,
            delay: 50,
            deleteSpeed: 30,
            loop: true,
            autoStart: true,
          }}
        />
      </div>
    </div>
  );
}
