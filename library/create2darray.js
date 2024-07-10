function create2DArray(rows, cols) {
  const arr = []
  for (let i = 0; i < cols; i++) arr.push(Array(rows).fill(0))
  return arr
}
