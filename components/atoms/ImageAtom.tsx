import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImageAtom({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false
}: ImageAtomProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
