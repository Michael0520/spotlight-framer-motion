import { TrackedSpotlightCard } from "~/components/SpotlightCard";

const Home = () => {
  const wrapper =
    "flex h-screen justify-center items-center bg-slate-900 select-none";
  const content = "flex items-center mobile:flex-col-reverse";
  return (
    <div className={wrapper}>
      <div className={content}>
        <TrackedSpotlightCard />
      </div>
    </div>
  );
};

export default Home;
