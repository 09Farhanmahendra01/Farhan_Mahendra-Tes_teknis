let list_hari = [];
let hasil_filter_hari = [];
let hasil_cuaca = [];
const mengelompokan_hasil_yang_akan_ditampilkan = [];
// get data cuaca jakarta 5 hari kedepan
const getData_cuaca_jakarta_5_hari_kedepan = (
  filter_hari_berdasarkan_tanggal
) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=-6.2088&lon=106.8456&appid=d0cad5eefd9b4a1b974e023b2bd1a9f7",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.list);
      list_hari = result.list;
      filter_hari_berdasarkan_tanggal();
    })
    .catch((error) => console.log("error", error));
};
// Tanggal yang di cari
const tanggal_yang_dicari = [
  "2023-05-17 03:00:00",
  "2023-05-18 03:00:00",
  "2023-05-19 03:00:00",
  "2023-05-20 03:00:00",
  "2023-05-21 03:00:00",
];
// Function untuk mencari tannggal di atas
const filter_hari_berdasarkan_tanggal = () => {
  for (let i = 0; i < tanggal_yang_dicari.length; i++) {
    let hasil_filter = list_hari.filter((value, index) => {
      return value.dt_txt.includes(tanggal_yang_dicari[i]);
    });
    hasil_filter_hari.push(hasil_filter);
  }
  filter_cuaca(hasil_filter_hari);
};
// menambahkan data cuaca
const filter_cuaca = (hasil_filter_hari) => {
  for (let i = 0; i < hasil_filter_hari.length; i++) {
    hasil_filter_hari[i].map((value, index) => {
      hasil_cuaca.push(value.main.temp);
    });
  }
  mengelompokann();
};
// Menyusun tanggal
let nama_hari = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let bulan = new Date().getMonth() + 1;
let tahun = new Date().getFullYear();
const daftar_bulan = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const tanggal_pencari_hari = [
  `${tahun}-` + `0${bulan}-` + "17",
  `${tahun}-` + `0${bulan}-` + "18",
  `${tahun}-` + `0${bulan}-` + "19",
  `${tahun}-` + `0${bulan}-` + "20",
  `${tahun}-` + `0${bulan}-` + "21",
];
const tanggal_pencari_bulan = [
  "17" + ` ${daftar_bulan[bulan]} ` + `${tahun}`,
  "18" + ` ${daftar_bulan[bulan]} ` + `${tahun}`,
  "19" + ` ${daftar_bulan[bulan]} ` + `${tahun}`,
  "20" + ` ${daftar_bulan[bulan]} ` + `${tahun}`,
  "21" + ` ${daftar_bulan[bulan]} ` + `${tahun}`,
];

const mengelompokann = () => {
  tanggal_pencari_hari.map((value, index) => {
    mengelompokan_hasil_yang_akan_ditampilkan.push({
      hari: nama_hari[new Date(value).getDay()],
      tanggal: tanggal_pencari_bulan[index],
      cuaca: hasil_cuaca[index],
    });
  });
  Menampilkan_hasil();
};
// Menampilkan hasil
const element_div = document.getElementById("parent");

const Menampilkan_hasil = () => {
  element_div.innerHTML += "<h3>Weather Forecast:</h3>";
  mengelompokan_hasil_yang_akan_ditampilkan.map((value, index) => {
    element_div.innerHTML +=
      "<h5>" +
      value.hari +
      ", " +
      value.tanggal +
      ": " +
      value.cuaca +
      "&deg C</h5>";
  });
};
// alur eksekusi

getData_cuaca_jakarta_5_hari_kedepan(filter_hari_berdasarkan_tanggal);
