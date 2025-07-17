
const menuBtn = document.querySelector('.menuBtn');
const leftMainHeader = document.querySelector('.leftMainHeader');
const exitBtn = document.querySelector('.exitDiv');
const phoneNumber = document.querySelector('.topMainHeader ul .numberLi');
const phoneNumber2 = document.querySelector('#phoneDiv .phoneNumber');

menuBtn.addEventListener('click', () => {
    leftMainHeader.classList.add('view')
});

exitBtn.addEventListener('click', () => {
    leftMainHeader.classList.remove('view')
});

phoneNumber.addEventListener('click', () => {
    navigator.clipboard.writeText(phoneNumber.innerText)
});

phoneNumber2.addEventListener('click', () => {
    navigator.clipboard.writeText(phoneNumber2.innerText)
});