export const Product = ({ carouselImages }) => {
  return (
    <>
      {carouselImages.map((carouselImage, index) => (
        <div
          key={index}
          className="flex justify-center items-end mb-32 w-lvw h-lvh"
        >
          <img className="w-2/5" src={carouselImage} alt="Comida Yaki" />
        </div>
      ))}
    </>
  );
};
