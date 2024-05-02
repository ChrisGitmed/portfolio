import {
  User,
  WebsiteName,
  Wrapper,
} from "./styles/TerminalInfo.styled";


const TerminalInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.cgitmed.dev</WebsiteName> λ
    </Wrapper>
  );
};


export { TerminalInfo };
