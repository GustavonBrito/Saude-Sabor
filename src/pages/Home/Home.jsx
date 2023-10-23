import { HomeStyle, HomePhotoStyle } from "./Home.styles";
import Description from "../../Components/Description";

export default function Home() {
  return (
    <>
      <HomeStyle>
        <HomePhotoStyle>
          <Description />
        </HomePhotoStyle>
        <div>
          <img
            src="src/assets/Yakissoba-removebg-preview.png"
            alt="Yakissoba.png"
            width={800}
          />
        </div>
      </HomeStyle>
      <HomePhotoStyle>
        <Description />
        <div>
          <img
            src="src/assets/Macarrao_com_Almondegas-removebg-preview.png"
            alt="Yakissoba.png"
            width={800}
          />
        </div>
      </HomePhotoStyle>
    </>
  );
}
