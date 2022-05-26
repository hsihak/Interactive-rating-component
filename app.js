// When one of the button is clicked
  // set the button to active with orange backgroundColor
  // if other button is clicked while this is active
    // remove active state
    // activate the currentButton
  // get the button value and save it in a variable

  // if buttonValue is received send the submit button
let storeRating = '';

const mainContainer = document.querySelector('#mainContainer');
const numberBtns = document.querySelectorAll('.number');

const setBtnActive = (e) => {
  storeRating = parseInt(e.target.value);
  let activeBtn = e.target.classList.add('focus:bg-primary');
  activeBtn += e.target.classList.add('focus:text-white');
  return activeBtn;
}

document.addEventListener('click', (e) => {
  storeRating = e.target.value;
})

numberBtns.forEach(num => {
  num.addEventListener('click', e => setBtnActive(e));
});
// selectedRating Fn
const selectedRating = () => {
  const title = mainContainer.querySelector('#title');
  // Call the exisiting div
  // Replace it with a new div and attributes
  const ratingResult = document.createElement('div');
  ratingResult.textContent = `You selected ${storeRating} out of 5`;
  Object.assign(ratingResult,{
    className: 'ratingResult bg-dark-blue-circle text-primary px-4 py-1 rounded-full'
  });
  title.replaceWith(ratingResult);

}

// thankYoutitle Fn
const thankYouTitle = () => {
  const para = mainContainer.querySelector('#para');
  const titleDiv = document.createElement('h1');
  titleDiv.textContent = 'Thank you!';
  Object.assign(titleDiv, {
    className: 'text-white text-3xl font-semibold'
  });
  para.replaceWith(titleDiv);
}

// thankYouPara Fn
const thankYouPara = () => {
  const ratingBtn = mainContainer.querySelector('#rating');
  const para = document.createElement('p');
  para.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
  Object.assign(para, {
    className: 'text-light-grey text-center'
  })
  ratingBtn.replaceWith(para);
}

// removeSubmitBtn Fn
const removeSubmitBtn = () => {
  submitBtn.remove();
}

// Submit button
const submitBtn = document.querySelector('#submitBtn');

const thankYouMessage = () => {
  const starIcon = mainContainer.querySelector('#starIcon');
  starIcon.setAttribute('src', './images/illustration-thank-you.svg');
  // starIcon.style.
  Object.assign(mainContainer.style,{
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  });
  selectedRating();
  thankYouTitle();
  thankYouPara();
  removeSubmitBtn();
}

const storeSubmit = () => {
  if(storeRating === ''  || storeRating === undefined) {
    return false;
  } else {
    thankYouMessage();
    return;
  }
};

submitBtn.addEventListener('click', storeSubmit);
