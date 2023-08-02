import Person from "@/person.config";
import {
  School,
  GraduationCap,
  ScrollText,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";
import { animate, motion, inView, stagger, useInView } from "framer-motion";

export function InfoTable() {
  return (
    <div
      id="infoTable"
      className="grid gap-3 grid-cols-[max-content_minmax(0,auto)] items-start"
    >
      <div className="flex gap-2 items-center">
        <CalendarDays className="text-primary" />
        <p className="font-bold">Age: </p>
      </div>
      <p className="break-words ">{Person.personal.age}</p>
      {divider}
      <div className="flex gap-2 items-center">
        <School className="text-primary" />
        <p className="font-bold">University: </p>
      </div>
      <p className="break-words  ">{Person.university.name}</p>

      <div className="flex gap-2 items-center">
        <GraduationCap className="text-primary" />
        <p className="font-bold">Study: </p>
      </div>
      <p className="break-words  ">{Person.university.study}</p>

      <div className="flex gap-2 items-center">
        <ScrollText className="text-primary" />
        <p className="font-bold">Degree: </p>
      </div>
      <p className="break-words  ">{Person.university.degree}</p>
      {divider}
      <div className="flex gap-2 items-center">
        <Mail className="text-primary" />
        <p className="font-bold">Mail: </p>
      </div>
      <motion.a
        className="break-words "
        href={"mailto:" + Person.contact.mail}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={(e) => {
          animate(
            document.getElementById("seperator"),
            { width: "100%" },
            { duration: 0.2 }
          );
        }}
        onMouseLeave={(e) => {
          animate(
            document.getElementById("seperator"),
            { width: "0px" },
            { duration: 0.5 }
          );
        }}
      >
        {Person.contact.mail}
        <motion.div id="seperator" className="bg-primary w-[0px] h-[1px]" />
      </motion.a>

      <div className="flex gap-2 items-center">
        <Phone className="text-primary" />
        <p className="font-bold">Phone: </p>
      </div>
      <p className="break-words  ">{Person.contact.phone}</p>
    </div>
  );
}

const divider = (
  <div className="h-[1px] w-[33.33%] bg-black/20 col-span-2 justify-self-center my-3"></div>
);
