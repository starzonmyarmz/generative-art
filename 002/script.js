function setup() {
  createCanvas(400, 400)
  background(255)
  stroke(0)
  frameRate(12)
  tile({
    cols: 4,
    rows: 4
  })
}

function draw() {
  let tile = width / 48

  for (let x = 0; x < width; x += tile) {
    for (let y = 0; y < height; y += tile) {

      if (random() > 0.5) {
        line(x, y, x + tile, y + tile)
      } else {
        line(x + tile, y, x, y + tile)
      }
    }
  }

  noLoop()
}
