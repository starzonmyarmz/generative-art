function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(255)
  noStroke()

  tile({ cols: 24 }, ({x, y, tile_width, tile_height}) => {
    fill(random(["#e63946", "#f1faee", "#a8dadc", "#457b9d", "#1d3557"]))

    push()
    translate(x + tile_width / 2, y + tile_height / 2)
    
    switch (int(random(4))) {
      case 1:
        rotate(HALF_PI)
        break
      case 2:
        rotate(PI)
        break
      case 3:
        rotate(HALF_PI + PI)
        break
    }
    
    arc(-tile_width / 2, -tile_height / 2, tile_width * 2, tile_height * 2, 0, HALF_PI, CHORD)
    pop()
  })

  noLoop()
}
