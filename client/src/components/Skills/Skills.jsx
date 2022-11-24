import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiTypescript,
  SiPython,
  SiDocker,
  SiMysql,
  SiAngular,
  SiVuedotjs,
  SiDjango,
} from "react-icons/si";
import "../../UI/Main/Skills/Skills.scss";
const Skills = () => {
  const currentSkills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Nodejs", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Github", icon: <SiGithub /> },
  ];
  const futureSkills = [
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "DJango", icon: <SiDjango /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Vue", icon: <SiVuedotjs /> },
  ];
  return (
    <section className="skills_container">
      <h2>Skills</h2>
      <div className="future-skills skills">
        <h3>Current skills:</h3>
        <ul className="skills-list">
          {currentSkills.map((skill) => (
            <li>
              {skill.icon} {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="current-skills skills">
        <h3>Future skills:</h3>
        <ul className="skills-list">
          {futureSkills.map((skill) => (
            <li>
              {skill.icon} {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
