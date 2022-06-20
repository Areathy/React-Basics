// // export type ItemsType = string | number | Object | Array<ItemsType>;

// function* getChunksGenerator(maxPerBatch, items) {
//   for (let i = 0; i < items.length; i += maxPerBatch) {
//     yield items.slice(i, i + maxPerBatch);
//   }
// }

// const getArrayChunks = (maxPerBatch, items) => {
//   if (!items || !items.length) return [];

//   return [...getChunksGenerator(maxPerBatch, items)];
// };

// export { getArrayChunks };

function* getChunksGenerator(maxPerBatch, items) {
  for (let i = 0; i < items.length; i += maxPerBatch) {
    yield items.slice(i, i + maxPerBatch);
  }
}

function getArrayChunks(maxPerBatch, items) {
  if (!items || !items.length) return [];

  return [...(getChunksGenerator(maxPerBatch, items))];
}

export { getArrayChunks };
