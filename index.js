const inputs = document.querySelectorAll(`input`);
const wrapper = document.querySelector(`.wrapper`);
const boxColor = document.querySelector(`.choose__color`);
const dark = document.querySelector(`#dark`);
function hndChange() {
  if(dark.checked) {
    wrapper.style.backgroundColor = `#000`;
  } 
  if(!dark.checked) {
    wrapper.style.backgroundColor = `#fff`;
  } 
}
inputs.forEach(input => input.addEventListener(`change`, hndChange));



