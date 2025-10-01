/**
 * @copyright 2025 Wondwosen Abera
 * @license Apache-2.0
 */

/**
 *
 * Components
 */

import SkillCard from "./SkillCard";
import { getImagePath } from "../utils/paths";

const skillItem = [
  {
    imgSrc: getImagePath("figma.svg"),
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: getImagePath("css3.svg"),
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: getImagePath("javascript.svg"),
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: getImagePath("nodejs.svg"),
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: getImagePath("expressjs.svg"),
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: getImagePath("mongodb.svg"),
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: getImagePath("react.svg"),
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: getImagePath("tailwindcss.svg"),
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
