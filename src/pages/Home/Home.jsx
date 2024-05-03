import { Description } from "../../Components/Description/index";
import { Carousel } from "../../Components/Carousel/index";

export const Home = () => {
  const carouselImages = [
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
    "src/assets/Yaki.png",
  ];
  return (
    <>
      <div>
        <div className="flex my-auto align-middle justify-center max-h-firstSectionHeight h-lvh bg-blueSky gap-20">
          <div className="ml-40 max-sm:ml-12 my-auto">
            <Description />
          </div>

          <div className="flex items-center">
            <img
              className=""
              src="src/assets/Yaki.png"
              alt="Yakissoba.png"
              width={"350px"}
            />
          </div>
        </div>
        <div>
          <Carousel carouselImages={carouselImages} />
        </div>
      </div>
    </>
  );
};
