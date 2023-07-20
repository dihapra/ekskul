import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  p-4">
      <div className="">
        <Image
          src={"/dashboard/logo-ekskul.png"}
          width={150}
          height={120}
          alt="logo"
        />
      </div>

      {/* Tambahkan tombol atau tautan menu lainnya di sini */}
      <div className="gap-8 text-sm flex items-center justify-center">
        <Link href="/dashboard">
          <div className="text-gray-800 hover:text-gray-500 font-semibold">
            Dashboard
          </div>
        </Link>
        <Link href="/profil">
          <div className="text-gray-800 hover:text-gray-500 font-semibold">
            Profil
          </div>
        </Link>
        <Link href="/visi-misi">
          <div className="text-gray-800 hover:text-gray-500 font-semibold">
            Visi Misi
          </div>
        </Link>
        <Link href="/tujuan">
          <div className="text-gray-800 hover:text-gray-500 font-semibold">
            Tujuan
          </div>
        </Link>
      </div>
    </nav>
  );
}
