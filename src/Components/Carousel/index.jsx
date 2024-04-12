/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

const Carousel = ({ children: carouselImage }) => {
  let [current, setCurrent] = useState(0);

  const handleNextImage = () => {
    if (current < carouselImage.length) {
      setCurrent((current += 1));
      console.log(current);
    } else {
      setCurrent((current = 0));
    }
  };

  return (
    <>
      <div
        className="relative bg-red-900  overflow-hidden"
        style={{ height: "max-content" }}
      >
        <div className="flex justify-center mx-auto">
          <h1 className="font-roboto text-white text-5xl font-bold">Menu</h1>
        </div>
        <div className="h-lvh flex-row">
          <div className="flex align-middle justify-center">{carouselImage}</div>
        </div>
        <div className="flex absolute inset-0 justify-between p-4 ">
          <div className="my-auto cursor-pointer" onClick={handleNextImage}>
            <ArrowLeft size={"32px"} />
          </div>
          <div className="my-auto cursor-pointer" onClick={handleNextImage}>
            <ArrowRight size={"32px"} />
          </div>
          <div className="absolute flex inset-0 justify-center gap-5 max-h-fit mt-auto">
            {carouselImage.map((carouselImage) => {
              return (
                <div
                  key={carouselImage.length}
                  className="p-2 bg-white mt-auto mb-4 rounded-full h-1"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
