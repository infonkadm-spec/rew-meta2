import Image from "next/image";

export default function LogoV2() {
  
  return (
    <Image
      src="/logo1.png"
      alt="Youtube"
      width={120}
      height={120}
      quality={100}
      priority
    />
  );

};