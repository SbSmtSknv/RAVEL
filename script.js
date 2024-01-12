const btn = document.querySelector('#searcher_btn')
const search = document.querySelector('.searcher')

search.style.display = 'none'
btn.style.display = 'block'

btn.onclick = () => {
  search.style.display = 'block'
  btn.style.display = 'none'
}

search.addEventListener('click', function(event) {
  if (event.target === search) {
    return;
  } else {
    search.style.display = 'none';
    btn.style.display = 'block';
  }
}); 



const banners = document.querySelectorAll('.banner')
const backButton = document.querySelector('.left_btn')
const forwardButton = document.querySelector('.right_btn')

let activeSlide = 0
const countNumber = document.querySelector('.countNumber')


countNumber.textContent = 1

forwardButton.addEventListener('click', () => {
  banners.forEach(item => item.classList.remove('active'));
  if (activeSlide === banners.length - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
  banners[activeSlide].classList.add('active');

  countNumber.textContent = activeSlide+1;
  if (countNumber.textContent === activeSlide+1) {
    countNumber.textContent = 1
  }
});

backButton.addEventListener('click', () => {
  countNumber.textContent = 1
  banners.forEach(item => item.classList.remove('active'));
  if (activeSlide === banners.length - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
  banners[activeSlide].classList.add('active');
  
  countNumber.textContent = activeSlide +1
});



const navbarButton = document.querySelector('#navbar_btn')
const navbarMain = document.querySelector('#navbar_main')
const navbarAc = document.querySelector('#navbar_ac')
const closeBtn = document.querySelector('#exit_btn')

navbarButton.addEventListener('click', () => {
  navbarMain.style.display = 'flex'
  navbarAc.style.display = 'flex'
  navbarButton.style.display = 'none'
  closeBtn.style.display = 'flex'
}) 

closeBtn.addEventListener('click', () => {
  navbarMain.style.display = 'none'
  navbarAc.style.display = 'none'
  navbarButton.style.display = 'block'
  closeBtn.style.display = 'none'
}) 





