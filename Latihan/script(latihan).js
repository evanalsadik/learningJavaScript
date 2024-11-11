//test pertama ~~~
//1.
const beratBadanA = 95;
const tinggiBadanA = 1.89;

const beratBadanB = 84;
const tinggiBadanB = 1.77;

//2.
const imtA = (beratBadanA / tinggiBadanA **2);
const imtB = (beratBadanB / tinggiBadanB **2);

//3.
const imtTerbesar = imtA > imtB;

console.log(imtA, imtB, imtTerbesar)



//test kedua ~~~
let palingBerat;
if(imtA > imtB) {
  palingBerat = `imtA lebih besar daripada imtB. karena imtA adalah (${imtA}), sedangkan imtB adalah (${imtB})`;
}else {
  palingBerat = `imtB lebih besar daripada imtA. karena imtA adalah (${imtA}), sedangkan imtB adalah (${imtB})`;
}

console.log(palingBerat);