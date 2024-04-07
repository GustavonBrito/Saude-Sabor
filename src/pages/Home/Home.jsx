import Description from "../../Components/Description/index";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Description />
        <div className="h-full mt-auto w-full -ml-28">
          <img
            src="src/assets/Yakissoba-removebg-preview.png"
            alt="Yakissoba.png"
          />
        </div>
      </div>
    </>
  );
}
