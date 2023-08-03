"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { screens } from "tailwindcss/defaultTheme";

import Person from "@/person.config";
import SkillCard from "@/components/ui/(skillsPage)/skillCard";

export default function SkillsPage() {
  const medium = parseInt(screens.lg);
  return (
    <section
      id="skills"
      className="flex flex-col gap-5 items-center min-h-screen w-full"
    >
      <h2 className="text-primary text-2xl font-semibold self-start">Skills</h2>

      <div className="flex  flex-wrap gap-7 items-start justify-center w-full ">
        {Person.skills.map((skill) => {
          return <SkillCard key={skill.skillName} skill={skill} />;
        })}
      </div>
    </section>
  );
}
