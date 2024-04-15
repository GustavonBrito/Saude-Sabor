/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

const Carousel = ({ children: carouselImage }) => {
  let [current, setCurrent] = useState(0);

  const handleNextImage = () => {
    setCurrent((current) =>
      current == carouselImage.length - 1 ? 0 : current + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrent((current) =>
      current == 0 ? carouselImage.length : (current -= 1)
    );
  };

  return (
    <>
      <div
        className="relative bg-red-900  overflow-hidden"
        style={{ height: "max-content" }}
      >
        <div className="flex-col">
          <h1 className="flex font-roboto text-white text-5xl font-bold pt-10 pb-2 justify-center">
            Nosso Menu
          </h1>
          <p className="text-justify md:px-96 max-sm:px-20 justify-center text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            repellendus maiores vel eaque magni inventore quibusdam dolore
            eveniet exercitationem incidunt, veniam architecto totam ut quidem
            omnis accusamus tempora non esse!
          </p>
        </div>
        <div className="w-lvw h-lvh flex-row">
          <div className="flex absolute inset-0 w-lvw">
            <div
              className="flex my-auto mx-auto transition-transform ease-out duration-1000 w-2/4 h-lvh"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {carouselImage}
            </div>

            <div className="flex absolute inset-0 justify-between mx-6">
              <button
                className="my-auto cursor-pointer rounded-full bg-black p-2"
                onClick={handlePreviousImage}
              >
                <ArrowLeft size={"32px"} color="white" />
              </button>
              <button
                className="my-auto cursor-pointer rounded-full bg-black p-2"
                onClick={handleNextImage}
              >
                <ArrowRight size={"32px"} color="white" />
              </button>
            </div>
            <div className="absolute flex inset-0 justify-center gap-5 max-h-fit mt-auto">
              {carouselImage.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`p-2 bg-white mt-auto mb-4 rounded-full h-1 transition-all ${
                      current === i ? "p-3" : "bg-opacity-50"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
