import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const logoSize = 128;
  return (
    <nav className="flex justify-between items-center border-b w-full sticky top-0 bg-white z-10">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="cursor-pointer p-4"
          width={logoSize}
          height={logoSize}
        />
      </Link>
      <div className="self-stretch flex items-stretch">
        <Link
          href="/setup"
          className="px-4 flex items-center hover:bg-primary-yellow font-bold"
        >
          Setup
        </Link>
        <Link
          href="/speakers"
          className="px-4 flex items-center hover:bg-primary-yellow font-bold"
        >
          Speakers
        </Link>
      </div>
    </nav>
  );
}
