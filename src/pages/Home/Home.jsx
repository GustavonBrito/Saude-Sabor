import Description from "../../Components/Description/index";
import Carousel from "../../Components/Carousel/index";

export default function Home() {
  const carouselImages = [
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
  ];
  return (
    <>
      <div>
        <div className="flex my-auto align-middle bg-cyan-100 ">
          <div className="ml-40 max-sm:ml-12 my-auto">
            <Description />
          </div>

          <div className="-ml-24">
            <img
              src="src/assets/Yakissoba-removebg-preview.png"
              alt="Yakissoba.png"
            />
          </div>
        </div>
        <div>
          <Carousel>
            {carouselImages.map((carouselImage) => {
              <img src={carouselImage} alt="Yakissoba.png" />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
