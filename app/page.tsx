import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import FeaturedProperties from "@/components/FeaturedProperties";
import RecentProperties from "@/components/RecentProperties";
const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <RecentProperties />
    </>
  );
};

export default HomePage;
