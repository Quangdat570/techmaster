
function usd2vnd(usd) {
  return usd * 23000;
}
console.log(usd2vnd(2));
console.log(usd2vnd(10));
//b
function findArea(a, b) {
  return a * b;
}
console.log(findArea(2, 3));
console.log(findArea(3, 5));
//c
function celsiusToFahrenheit(c) {
  return c * 1.8 + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(37));
console.log(celsiusToFahrenheit(100));
//d{
function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 2));
console.log(pow(3, 3));
console.log(pow(5, 1));
// e
function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(findAreaOfTriangle(10, 17, 21));
