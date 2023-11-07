function setup() {
  createCanvas(400, 400)
  background(0)
  ellipseMode(CORNER)
  angleMode(DEGREES)
  stroke(0)
  frameRate(12)
}

function draw() {
  let tile = width / 12

  for (let x = 0; x < width; x += tile) {
    for (let y = 0; y < height; y += tile) {
      for (let z = 1; z < 8; z++) {
        let pos = (tile - (tile / z)) / 2

        rect(
          x + random(pos - 3, pos + 3),
          y + random(pos - 3, pos + 3),
          tile / z,
          tile / z
        )
      }
    }
  }

  noLoop()
}
