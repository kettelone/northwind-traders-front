import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './Pagination.css'
import { v4 as uuidv4 } from 'uuid';

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

    

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <div className='pagination-container'>
      <div className="pagination-items-wrapper">
        {      
          paginationRange!.map(pageNumber =>
          pageNumber === DOTS
            ? <button
              className="pagination-button dots"
              key={uuidv4()}
            >
              &#8230;
              </button>
            : typeof pageNumber === 'number'
                ? currentPage === pageNumber
                  ?
              <button
              className='pagination-button page-active' 
              onClick={() => onPageChange(pageNumber)}
                key={uuidv4()}
            >
              {pageNumber}
              </button>
                  :
              <button
                className='pagination-button'
                onClick={() => onPageChange(pageNumber)}
                key={uuidv4()}
                  >
                {pageNumber}
              </button>
              :''

          )
        }
      </div>
      <div className="pagination-text">
        Page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </div>
    </div>
  );
};

export default Pagination;
