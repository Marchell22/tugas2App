function nama() {
  return "Marchell, ";
}
function namaLengkap(memanggil, namaBelakang) {
  console.log(memanggil() + namaBelakang);
}
//fungsi nama() sebagai argumen ke dalam fungsi namaLengkap
namaLengkap(nama, "Manurung");

