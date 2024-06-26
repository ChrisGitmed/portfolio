import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/helpers";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import { Usage } from "../Usage";

const projects = [
  {
    id: 1,
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor amet...",
    url: "https://github.com/ChrisGitmed",
  },
  {
    id: 2,
    title: "Lotem Ipsum",
    desc: "Lorem ipsum dolor amet...",
    url: "https://github.com/ChrisGitmed",
  },
];



const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};


export { Projects };
