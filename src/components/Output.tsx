import { useContext } from 'react';

import { About } from "./commands/About";
import { Clear } from "./commands/Clear";
import { Echo } from "./commands/Echo";
// import Email from "./commands/Email";
import { GeneralOutput } from "./commands/GeneralOutput";
// import Gui from "./commands/Gui";
import Help from "./commands/Help";
import { History } from "./commands/History";
import { Projects } from "./commands/Projects";
import { Socials } from "./commands/Socials";
// import Themes from "./commands/Themes";
import { Welcome } from "./commands/Welcome";

import {
  OutputContainer,
  UsageDiv,
} from './styles/Output.styled';
import { termContext } from './Terminal';

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          // email: <Email />,
          // gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/cgitmed</GeneralOutput>,
          socials: <Socials />,
          // themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};


export { Output };
