// import "./App.css";
// import testData from "./store/data";
// import { usePagination } from "./hooks/usePagination";
// import { Pagination } from "./components/Pagination/Pagination";

// function App() {
//   const {
//     currentBatch,
//     pageNumbers,
//     currentPageNumber,
//     fetchNextBatch,
//     fetchPreviousBatch,
//     fetchNextIsDisabled,
//     fetchPreviousIsDisabled,
//     fetchBatchWithPageNumber,
//   } = usePagination({
//     items: testData,
//     maxPerBatch: 6,
//     defaultPageNumber: 0,
//   });

//   return (
//     <div className="App">
//       <h1>Simple Pagination</h1>
//       <div>
//         <h2>Current Page {currentPageNumber + 1} </h2>
//         <div className="page-items-container">
//           <ol className="page-items">
//             {currentBatch.map((batch) => (
//               <li className="page-item">
//                 <div className="page-item-container">
//                   {JSON.stringify(batch)}
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//       <Pagination
//         pageNumbers={pageNumbers}
//         currentPageNumber={currentPageNumber}
//         fetchBatchWithPageNumber={fetchBatchWithPageNumber}
//         fetchNextBatch={fetchNextBatch}
//         fetchPreviousBatch={fetchPreviousBatch}
//         fetchNextIsDisabled={fetchNextIsDisabled}
//         fetchPreviousIsDisabled={fetchPreviousIsDisabled}
//       />
//     </div>
//   );
// }
// export default App;

import "./App.css";

import mockData from "./store/data";

import { usePaginationTypeSafe } from "./hooks/usePagination";
import { Pagination } from "./components/Pagination";

export default function App() {
  const {
    currentBatch,
    pageNumbers,
    currentPageNumber,
    fetchNextBatch,
    fetchPreviousBatch,
    fectNextIsDisabled,
    fetchPreviousIsDisabled,
    fetchBatchWithPageNumber,
  } = usePaginationTypeSafe({
    items: mockData,
    maxPerBatch: 6,
    defaultPageNumber: 0, //Index starts from 0
  });

  return (
    <div className="App">
      hgdhfhfhfhfhf
      <h1>Simple Pagination</h1>
      <div>
        <h2>Current Page {currentPageNumber + 1} </h2>
        <div className="page-items-container">
          <ol className="page-items">
            {currentBatch.map((batch) => (
              <li className="page-item" key={batch.id}>
                <div className="page-item-container">
                  {JSON.stringify(batch)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        currentPageNumber={currentPageNumber}
        fetchBatchWithPageNumber={fetchBatchWithPageNumber}
        fetchNextBatch={fetchNextBatch}
        fetchPreviousBatch={fetchPreviousBatch}
        fectNextIsDisabled={fectNextIsDisabled}
        fetchPreviousIsDisabled={fetchPreviousIsDisabled}
        pageNumbersLowerLimit={2}
        pageNumbersUpperLimit={2}
      />
    </div>
  );
}
