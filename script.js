'use strict';
let str = '';
const nodeList = document.querySelectorAll('.btn');
const screenShow = document.querySelector('#screen');

for (const [i, val] of nodeList.entries()) {
  nodeList[i].addEventListener('click', function () {
    // console.log(nodeList[i].textContent);
    str += nodeList[i].textContent;
    console.log(str);
    screenShow.textContent = str;
  });
}
