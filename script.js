'use strict';
let str = '';
const nodeList = document.querySelectorAll('.btn');
const screenShow = document.querySelector('#screen');
const reset = document.querySelector('#reset');
const deleteBtn = document.querySelector('#delete');
const divideBtn = document.querySelector('#divide');
const res = document.querySelector('#result');

// Making the numbers work and showing onto the screen
for (const [i, val] of nodeList.entries()) {
  nodeList[i].addEventListener('click', function () {
    str += nodeList[i].textContent;
    str = str.length < 20 ? str : '';
    screenShow.textContent = str;
    // console.log(str);
  });
}

// Reset Button
reset.addEventListener('click', function () {
  str = '';
  // console.log(str);
  screenShow.textContent = str;
});

// Delete button
deleteBtn.addEventListener('click', function () {
  str = str.slice(0, str.length - 1);
  screenShow.textContent = str;
  // console.log(str);
});

// Result
res.addEventListener('click', function () {
  // console.log(eval(str));
  str = String(eval(str));
  screenShow.textContent = str ?? 'No value';
});
