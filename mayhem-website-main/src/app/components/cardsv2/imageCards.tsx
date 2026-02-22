import Image from "next/image";
interface TitleImageTextCard {
  src: string;
  alt: string;
  header: React.ReactNode;
  description: React.ReactNode;
  headerProperies?: React.ReactNode;
  descriptionProperties?: React.ReactNode;
}

export function TitleImageTextCard({ header, description, headerProperies, descriptionProperties, src, alt }: TitleImageTextCard) {
  return (
    <div className={`rounded-2xl transition-transform duration-300 ease-in-out  ${headerProperies} grid grid-cols-1 md:grid-cols-1 gap-8 relative`}>
      <Image 
        src={src}
        alt={alt}
        width={256}
        height={256}
        className="p-6"
      />
      <div className={`text-3xl font-bold orbitron-600`}>{header}</div>
      <div className={`text-md ${descriptionProperties}`}>{description}</div>
    </div>
  );
}
