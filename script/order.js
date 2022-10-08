var hiddenElement = document.getElementById("form");
var btn = document.querySelector('.orderBtn');
var btn1 = document.querySelector('.middleBtn');
var btn2 = document.querySelector('.product-specBtn');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);
btn1.addEventListener('click', handleButtonClick);
btn2.addEventListener('click', handleButtonClick);