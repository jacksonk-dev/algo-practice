function binarySearch(arr, searchTerm, start, end) {
  const mid = Math.floor((start + end) / 2)
  if (start > end) return -1
  if (searchTerm === arr[mid]) return mid
  if (searchTerm > arr[mid]) return binarySearch(arr, searchTerm, mid + 1, end)
  return binarySearch(arr, searchTerm, start, mid - 1)
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const searchTeam = 10
console.log(binarySearch(arr, searchTeam, 0, arr.length - 1))
