/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "phosphor-react";

const Carousel = ({ children: carouselImage }) => {
  return (
    <>
      <div className="relative bg-red-900 flex overflow-hidden">
        <div className="flex">{carouselImage}</div>
        <div className="absolute">
          <ArrowLeft size={"32px"} />
        </div>
        <div>
          <ArrowRight size={"32px"} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
