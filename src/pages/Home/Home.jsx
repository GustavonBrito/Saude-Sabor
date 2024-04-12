import Description from "../../Components/Description/index";
import Carousel from "../../Components/Carousel/index";

export default function Home() {
  const carouselImages = [
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
    "src/assets/Yaki.png",
    "src/assets/Macarrao_com_Almondegas-removebg-preview.png",
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
    "src/assets/Black_Illustration_Catering_Logo-removebg-preview.png",
  ];
  return (
    <>
      <div>
        <div className="flex my-auto align-middle justify-center max-h-firstSectionHeight h-lvh bg-blueSky gap-20">
          <div className="ml-40 max-sm:ml-12 my-auto">
            <Description />
          </div>

          <div className="rotate-12">
            <img
              src="src/assets/Yaki.png"
              alt="Yakissoba.png"
              width={"650px"}
            />
          </div>
        </div>
        <div>
          <Carousel>
            {carouselImages.map((carouselImage, index) => (
              <img width={'400px'} height={'200px'}key={index} src={carouselImage} alt="Yakissoba.png" />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
