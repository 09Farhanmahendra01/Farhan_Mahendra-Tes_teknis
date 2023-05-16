const result = [];
let nilai_awal = 1;
let nilai_akhir = 100;
const element_div = document.getElementById("parent");
// function mencari angka yang telah di tentukan
const looping = () => {
  for (let i = nilai_awal; i <= nilai_akhir; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) {
        result.push("ApaBole");
      } else {
        result.push("Apa");
      }
    } else if (i % 5 == 0) {
      result.push("Bole");
    } else {
      result.push(i);
    }
  }
  console.log(result);
};
looping();
