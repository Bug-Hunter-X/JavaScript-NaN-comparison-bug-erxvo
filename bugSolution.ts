function compare(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN cases
  } else if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // -1
console.log(compare(2, 1)); // 1
console.log(compare(2, 2)); // 0
console.log(compare(NaN, NaN)); // NaN
console.log(compare(NaN, 2)); // NaN