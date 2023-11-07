// Functionality to tile artwork on a canvas
//
// Options:
//
// cols
// ----
// The number of columns
//
// rows (optional)
// ---------------
// The number of rows. If options is omitted, 
// defaults to the same number of columns.

function tile(options, f) {
  const {
    cols,
    rows = cols
  } = options

  const tile_width = width / cols
  const tile_height = height / rows

  for (let x = 0; x < width; x += tile_width) {
    for (let y = 0; y < height; y += tile_height) {
      f({ x, y, tile_width, tile_height })
    }
  }
}