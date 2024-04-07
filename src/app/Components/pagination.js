import React from 'react';

const Pagination = ({ currentPage, totalPages, handleClick }) => {
  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 2; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handleClick(i)} style={{ margin: '5px' }}>
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div>
      {renderPagination()}
    </div>
  );
};

export default Pagination;
