// Functionality to save canvas locally as PNG
// Requires P5.js library

document.addEventListener('keydown', ({ key }) => {
  if (key === 's') saveCanvas(`${document.querySelector('title').innerText}_${Date.now()}`, 'webp')
})