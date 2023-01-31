import React from 'react';
import { Link } from 'react-router-dom'

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
    <div className='search-container'>
      <p className='search-result-name'>
        <Link to={`/customer/${id}`}>
          {companyName}
        </Link>
      </p>
      <p className='search-result-description'>
        #{props.index + 1} Contact: {contactName}, Title: {contactTitle}, Phone: {phone}
      </p>
    </div>
   );
};

export default CompanyResult;