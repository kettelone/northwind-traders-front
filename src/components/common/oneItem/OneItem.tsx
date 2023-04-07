import React from 'react';
import styled from 'styled-components';
import BallotIcon from '@mui/icons-material/Ballot';
import Property from '../itemProperty/ItemProperty';


const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 15em;
  padding-top: 3.5em;
`

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em;
`

const CardHeader  = styled.div`
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

const Description = styled.span`
    margin-left: 0.5rem;
`

const CardContent = styled.div`
  padding: 1.5rem;
  background-color: white;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`
//TO DO: Replace <any> with correct ones 

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
    <MainContainer>
      <Wrapper>
        <CardHeader>
          <HeaderTitle>
            <span><BallotIcon /></span>
            <Description>{props.header}</Description>
          </HeaderTitle>
        </CardHeader>
        <CardContent>
          <CardGrid>
            <div>
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
            <div>
              {Object.keys(props.data).map((key, index) =>
                index >= props.firstColunmItems
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
          </CardGrid>
        </CardContent>
      </Wrapper>
    </MainContainer>
  );
};

export default OneItem;