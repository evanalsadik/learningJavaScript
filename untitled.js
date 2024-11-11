const keys = ["name", "born"];
const values = ["jamal", 1969];

const jamal = values.map(
  (value, i) => ({ [keys[i]]: value}));
  
console.log(jamal);