import React from 'react';
import styled from 'styled-components';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div<{ customFontSize?: string }>`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  padding: 0.75rem 1.5rem;
  font-size:${props => props.customFontSize ? props.customFontSize : "inherit"};
`

//TO DO: change font for Empoloyees 'Page 1 of 1'

const Wrapper = styled.div`
   display: flex;
`

interface Props {
  currentPage: number,
  totalCount: number,
  pageSize:number,
  onPageChange: (value: number) => void,
  siblingCount?: number,
}

const Pagination = (props: Props) => {
  const {
    currentPage,
    totalCount,
    pageSize,
    onPageChange,
    siblingCount = 3,
  } = props;

  let paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  const PaginationButton = styled.button`
    padding: 0.5rem 1rem;
    margin: auto 4px;
    border: 1px solid white;
    color: rgba(0, 0, 0, 0.87);
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 4px;
    line-height: 1.43;
    font-size: 1rem;
    min-width: 32px;
  `

  const ActitePaginationButton = styled(PaginationButton)`
   border: 1px solid rgb(209 213 219);
  `

  const HoveredButton = styled(PaginationButton)`
    &:hover {
    cursor: pointer;
  }
  `

  const PaginationText = styled.div`
    font-size: 0.8em;
  `

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return (
      <Container customFontSize={"0.8em"}> Page 1 of 1 </Container>
    )
  } 

  return (
    <Container>
      <Wrapper>
        {      
          paginationRange!.map(pageNumber =>
          pageNumber === DOTS
              ? <HoveredButton
              key={uuidv4()}
            >
              &#8230;
              </HoveredButton>
            : typeof pageNumber === 'number'
                ? currentPage === pageNumber
                  ?
              <ActitePaginationButton 
                onClick={() => onPageChange(pageNumber)}
                key={uuidv4()}>
              {pageNumber}
              </ActitePaginationButton>
                  :
              <PaginationButton
                onClick={() => onPageChange(pageNumber)}
                key={uuidv4()}>
                {pageNumber}
              </PaginationButton>
              :''

          )
        }
      </Wrapper>
      <PaginationText>
        Page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </PaginationText>
    </Container>
  );
};

export default Pagination;
