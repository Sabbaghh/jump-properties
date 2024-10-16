import InfoBox from "./InfoBox";
import { InfoBoxDataType } from "@/types/infoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          {infoBoxesData.map((infoBox, index) => (
            <InfoBox
              key={index}
              title={infoBox.title}
              description={infoBox.description}
              link={infoBox.link}
              backgroundStyle={infoBox.backgroundStyle}
              LinkColor={infoBox.LinkColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const infoBoxesData: InfoBoxDataType[] = [
  {
    title: "For Renters",
    description:
      "Find your dream rental property. Bookmark properties and contact owners.",
    link: {
      href: "/properties",
      label: "Browse Properties",
    },
    backgroundStyle: "bg-gray-100",
    LinkColor: "bg-black",
  },
  {
    title: "For Property Owners",
    description:
      "List your properties and reach potential tenants. Rent as an airbnb or long term.",
    link: {
      href: "/add-property",
      label: "Add Property",
    },
    backgroundStyle: "bg-blue-100",
    LinkColor: "bg-blue-500",
  },
];

export default InfoBoxes;
