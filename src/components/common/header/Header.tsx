import React from 'react';
import styled from 'styled-components';
import RedoIcon from '@mui/icons-material/Redo';

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid rgb(243 244 246);
  height: 3em;
`
const HeaderTitle = styled.p`
  font-weight: bold;
  flex-grow: 1;
  padding: 0.75rem 1rem;
  display: flex;
`

const Ancor = styled.a`
    padding: 0.75rem 1rem;
`
const Span = styled.span`
  color: black;
`
interface Props{
  title: string
}

const Header = (props: Props) => {
  return (
    <CardHeader>
      <HeaderTitle>{props.title}</HeaderTitle>
      <Ancor href='/'>
        <Span>
          <RedoIcon />
        </Span>
      </Ancor>
    </CardHeader>
  );
};

export default Header;