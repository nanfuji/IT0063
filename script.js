function changeColor() {
  var resume = document.querySelector('.resume');
  var color = prompt('Enter a color (red, blue, green etc.):');

  if (color) {
    resume.style.backgroundColor = color;
  }
}