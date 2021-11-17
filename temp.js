
let d0 = new Date("12-5-2021")
let d1 = new Date("2021-12-30")
let d2 = new Date(2021,11,30)

let dd = new Date("awer")

console.log(d0.toDateString());
console.log(d1.toDateString())
// console.log(d.toISOString());
console.log(d2.toDateString());


console.log(dd instanceof Date && isFinite(dd));
console.log(d2 instanceof Date && isFinite(d2));
