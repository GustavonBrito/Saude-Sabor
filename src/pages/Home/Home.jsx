import { Description } from "../../Components/Description/index";
import { Carousel } from "../../Components/Carousel/index";
import { FaWhatsapp } from "react-icons/fa";

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
        <div className="flex my-auto items-center justify-end max-h-firstSectionHeight h-lvh">
          <div className="ml-40 max-sm:ml-12">
            <Description />
          </div>
          <div className="flex justify-end cursor-pointer mr-10 mt-96 -mb-40">
            <div className="flex justify-center items-center bg-emerald-500 w-12 h-12 fixed z-10 rounded-xl">
              <FaWhatsapp size={"32px"} color="white" />
            </div>
          </div>
        </div>
        <div>
          <Carousel carouselImages={carouselImages} />
        </div>
      </div>
    </>
  );
};
