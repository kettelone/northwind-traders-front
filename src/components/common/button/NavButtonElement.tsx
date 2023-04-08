import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavButton from './NavButton';

interface Props{
  backTo:string
}

const Container = styled.div`
  width: 100%;
  margin-top: -3em;
`

const SubContainer = styled.div`
  width: 100%;
  padding: 1.5em;
`

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: white;
`

const HorizontalLine = styled.hr`
  border: 1px solid rgb(243 244 246);
`

const StyledLink = styled(Link)`
  background-color: white;
`

const NavButtonElement = (props: Props) => {
  return (
    <Container>
      <SubContainer>
        <HorizontalLine />
        <Wrapper>
          <StyledLink to={props.backTo}>
            <NavButton />
          </StyledLink>
        </Wrapper>
      </SubContainer>
    </Container>
  );
};

export default NavButtonElement;