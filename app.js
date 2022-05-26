const numberBtns = document.querySelectorAll('.number');

const setBtnActive = (e) => {
  e.target.style.backgroundColor = 'red';
}

numberBtns.forEach(num => {
  num.addEventListener('click', e => setBtnActive(e));
})