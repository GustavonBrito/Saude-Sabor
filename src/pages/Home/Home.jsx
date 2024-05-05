import { Description } from "../../Components/Description/index";
import { Carousel } from "../../Components/Carousel/index";

export const Home = () => {
  const carouselImages = [
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
  ];
  return (
    <>
      <div>
        <div className="flex my-auto items-center justify-center max-h-firstSectionHeight h-lvh gap-20">
          <div className="ml-40 max-sm:ml-12 my-auto">
            <Description />
          </div>
        </div>
        <div>
          <Carousel carouselImages={carouselImages} />
        </div>
      </div>
    </>
  );
};
