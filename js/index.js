
const menuBtn = document.querySelector('.menuBtn');
const leftMainHeader = document.querySelector('.leftMainHeader');
const exitBtn = document.querySelector('.exitDiv')

menuBtn.addEventListener('click', () => {
    leftMainHeader.classList.add('view')
});

exitBtn.addEventListener('click', () => {
    leftMainHeader.classList.remove('view')
});