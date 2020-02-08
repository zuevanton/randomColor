'use strict';

let btn = document.querySelector('.change'),
    body = document.querySelector('body'),
    title = document.querySelector('.color');

function getRandomColor(){
  let color = [];
  for(let i = 0; i < 3; i++){
    let num = Math.ceil(1 + Math.random() * 255);
    num = num.toString(16);
    if(num.length === 1){
      num = '0' + num;
    }
    color.push(num);
  }
  color = '#' + color.join('');
  body.style.backgroundColor = color;
  title.textContent = color;
  return color;
}
getRandomColor();

btn.addEventListener('click', getRandomColor);