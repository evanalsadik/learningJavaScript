//console ===
console.log("eyyo wassup");


//variable - value ===
let mobil = "honda"

console.log(mobil)

let namaSaya = "budi budiman"
let umurSaya = "200 tahun"
let tempatTinggal = "mars"

console.log(namaSaya)
console.log(umurSaya)
console.log(tempatTinggal)


//tipe data ===
//float
let tahunIni = 2023;
let tahunLahir = 1945;

let umurSaya2 = tahunIni - tahunLahir;

console.log(umurSaya2);

//boolean
let sayaHidup = true;
console.log(sayaHidup);
console.log(typeof sayaHidup);

sayaHidup = "btulkah?";
console.log(sayaHidup);
console.log(typeof sayaHidup);

//undefined
let boom;
console.log(boom);
console.log(typeof boom);

let sayaOrangJakarta = false;
console.log(sayaOrangJakarta);
sayaOrangJakarta = "bukan men saya orang mars";
console.log(sayaOrangJakarta);


//let - const - var ===
// let value nya bisa di ubah
let damn = 82773;
damn = 73663;
console.log(damn);

//cosnt value nya harus tetap
const dude = "7363";
console.log(dude);

//var tidak akan di pakai
var payah = "12 12";
console.log(payah);



//operator dasar ===
//operator matematika
const tahunIni2 = 2060;
const umurA = tahunIni2 - 1962;
const umurB = tahunIni2 - 2035;

console.log(umurA, umurB);
console.log(umurA * 5, umurB / 2)
console.log(umurB ** 2)

const namaDepan = "jajang";
const namaBelakang = "durjana";

console.log(namaDepan + " " + namaBelakang);


//operator penugasan
let x = 15 + 5;
x += 5 //jumlah x ditambah 5 (20 + 5)
x -= 10 //jumlah x dikuranh 10 (25 - 10)
x *= 2 //(15 x 2)
x /= 3 //(30 / 3)

x ++; // (x + 1)
x --; // (x - 1)
console.log(x)


//operator komparasi
console.log(umurA > umurB) // hanya ada <,<=,>, dan >=
console.log(umurA < umurB)
console.log(umurA >= 80)



//prioritas operator ===
let a,b;
a = b = 30 - 10 - 5
console.log(a,b)

let rataRataUmur = (umurA + umurB) /2;
console.log(umurA, umurB, rataRataUmur)

