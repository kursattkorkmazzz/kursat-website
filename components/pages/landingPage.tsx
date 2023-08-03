"use client";
import Image from "next/image";
import Avatar from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

import { useAnimate } from "framer-motion";

import bgImage from "@/public/background.jpg";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function LandingPage() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { y: [-20, 0] },
      {
        repeat: Infinity,
        duration: 1,
        repeatType: "reverse",
      }
    );
  }, [scope]);

  return (
    <section
      id="home"
      className="min-h-screen text-white  bg-black flex flex-col items-center justify-evenly relative"
    >
      <Image
        src={bgImage}
        alt="background image for landingpage"
        className=" w-full h-full object-cover opacity-[0.3]  grayscale absolute  top-0 left-0"
      />
      <div className="flex flex-col items-center z-[1] ">
        <Avatar />
      </div>

      <Link to="biography" delay={0} className="p-1 select-none cursor-pointer">
        <ChevronDown ref={scope} className="z-[1]" />
      </Link>
    </section>
  );
}
