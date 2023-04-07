import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    padding: '3em';
`

interface Props{
  value:string
}

const Loader = (props: Props) => {
  return (
    <StyledLoader>
      Loading {props.value}...
    </StyledLoader>
  );
};

export default Loader;