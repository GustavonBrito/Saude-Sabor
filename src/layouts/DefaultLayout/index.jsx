import { NavBar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <div className="bg-bannerImage text-white bg-cover bg-no-repeat">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};
