"use client";

import { Home, PersonStanding } from "lucide-react";
import { Link } from "react-scroll";

import { combineRecursive } from "@/utils/cn";

const routes = [
  {
    text: "Home",
    href: "home",
    icon: Home,
  },
  {
    text: "Biography",
    href: "biography",
    icon: PersonStanding,
  },
];

export default ({ className }: { className?: string }): React.ReactNode => {
  const variants = {
    desktop: {
      position: "md:top-0 md:fixed",
    },
    mobile: {
      position: "sticky bottom-0",
    },
    dark: {
      bgColor: "",
    },
    light: {
      bgColor: "bg-slate-100  md:bg-black",
    },
  };

  return (
    <nav
      className={
        "flex justify-center items-center  w-full h-header z-[99]" +
        combineRecursive(variants) +
        " " +
        className
      }
    >
      <div className="md:hidden flex w-full justify-evenly">
        {routes.map((c) => {
          return (
            <Link
              to={c.href}
              key={c.href}
              className="flex flex-1 flex-col items-center p-2 rounded  select-none cursor-pointer"
              spy
              smooth
              delay={0}
              activeClass="text-primary"
            >
              <c.icon strokeWidth="1" />
              <p className="text-[11px]">{c.text}</p>
            </Link>
          );
        })}
      </div>

      <div className="h-full gap-3 justify-center items-center  hidden md:flex text-white ">
        {routes.map((v) => {
          return (
            <Link
              to={v.href}
              key={v.href}
              activeClass="text-primary"
              className="p-1 rounded hover:text-primary select-none cursor-pointer"
              spy
              smooth
              delay={0}
              duration={0}
            >
              {v.text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
