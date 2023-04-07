import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
   margin-top: 0.5rem;
`
const Description = styled.p`
  font-size: .875rem;
  color: rgb(156 163 175);
`

interface Props{
  result: {
    id:string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    phone: string
  }
  index:number
}

const CompanyResult = (props: Props) => {
  const { id, companyName, contactName, contactTitle, phone } = props.result

  return ( 
    <Container>
      <p>
        <Link to={`/customer/${id}`}>
          {companyName}
        </Link>
      </p>
      <Description>
        #{props.index + 1} Contact: {contactName}, Title: {contactTitle}, Phone: {phone}
      </Description>
    </Container>
   );
};

export default CompanyResult;