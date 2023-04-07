import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`
const Button = styled.button`
  border-radius: 0.25rem;
  border  :none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
  background-color: #EF4444;
  font-size: 1em;

  & :hover {
  background-color: #eb172c;
}
`

const NavButton = () => {
  return (
    <Wrapper>
      <div>
        <Button>Go back</Button>
      </div>
    </Wrapper>
  );
};

export default NavButton;