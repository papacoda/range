'use strict';

// Implementation

function range(count) {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}

// Usage

const a = range(10);
console.log(a);
