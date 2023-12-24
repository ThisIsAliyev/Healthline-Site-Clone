//this is for opening section when mouse on the nav in header

let openedSection = document.querySelector('.opened-section');
let navElement = document.querySelector('nav');

let isMouseOverHeader = false;
let isMouseOverHiddenContent = false;

navElement.addEventListener('mouseover', () => {
  isMouseOverHeader = true;
  showHiddenContent();
});

navElement.addEventListener('mouseout', () => {
  isMouseOverHeader = false;
  hideHiddenContent();
});

openedSection.addEventListener('mouseover', () => {
  isMouseOverHiddenContent = true;
  showHiddenContent();
});

openedSection.addEventListener('mouseout', () => {
  isMouseOverHiddenContent = false;
  hideHiddenContent();
});

function showHiddenContent() {
  if (isMouseOverHeader || isMouseOverHiddenContent) {
    openedSection.style.height = '473px';
  }
}

function hideHiddenContent() {
  if (!isMouseOverHeader && !isMouseOverHiddenContent) {
    openedSection.style.height = '0';
  }
}

// opened section daixli 

for (let i = 1; i <= 4; i++) {  
    let tagElement = document.querySelector(`.tag-${i}`);
    let mainContainer = document.querySelector(`.main-container-${i}`);


    let isOverTag = false;
    let isOverSection = false;

tagElement.addEventListener('mouseover', () => {
    isOverTag = true;
    showContent();
});

tagElement.addEventListener('mouseout', () => {
    isOverTag = false;
    hideContent();
});

mainContainer.addEventListener('mouseover', () => {
    isOverSection = true;
    showContent();
});

mainContainer.addEventListener('mouseout', () => {
    isOverSection = false;
    hideContent();
});

function showContent() {
  if (isOverTag || isOverSection) {
    mainContainer.style.display = 'flex';
  }
}

function hideContent() {
  if (!isOverTag && !isOverSection) {
    mainContainer.style.display = 'none';
  }
}
}




// video container

let video = document.querySelector('video');
let videoContainer = document.querySelector('.video-container');
let view = document.querySelector('.view');

videoContainer.onclick = ()=> {
  view.style.display = 'none';
  video.src = "x2mate.com-The World's Best Teacher.mp4";
  video.controls = true;
  video.play();
}



// this is for valid input which is end of site
let inputEl = document.querySelector('.inputElement');
let buttonElement = document.querySelector('.buttonElement');
let errorMes = document.querySelector('.error-message');

buttonElement.addEventListener("click", (event) => {
    if(!isValidEmail(inputEl.value)) {
        event.preventDefault();
        inputEl.style.pointerEvents = 'none';
        errorMes.style.display = 'block';
        buttonElement.style.color = "rgba(255, 255, 255,.5)";
        buttonElement.style.pointerEvents = 'none';
    }
});

errorMes.addEventListener("click", (event) => {
    inputEl.style.pointerEvents = 'all';
    errorMes.style.display = 'none';
    buttonElement.style.color = "white";
    buttonElement.style.pointerEvents = 'all';
})

function isValidEmail(email) {
    return email.includes('@');
}


