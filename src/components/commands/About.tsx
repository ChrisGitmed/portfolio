import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";


const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>Hello, my name is <HighlightSpan>Christopher Gitmed</HighlightSpan> and I'm a software engineer based in Santa Barbara, California.</p>
      <p>I'm passionate about programming and find enjoyment in designing and implementing secure, scalable systems.</p>
      <p>When not doing development, I'm typically training brazilian jiu jitsu or hiking.</p>
    </AboutWrapper>
  );
};


export { About };
