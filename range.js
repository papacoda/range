'use strict';

let arr1 = [];
function fun1(count) {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}
const a = fun1(10);
console.log(a);
