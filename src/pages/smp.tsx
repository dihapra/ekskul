import Image from "next/image";
import Navbar from "./navbar";

export default function Smp() {
  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto lg:px-8 md:px-6 ">
      <Navbar />
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Layouting pada website
      </h1>
      <div className="max-w-5xl text-justify mx-auto">
        Layout dalam konteks desain web mengacu pada cara elemen-elemen pada
        halaman web disusun dan ditempatkan secara visual. Layout merujuk pada
        tata letak, struktur, dan organisasi dari konten pada halaman web.
        Tujuannya adalah untuk memastikan bahwa halaman web terlihat estetis,
        mudah dinavigasi, dan memberikan pengalaman pengguna yang baik.
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">
        Fungsi Layout
      </h1>
      <div className="max-w-5xl text-justify mx-auto">
        1.Organisasi Konten: Layout membantu dalam mengatur dan mengelompokkan
        konten sehingga pengguna dapat dengan mudah menemukan informasi yang
        mereka cari.
        <br />
        Navigasi yang Jelas: Layout yang baik memungkinkan penempatan yang
        efektif dari elemen-elemen seperti navbar dan tautan navigasi, yang
        membantu pengguna untuk berpindah antara halaman atau bagian situs
        dengan lancar. <br />
        Peningkatan Estetika: Layout yang baik dapat meningkatkan estetika
        halaman web, membuatnya lebih menarik dan profesional. Responsif: Layout
        harus responsif, artinya harus dapat beradaptasi dengan baik dengan
        berbagai perangkat dan ukuran layar, termasuk perangkat mobile.
        <br />
        Penyampaian Pesan: Layout juga membantu dalam menyampaikan pesan atau
        tujuan utama situs web dengan jelas.
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">Navbar</h1>
      <div className="max-w-5xl text-justify mx-auto">
        Navbar, juga dikenal sebagai menu navigasi, adalah elemen tampilan situs
        web yang berisi tautan atau menu untuk membantu pengguna berpindah
        antara halaman atau bagian situs web dengan mudah. Fungsi utama dari
        navbar adalah memberikan navigasi yang jelas dan terorganisir kepada
        pengguna. Ini juga sering digunakan untuk menampilkan logo situs web dan
        elemen lain seperti tombol pencarian atau ikon sosial media.
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={"/navbar.png"}
          width={600}
          height={300}
          alt="kerangka.png"
        />
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">Konten</h1>
      <div className="flex justify-center items-center">
        <Image
          src={"/content.png"}
          width={600}
          height={300}
          alt="kerangka.png"
        />
      </div>
      <h1 className=" text-lg font-bold text-center text-sky-900 ">Footer</h1>
      <div className="max-w-5xl text-justify mx-auto">
        Footer adalah bagian bawah halaman web yang biasanya berisi informasi
        tambahan atau tautan navigasi sekunder. Fungsi utama dari footer adalah
        memberikan informasi kontak, tautan ke halaman penting lainnya, hak
        cipta, atau tautan ke media sosial. Footer dapat membantu pengguna untuk
        lebih memahami situs web dan menavigasinya dengan lebih baik.
      </div>
      <div className="flex justify-center items-center mb-20">
        <Image
          src={"/footer.png"}
          width={600}
          height={300}
          alt="kerangka.png"
        />
      </div>
    </div>
  );
}
