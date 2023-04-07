import React from 'react';
import styled from 'styled-components';
import { SvgIconProps } from '@material-ui/core';


const Container = styled.div`
 display: flex;
 align-items: center;
`
const MaterialIcons = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-size: 24px;
  width: 3rem;
`
interface Props{
  icon: React.ReactElement<SvgIconProps>,
  text:string
}

const MenuListOption = (props: Props) => {
  return (
    <Container>
      <MaterialIcons>{props.icon}</MaterialIcons>
      <span>{props.text}</span>
    </Container>
  );
};

export default MenuListOption;