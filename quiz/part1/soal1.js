// ```js
// // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// // Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// // yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// // bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// // bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// // Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// // Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// // peran serta mengeluarkan respon sesuai isi variabel tersebut.
// //ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// //halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// //halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// //halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// //tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// //tips belajar penggunaan `` (backtick) pada javascript agar
// //mudah dalam memasukan variabel ke dalam string
// //tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// // algoritma
// //isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// User harus input nama, kalau nama kosong akan ada peringatan 
// "nama wajib diisi"

// lalu user memilih peran. Jika tidak diisi, maka muncul
// peringatan "Pilih Peranmu untuk memulai game" 

// Jika memilih pesan Ksatria, akan muncul tulisan "halo Ksatria (nama),kamu dapat menyerang dengan senjatamu!"
// Jika memilih peran Tabib, akan muncul "halo Tabib (nama), kamu akan membantu temanmu yang teluka"
// jika memilih peran penyihir, akan muncul "halo penyihir(nama), ciptakan keajaiban yang membantu kemenanganmu!"
// jika memilih peran selain 3 hal diatas (misal,peran "raja"), maka responnya kayaknya kamu jadi bot aja,peran yang kami pilih ga ada.
 

// let nama = "", peran = "";

// //code disini gunakan console.log untuk outputnya

// ```


let nama = "Erik";
let peran = "Raja";

if (nama == "") {
    console.log("nama wajib diisi")
} else if (peran == "") {
    console.log("Pilih Peranmu untuk Memulai Game")
}  else {
    if (peran == "Ksatria") {
        console.log(`Hallo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if (peran == "Tabib") {
        console.log(`Hallo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
    } else if (peran == "Penyihir") {
        console.log(`Hallo penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    } else {
        console.log(`tapi kayanya kamu jadi bot aja ya ${nama},peran yang kamu pilih tidak ada`)
    }
}


