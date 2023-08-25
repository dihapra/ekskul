import Image from "next/image";
import Navbar from "./navbar";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto lg:px-8 md:px-6 ">
      <Navbar />
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Pengenalan HTML dan CSS
      </h1>
      <div className="max-w-5xl text-justify mx-auto">
        Perkenalan HTML dan CSS HTML (HyperText Markup Language) dan CSS
        (Cascading Style Sheets) adalah dua bahasa utama yang digunakan untuk
        membangun dan merancang halaman web. HTML digunakan untuk membuat
        struktur dan konten halaman web, sedangkan CSS digunakan untuk mengatur
        tampilan dan gaya halaman web.
        <br /> HTML adalah bahasa yang digunakan untuk membuat elemen-elemen
        dasar dalam sebuah halaman web, seperti teks, gambar, tautan, dan
        formulir. Ini adalah fondasi dari setiap halaman web. Setiap elemen HTML
        dikelilingi oleh tag yang memberi tahu browser cara menampilkan elemen
        tersebut.
        <br /> CSS, di sisi lain, digunakan untuk mengontrol tampilan
        elemen-elemen HTML. Dengan CSS, Anda dapat mengubah warna teks, mengatur
        margin dan padding, mengubah ukuran font, dan banyak lagi. Ini
        memungkinkan Anda untuk merancang halaman web Anda dengan cara yang
        menarik dan konsisten.
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Contoh Kode HTML dan CSS
      </h1>
      <div className="max-w-5xl text-justify mx-auto">
        Untuk memahami lebih lanjut tentang cara HTML dan CSS berinteraksi, mari
        kita lihat contoh kode sederhana. Berikut adalah contoh kode HTML dan
        CSS internal yang membuat kartu produk sederhana dengan foto produk,
        nama produk, dan harga:
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        1. Buatlah structure HTML
      </h1>
      <div className="flex justify-center items-center">
        <Image
          src={"/kerangka.png"}
          width={600}
          height={300}
          alt="kerangka.png"
        />
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        2. Ketik kode untuk bagian head
      </h1>
      <div className="flex justify-center items-center">
        <Image src={"/head.png"} width={600} height={300} alt="kerangka.png" />
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        3. Ketik kode untuk bagian body
      </h1>
      <div className="flex justify-center items-center">
        <Image src={"/body.png"} width={600} height={300} alt="kerangka.png" />
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Pengenalan Tailwind CSS
      </h1>
      <div className="max-w-5xl text-justify mx-auto">
        Tailwind CSS adalah kerangka kerja CSS yang dirancang untuk mempermudah
        desain dan pengembangan web. Dengan Tailwind, Anda dapat membuat
        tampilan yang konsisten dan menarik dengan mudah, tanpa perlu menulis
        banyak kode CSS kustom. Tailwind menyediakan sejumlah besar kelas yang
        dapat Anda tambahkan langsung ke elemen HTML Anda untuk mengatur
        tampilan dan perilaku mereka.
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Contoh Kode Menggunakan Tailwind CSS
      </h1>
      <div className="flex justify-center items-center mb-20">
        <Image
          src={"/tailwind.png"}
          width={600}
          height={300}
          alt="kerangka.png"
        />
      </div>
    </div>
  );
}
