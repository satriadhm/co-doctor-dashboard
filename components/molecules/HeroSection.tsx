import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import ImageAtom from "../atoms/ImageAtom";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center py-6">
      <Heading level={1} className="mb-4 text-center">
        👋 Hello, Medical Professionals
      </Heading>
      <Text variant="large" className="text-center">
        In a world where every decision can impact lives, even a minor
        documentation error can lead to serious consequences.
        <br />
        That&apos;s why{" "}
        <span className="font-bold text-[#6E62E5]">Co-Doctor</span> exists.
      </Text>
      <ImageAtom
        src="/images/about-hero.avif"
        alt="About Hero"
        width={2880}
        height={1336}
        className="mt-6 w-full"
      />
    </section>
  );
}
