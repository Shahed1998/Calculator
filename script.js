'use strict';
let str = '';
const nodeList = document.querySelectorAll('.btn');
const screenShow = document.querySelector('#screen');
const reset = document.querySelector('#reset');
const deleteBtn = document.querySelector('#delete');

// Making the numbers work and showing onto the screen
for (const [i, val] of nodeList.entries()) {
  nodeList[i].addEventListener('click', function () {
    str += nodeList[i].textContent;
    screenShow.textContent = str;
    console.log(str);
  });
}

// Reset Button
reset.addEventListener('click', function () {
  str = '';
  console.log(str);
  screenShow.textContent = str;
});

// Delete button
deleteBtn.addEventListener('click', function () {
  str = str.slice(0, str.length - 1);
  screenShow.textContent = str;
  console.log(str);
});
