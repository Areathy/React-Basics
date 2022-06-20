import { useEffect, useMemo, useState } from "react";

import { getArrayChunks } from "../utils/getArrayChunks";
import { getArrayFromNumber } from "../utils/getArrayFromNumber";

const usePagination = (props) => {
  const { items, maxPerBatch = 5, defaultPageNumber = 0 } = props;

  const [currentBatch, setCurrentBatch] = useState([]);

  const [currentPageNumber, setCurrentPageNumber] = useState(defaultPageNumber);

  const itemsInChunks = useMemo(
    () => getArrayChunks(maxPerBatch, items),
    [items, maxPerBatch]
  );

  const pageNumbers = getArrayFromNumber(itemsInChunks.length);

  const fetchNextIsDisabled = currentPageNumber >= pageNumbers.length - 1;
  const fetchPreviousIsDisabled = currentPageNumber <= 0;

  const fetchNextBatch = () => {
    // We don't want to go above the maximum page number
    if (fetchNextIsDisabled) return;
    setCurrentPageNumber((previous) => previous + 1);
  };

  const fetchPreviousBatch = () => {
    // We don't want to go below the minimum page number
    if (fetchPreviousIsDisabled) return;
    setCurrentPageNumber((previous) => previous - 1);
  };

  const fetchBatchWithPageNumber = (pageNumber) => {
    // Avoid unnecssary fetch
    if (pageNumber === currentPageNumber) return;
    setCurrentPageNumber(pageNumber);
  };

  useEffect(() => {
    setCurrentBatch(itemsInChunks[currentPageNumber]);
  }, [itemsInChunks, currentPageNumber]);

  return {
    currentBatch,
    pageNumbers,
    currentPageNumber,
    fetchNextIsDisabled,
    fetchPreviousIsDisabled,
    fetchNextBatch,
    fetchPreviousBatch,
    fetchBatchWithPageNumber,
  };
};

export { usePagination };
