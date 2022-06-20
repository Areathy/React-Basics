import { getVisiblePageNumbers } from "../utils/getVisiblePageNumbers";

const Pagination = (props) => {
  const lastPageNumberIndex = props.pageNumbers.length - 1;

  const lastPageNumber = props.pageNumbers[lastPageNumberIndex];
  const firstPageNumer = props.pageNumbers[0];

  const minPageNumber = props.currentPageNumber - props.pageNumbersLowerLimit;
  const maxPageNumber = props.currentPageNumber + props.pageNumbersUpperLimit;

  const {
    visiblePageNumbers,
    isAtFirstPageNumber,
    isAtLastPageNumber
  } = getVisiblePageNumbers(
    props.pageNumbers,
    minPageNumber,
    maxPageNumber,
    firstPageNumer,
    lastPageNumber
  );

  const isPageNumberActive = (pageNumber) =>
    pageNumber === props.currentPageNumber;

  const getActivePageNumberClass = (pageNumber) =>
    isPageNumberActive(pageNumber) ? "is-selected" : "";

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li className="pagination-item">
          <button
            className="pagination-button"
            disabled={props.fetchPreviousIsDisabled}
            onClick={() => props.fetchBatchWithPageNumber(firstPageNumer)}
          >
            First
          </button>
        </li>
        <li className="pagination-item">
          <button
            className="pagination-button"
            disabled={props.fetchPreviousIsDisabled}
            onClick={props.fetchPreviousBatch}
          >
            Prev
          </button>
        </li>
        {!isAtFirstPageNumber && (
          <li className="pagination-item">
            <button disabled className="pagination-button">
              ...
            </button>
          </li>
        )}
        {visiblePageNumbers.map((pageNumber) => (
          <li className="pagination-item" key={pageNumber}>
            <button
              className={`pagination-button ${getActivePageNumberClass(
                pageNumber
              )}`}
              disabled={isPageNumberActive(pageNumber)}
              onClick={() => props.fetchBatchWithPageNumber(pageNumber)}
            >
              {pageNumber + 1}
            </button>
          </li>
        ))}
        {!isAtLastPageNumber && (
          <li className="pagination-item">
            <button disabled className="pagination-button">
              ...
            </button>
          </li>
        )}
        <li className="pagination-item">
          <button
            className="pagination-button"
            disabled={props.fectNextIsDisabled}
            onClick={props.fetchNextBatch}
          >
            Next
          </button>
        </li>
        <li className="pagination-item">
          <button
            className="pagination-button"
            disabled={props.fectNextIsDisabled}
            onClick={() => props.fetchBatchWithPageNumber(lastPageNumber)}
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

export { Pagination };
