class Circle {
  constructor(x, y, r, hex) {
    this.x = x
    this.y = y
    this.r = r
    this.c = hex
  }

  edges() {
    return (
      this.r > width - this.x ||
      this.r > this.x ||
      this.r > height - this.y ||
      this.r > this.y
    )
  }

  show() {
    // fill(this.c)
    // noStroke()

    fill(255)
    stroke(this.c)

    circle(this.x, this.y, this.r * 2)
  }
}