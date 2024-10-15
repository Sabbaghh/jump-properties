import Link from "next/link";
import { InfoBoxDataType } from "./types/infoBox";
const InfoBox = (props: InfoBoxDataType) => {
  const {
    backgroundStyle = "bg-gray-100",
    LinkColor = "bg-black",
    title,
    description,
    link: { href, label },
  } = props;
  return (
    <div className={`${backgroundStyle} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        href={href}
        className={`${LinkColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {label}
      </Link>
    </div>
  );
};

export default InfoBox;
