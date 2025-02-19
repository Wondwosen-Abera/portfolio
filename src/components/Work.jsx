/**
 * @copyright 2025 Wondwosen Abera
 * @license Apache-2.0
 */

/**
 *
 * Components
 */
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Recipe suggestion app",
    tags: ["API", "AI", "Development"],
    projectLink: "https://claudechef.netlify.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Fitness app",
    tags: ["API", "Fitness", "Development"],
    projectLink: "https://goldsgymzone.netlify.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Assembly end game",
    tags: ["Game", "Development"],
    projectLink: "https://assemblyendgame.netlify.app/",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "Tenzies gameplay",
    tags: ["Game", "Development"],
    projectLink: "https://tenziesgameplay.netlify.app/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://wondwosen-abera.github.io/ecommerce-website/",
  },
  {
    imgSrc: "/images/project-6.png",
    title: "Admin dashboard",
    tags: ["Admin", "Web-design", "Development"],
    projectLink: "https://uradmindashboard.netlify.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
