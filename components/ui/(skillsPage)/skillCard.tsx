import { motion } from "framer-motion";
import SkillMeter from "./skillMeter";

export default function SkillCard({
  skill,
}: {
  skill: {
    Icon: any;
    iconColor: string;
    skillName: string;
    description: string;
    skillMeterNumber: number;
  };
}) {
  return (
    <motion.div
      className="flex flex-col items-center select-none w-[250px] gap-5 rounded-md py-5 px-5 bg-slate-50 shadow"
      whileHover={{
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        scale: 1.05,
      }}
      transition={{ duration: 0.3, repeatType: "reverse" }}
    >
      <skill.Icon size="56" color={skill.iconColor} />
      <h2 className="font-bold ">{skill.skillName}</h2>
      <SkillMeter skillLevel={skill.skillMeterNumber} />
      <p className="text-justify">{skill.description}</p>
    </motion.div>
  );
}
