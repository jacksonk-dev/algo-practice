function mergeSorted(result, left, right) {
  let A = result
  let currentAIndex = 0
  let currentLIndex = 0
  let currentRIndex = 0

  while (currentAIndex < A.length) {
    while (currentLIndex < left.length && currentRIndex < right.length) {
      if (left[currentLIndex] < right[currentRIndex]) {
        A[currentAIndex] = left[currentLIndex]
        currentLIndex++
      } else {
        A[currentAIndex] = right[currentRIndex]
        currentRIndex++
      }
      currentAIndex++
    }

    while (currentLIndex < left.length) {
      A[currentAIndex] = left[currentLIndex]
      currentAIndex++
      currentLIndex++
    }

    while (currentRIndex < right.length) {
      A[currentAIndex] = right[currentRIndex]
      currentAIndex++
      currentRIndex++
    }
  }

  return A
}

function mergeSort(A) {
  if (A.length === 1) return A

  const middle = Math.floor(A.length / 2)

  const left = A.slice(0, middle)
  const right = A.slice(middle)

  return mergeSorted(A, mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 100, 3, 9, 4, 2, 11, 6, 5, 0, 7]))
