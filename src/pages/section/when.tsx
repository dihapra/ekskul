export default function When() {
  return (
    <section className="design-section min-h-screen py-20">
      <div className="container mx-auto w-full h-full">
        <h2 className="mb-8 text-4xl text-center font-extrabold text-gray-900 dark:text-white">
          Learning Timeline
        </h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 h-full border"
            style={{ left: "50%" }}
          ></div>

          {/* Timeline items */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-300 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-sky-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Agustus</h3>
              <ul className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 list-disc list-inside">
                <li>Pengenalan konsep dasar pemrograman</li>
                <li>
                  Pengenalan HTML: struktur dasar halaman web, tag, elemen, dan
                  atribut
                </li>
                <li>Pengenalan git sebagai version control</li>
                <li>
                  Latihan pembuatan halaman web sederhana menggunakan HTML
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-300 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">September</h3>
              <ul className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                <li>
                  Pemahaman CSS: styling, pemilihan elemen, penggunaan kelas dan
                  ID
                </li>
                <li>Latihan styling halaman web dengan CSS</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-300 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-sky-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Oktober</h3>
              <ul className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 list-disc list-inside">
                <li>
                  Pemahaman lanjutan CSS: pemosisian, tata letak, responsif
                  design
                </li>
                <li>
                  Latihan styling halaman web yang lebih kompleks dengan CSS
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-300 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">November</h3>
              <ul className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 list-disc list-inside">
                <li>
                  Pemahaman konsep dasar JavaScript: variabel, tipe data,
                  operasi dasar
                </li>
                <li>
                  Penggunaan JavaScript untuk manipulasi elemen HTML dan CSS
                  secara sederhana
                </li>
                <li>Latihan interaksi sederhana dengan JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-green-300 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-sky-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Desember</h3>
              <ul className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 list-disc list-inside">
                <li>Review dan pemantapan konsep-konsep JavaScript dasar</li>
                <li>
                  Latihan interaksi yang lebih kompleks menggunakan JavaScript
                </li>
                <li>Penerapan JavaScript dalam proyek-proyek kecil</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
