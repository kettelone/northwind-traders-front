import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './Pagination.css'
import { v4 as uuidv4 } from 'uuid';


const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 3,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }


  return (
    <div className='pagination-container'>
      <div className="pagination-items-wrapper">
        {paginationRange.map(pageNumber =>
          pageNumber === DOTS
            ? <div
                className="pagination-item dots"
                key={uuidv4()}>
                &#8230;
              </div>
            : <div
              className='pagination-item'
              onClick={() => onPageChange(pageNumber)}
              key={uuidv4()}
            >
              {pageNumber}
            </div>

        )}
      </div>
      <div className="pagination-text">
        Page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </div>
    </div>
  );
};

export default Pagination;
