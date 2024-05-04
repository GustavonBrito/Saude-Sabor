import { NavBar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import { WhatsappLogo } from "phosphor-react";

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="w-lvw">
          <WhatsappLogo
            className="fixed z-10"
            size={"48px"}
            color="green"
            weight="fill"
          />
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
