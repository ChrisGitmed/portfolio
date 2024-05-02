import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;

  display: flex;
  flex-direction: column-reverse;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
`;

const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

const Input = styled.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

const Hints = styled.span`
  margin-right: 0.875rem;
`;


export {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper
}