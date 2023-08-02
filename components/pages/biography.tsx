"use client";
import TypewriterComponent from "typewriter-effect";
import { InfoTable } from "@/components/ui/(biography)/tables";
import Image from "next/image";
import Link from "next/link";

import avatarIMG from "@/public/avatar.png";
import Person from "@/person.config";
import { useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BiographyPage() {
  const [controlSize, setControlSize] = useState({ width: 0, height: 0 });
  const [tempPosition, setTempPosition] = useState({
    x: controlSize.width / 2,
    y: controlSize.height / 2,
  });

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const deltaNumber = 10;
    const mouseHoverAreaSizeWidth = controlSize.width;
    const mouseHoverAreaSizeHeight = controlSize.height;

    const stepX = (deltaNumber * 2) / (mouseHoverAreaSizeWidth - 1);
    const stepY = (deltaNumber * 2) / (mouseHoverAreaSizeHeight - 1);
    animate(
      scope.current,
      {
        x: deltaNumber - tempPosition.x * stepX,
        y: deltaNumber - tempPosition.y * stepY,
      },
      { duration: 0.1, type: "spring", damping: 20, mass: 0.1, stiffness: 150 }
    );
  }, [tempPosition, controlSize]);

  return (
    <section
      id="biography"
      className="flex flex-col  min-h-screen gap-5 items-center  py-20 px-5 md:px-[20%]"
      onMouseMove={(e) => {
        setControlSize({
          width: document.getElementById("biography")!.scrollWidth,
          height: document.getElementById("biography")!.scrollHeight,
        });
        setTempPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onMouseLeave={(e) => {
        setTempPosition({
          x: controlSize.width / 2,
          y: controlSize.height / 2,
        });
      }}
    >
      <h2 className="text-primary text-2xl font-semibold self-start">
        Biography
      </h2>

      <div className="flex gap-1 items-center text-md text-gray-400 self-start ">
        <p>I am {Person.personal.fullname} and </p>
        <TypewriterComponent
          options={{
            strings: Person.profession,
            delay: 50,
            deleteSpeed: 30,
            loop: true,
            autoStart: true,
          }}
        />
      </div>
      <br />
      <p className="font-thin  text-justify mr-5 leading-7">
        {Person.biography}
      </p>
      <br />
      <div className="flex flex-col items-center md:flex-row w-full md:justify-center md:items-start md:gap-10">
        <Image
          ref={scope}
          src={avatarIMG}
          alt="Avatar image of me"
          className="w-[50%] max-w-[200px] rounded-xl hover:scale-150"
          onMouseEnter={(e) => {
            animate(scope.current, { scale: 1.05 }, { duration: 0.3 });
          }}
          onMouseLeave={(e) => {
            animate(scope.current, { scale: 1 }, { duration: 0.3 });
          }}
        />
        <br />
        <br />
        <br />
        <div className="flex flex-col gap-10 items-center">
          <InfoTable />
          <Link href={Person.cv}>
            <motion.div
              className="text-center w-fit bg-primary text-white py-3 px-5 cursor-pointer select-none rounded"
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              Download CV
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
