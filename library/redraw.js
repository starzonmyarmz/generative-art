// Functionality to redraw artwork
// Requires P5.js library

document.addEventListener('click', ({target}) => {
  if (!target.matches('canvas')) return
  redraw()
})