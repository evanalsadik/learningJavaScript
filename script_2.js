//string tamplate literals ===
const namaDepan = "mamat";
const profesi = "pengangguran terhandal";
const tahunLahir = 1998;
const tahunIni = 2025;

//ribet
const mamat = "hallo, nama saya " + namaDepan + ". " + "saya bekerja sebagai " + profesi + ". " + "dan saya berumur " + (2025-1998) + " tahun";
console.log(mamat)

//solusinya
const mamatmen = `hallo, nama saya ${namaDepan}. saya bekerja sebagai ${profesi}. dan saya berumur ${2025-1998} tahun`;
console.log(mamatmen);

console.log(`ini string biasa tanpa variable`);
console.log("ini string baris pertama \n baris kedua \n baris ketiga \n baris keempat");
console.log(`ini string tamplate literals
baris kedua
baris ketiga
baris keempat`)


//if/else statements ===
//1.
const umurA = 5;

if (umurA >= 17) {
  console.log("A sudah cukup umur");
}else {
  const tungguTahun = 17 - umurA;
  console.log("A belum cukup umur. silahkan tunggu " + tungguTahun + " tahun lagi.");
}

//2.
const tahunLahirC = 1998;
let abad;

if (tahunLahirC <= 2000) {
  abad = 20;
}else {
  abad = 21;
}

console.log(abad)