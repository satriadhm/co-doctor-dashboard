import Image from "next/image";

export default function AboutHeader() {
  return (
    <header className="flex flex-col items-center py-6">
      <h1 className="text-4xl font-black text-[#6E62E5]">
        👋 Hello, Medical Professionals
      </h1>
      <p className="mt-2 text-xl text-center">
        In a world where every decision can impact lives, even a minor
        documentation error can lead to serious consequences.
        <br />
        That&apos;s why{" "}
        <span className="font-bold text-[#6E62E5]">Co-Doctor</span> exists.
      </p>
      <Image
        src={"/images/about-hero.avif"}
        alt="About Hero"
        width={2880}
        height={1336}
        className="mt-6 w-full"
      />
    </header>
  );
}
