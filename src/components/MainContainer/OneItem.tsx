import React from 'react';
import BallotIcon from '@mui/icons-material/Ballot';
import Property from './Property';

//Replace any with correct one !!!!!!!!!!!

interface Props{
  header: string,
  data: Array<any> | { [key: string]: string },
  firstColunmItems: number,
  externalProperty?: string,
  externalLink?: string,
  backTo?: string,
}

const OneItem = (props: Props) => {
  return (
    <div className='single-main-container'>
      <div className="content-wrapper">
        <div className="single-card-header">
          <p className="card-header-title">
            <span>
              <BallotIcon />
            </span>
            <span className='card-header-description'>
              {props.header}
            </span>
          </p>
        </div>
        <div className="card-content">
          <div className="card-grid">
            <div className='first-column'>
              {Object.keys(props.data).map((key, index) =>
                index <  props.firstColunmItems
                  ? key === props['externalProperty']
                    ? <Property
                      currentKey={key}
                      key={index}
                      item={props.data}
                      externalLink={props.externalLink} /> 
                    : <Property
                      currentKey={key}
                      key={index}
                      item={props.data} />
                  : ''
              )
              }
            </div>
            <div className='second-column'>
              {Object.keys(props.data).map((key, index) =>
                index >= props.firstColunmItems
                  ? key === props['externalProperty']
                    ? <Property currentKey={key} key={index} item={props.data} externalLink={props.externalLink} />
                    : <Property currentKey={key} key={index} item={props.data} />
                  : ''
              )
              }
            </div>
          </div>
          {/* {
            props.itemsList
              ? props.itemsList
              : ''
          } */}
        </div>
      </div>
    </div>
  );
};

export default OneItem;