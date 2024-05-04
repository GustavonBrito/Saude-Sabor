export const Product = ({ carouselImages }) => {
  return (
    <>
      {carouselImages.map((carouselImage, index) => (
        <div key={index} className="flex justify-center w-lvw">
          <img
            className="w-16 md:w-2/6 lg:w-2/6"
            src={carouselImage}
            alt="Comida Yaki"
          />
        </div>
      ))}
    </>
  );
};
