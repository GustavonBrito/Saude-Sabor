import { NavBar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
