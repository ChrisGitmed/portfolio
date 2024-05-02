import _ from 'lodash';
import { useContext } from 'react';

import { termContext } from '../Terminal';
import { Wrapper } from '../styles/Output.styled';


const Echo: React.FC = () => {
  const { arg } = useContext(termContext);

  let outputStr = _.join(arg, " ");
  outputStr = _.trim(outputStr, "'"); // remove trailing single quotes ''
  outputStr = _.trim(outputStr, '"'); // remove trailing double quotes ""
  outputStr = _.trim(outputStr, "`"); // remove trailing backtick ``

  return <Wrapper>{outputStr}</Wrapper>;
};


export { Echo };
