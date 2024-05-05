export const Product = ({ carouselImages }) => {
  return (
    <>
      {carouselImages.map((carouselImage, index) => (
        <div
          key={index}
          className="flex justify-center items-end mb-32 w-lvw h-lvh"
        >
          <img className="w-1/4" src={carouselImage} alt="Comida Yaki" />
        </div>
      ))}
    </>
  );
};
