import Description from "../../Components/Description/index";
import Carousel from "../../Components/Carousel/index";

export default function Home() {
  const carouselImages = [
    "src/assets/Yakissoba_Frango.png",
    "src/assets/Yakissoba_Frango.png",
    "src/assets/Yakissoba_Frango.png",
    "src/assets/Yakissoba_Frango.png",
  ];
  return (
    <>
      <div>
        <div className="flex my-auto align-middle justify-center max-h-firstSectionHeight h-lvh bg-blueSky gap-20">
          <div className="ml-40 max-sm:ml-12 my-auto">
            <Description />
          </div>

          <div>
            <img
              className=""
              src="src/assets/Yaki.png"
              alt="Yakissoba.png"
              width={"350px"}
            />
          </div>
        </div>
        <div>
          <Carousel>
            {carouselImages.map((carouselImage, index) => (
              <img
                className="flex mx-auto justify-center"
                width={"100%"}
                height={"100%"}
                key={index}
                src={carouselImage}
                alt="Yakissoba.png"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
