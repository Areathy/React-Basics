const getVisiblePageNumbers = (
  pageNumbers,
  minPageNumber,
  maxPageNumber,
  firstPageNumer,
  lastPageNumber
) => {
  const visiblePageNumbers = pageNumbers.filter(
    (pageNumber) => pageNumber >= minPageNumber && pageNumber <= maxPageNumber
  );

  const isAtFirstPageNumber = minPageNumber <= firstPageNumer;
  const isAtLastPageNumber = maxPageNumber >= lastPageNumber;

  return {
    visiblePageNumbers,
    isAtFirstPageNumber,
    isAtLastPageNumber
  };
};

export { getVisiblePageNumbers };
