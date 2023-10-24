import Image from "next/image";

export default function Landing() {
  return (
    <div className="flex justify-end align-middle gap-10 mt-16 relative">
      <div className="mix-blend-multiply bg-primary-blue absolute rounded-full h-32 w-32 md:left-[25%] md:top-[60%] -top-[15%]" />
      <div className="mix-blend-multiply bg-primary-pink absolute rounded-b-full h-44 w-64 md:left-[25%] md:top-[40%] top-[85%]" />
      <div className="mix-blend-multiply bg-primary-yellow absolute rounded-full h-20 w-20 md:left-[25%] md:-top-[15%] left-[10%] -top-[20%]" />
      <div className="hidden md:block absolute left-0 h-96 -top-10">
        <Image
          height={128}
          width={128}
          src="/landing.gif"
          alt="Landing"
          className="h-full w-full"
        />
      </div>
      <div className="bg-primary-blue mix-blend-multiply py-16 pl-2 md:md:pl-[20%] pr-2 text-left md:md:w-2/3 text-white">
        <h1 className="text-4xl font-extrabold">
          A personal website for everyone
        </h1>
        <p className="my-4 font-thin text-lg max-w-lg">
          Portfolio Development Fair is an annual series of student-led
          workshops and talks that introduce you to web development. By the end,
          you’ll create your own personal website!
        </p>
        <p className="text-lg font-thin max-w-lg">
          It’s a great place to pick up new skills to use in future projects,
          hackathons, and classes!
        </p>
      </div>
    </div>
  );
}
