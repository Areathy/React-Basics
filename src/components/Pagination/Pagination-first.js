// const Pagination = (props) => (
//   <div className="pagination-container">
//     <ul className="pagination">
//       <li className="pagination-item">
//         <button
//           disabled={props.fetchPreviousIsDisabled}
//           onClick={props.fetchPreviousBatch}
//           className="pagination-button"
//         >
//           Prev
//         </button>
//       </li>
//       {props.pageNumbers.map((pageNumber) => (
//         <li className="pagination-item">
//           <button
//             disabled={pageNumber === props.currentPageNumber}
//             onClick={() => props.fetchBatchWithPageNumber(pageNumber)}
//             className="pagination-button"
//           >
//             {pageNumber + 1}
//           </button>
//         </li>
//       ))}
//       <li className="pagination-item">
//         <button
//           disabled={props.fetchNextIsDisabled}
//           onClick={props.fetchNextBatch}
//           className="pagination-button"
//         >
//           Next
//         </button>
//       </li>
//     </ul>
//   </div>
// );

// export { Pagination };

