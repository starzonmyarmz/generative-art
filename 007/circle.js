class Circle {
  constructor(x, y, r) {
    this.growing = true
    this.a = random(45)
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
    this.r += 1
  }

  show() {
    push()
    fill(0)
    stroke(255)
    translate(this.x, this.y)
    rotate(this.a)
    square(0, 0, this.r * 2)
    pop()
  }
}