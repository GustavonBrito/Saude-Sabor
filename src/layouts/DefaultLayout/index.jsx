import { NavBar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import { WhatsappLogo } from "phosphor-react";

export const DefaultLayout = () => {
  return (
    <>
      <div className="bg-bannerImage text-white bg-cover bg-no-repeat">
        <NavBar />
        <main>
          <WhatsappLogo
            className="fixed z-10"
            size={"48px"}
            color="green"
            weight="fill"
          />

          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};
