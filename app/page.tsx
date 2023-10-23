import Landing from "@/components/landing";
import Schedule from "@/components/schedule";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <img src="/logo.svg" alt="Logo" className="w-1/2 mx-auto my-14"></img>
      <h1 className="text-5xl font-bold my-5">
        Portfolio Development Fair
      </h1>
      <h2 className="text-3xl font-normal my-5">10am - 7pm, October 28 2023</h2>
      <Link
        href="https://go.scottylabs.org/pdf"
        className="inline-block w-fit text-center mb-28"
      >
        <Image
          src="/export_button.svg"
          alt="Check In"
          width={150}
          height={60}
        ></Image>
      </Link>
      <Landing />
      <Schedule />
    </main>
  );
}
