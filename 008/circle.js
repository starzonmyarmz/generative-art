class Circle {
  constructor(x, y, r) {
    this.growing = true
    this.x = x
    this.y = y
    this.r = r
  }

  edges() {
    return (
      this.r > width - this.x ||
      this.r > this.x ||
      this.r > height - this.y ||
      this.r > this.y
    )
  }

  grow() {
    this.r += .5
  }

  show() {
    fill(255)
    stroke(255 / 2)
    circle(this.x, this.y, this.r * 2)
  }
}