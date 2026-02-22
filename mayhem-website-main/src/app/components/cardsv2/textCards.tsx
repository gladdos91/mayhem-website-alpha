import Link from 'next/link';
interface TitleTextCard {
  header: React.ReactNode;
  description: React.ReactNode;
  headerProperies?: React.ReactNode;
  descriptionProperties?: React.ReactNode;
}

export function TitleTextCard({ header, description, headerProperies, descriptionProperties }: TitleTextCard) {
  return (
    <div className={`rounded-2xl transition-transform duration-300 ease-in-out  ${headerProperies} grid grid-cols-1 md:grid-cols-1 gap-8 relative`}>
      <div className={`text-3xl font-bold orbitron-600`}>{header}</div>
      <div className={`text-md ${descriptionProperties}`}>{description}</div>
    </div>
  );
}


interface ButtonCard {
  header: React.ReactNode;
  description: React.ReactNode;
  href: string,
  properties?: React.ReactNode;
}

export function ButtonCard({header, description, href, properties}: ButtonCard) {
  return (
    <Link href={href}>
    <div className={`min-w-56  p-4  bg-blue-400 m-4 rounded-xl transition-transform ${properties}`}>
      <p className="text-md montserrat-800">{header}</p>
      <p className="text-sm montserrat-400">{description}</p>
    </div>
    </Link>
  );
}

interface InlineOrderedHeading {
  header: React.ReactNode;
  number: string;
  properties?: React.ReactNode;
}

export function InlineOrderedHeading({ header, number, properties }: InlineOrderedHeading) {
  return (
    <div className={`rounded-2xl transition-transform duration-300 ease-in-out ${properties}`}>
      <p className="text-3xl text-purple-500 orbitron-900 font-bold">
        {number} <span className="text-3xl text-white orbitron-800">{header}</span>
      </p>
      <hr
        className="bg-gradient-to-r from-purple-500 to-purple-900 h-0.5 mt-4 mb-4 border-t-0"
      />
    </div>
  );
}

interface SubtitleTextCard {
  description: React.ReactNode;
  properties?: React.ReactNode;
  descriptionProperties?: React.ReactNode;
}

export function SubtitleTextCard({ description, properties, descriptionProperties }: SubtitleTextCard) {
  return (
    <div className={`rounded-2xl transition-transform duration-300 ease-in-out  ${properties} grid grid-cols-1 md:grid-cols-1 gap-8 relative`}>
      <div className={`text-md ${descriptionProperties}`}>{description}</div>
    </div>
  );
}


interface TextCard {
  description: React.ReactNode;
  color: string;
  textcolor: string;
}

interface ModalTextCard {
  header: React.ReactNode;
  description: React.ReactNode;
  color: string;
  textcolor: string;
}

interface ModalTextCard {
  header: React.ReactNode;
  description: React.ReactNode;
  color: string;
  textcolor: string;
}
