const container = document.querySelector('.container');
let offset = 0;

window.addEventListener('wheel', e => {
  offset += Math.sign(e.deltaY) * 40;
  //console.log(Math.sign(e.deltaY));
  //Math.sign -> 음수인지 양수인지

  if (offset < 0) {
    offset = 0;
  } else if (offset > window.innerWidth) {
    offset = window.innerWidth;
  }
  //console.log(offset);
  container.style.transform = `translateX(-${offset}px`;
});