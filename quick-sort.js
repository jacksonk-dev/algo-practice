function pivot(arr, first, last) {
  const pivot = arr[last];
  let lastLow = first - 1;

  for (let i = first; i < last; i++) {
    if (arr[i] < pivot) {
      lastLow++;
      [arr[lastLow], arr[i]] = [arr[i], arr[lastLow]]
    }
  }

  [arr[lastLow + 1], arr[last]] = [arr[last], arr[lastLow + 1]]

  return lastLow + 1;
}

function quickSort(arr, first, last) {
  if (first < last) {
    const partitionIndex = pivot(arr, first, last);

    quickSort(arr, first, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, last);
  }
}

const arr = [2, 5, 11, 1, 3, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
