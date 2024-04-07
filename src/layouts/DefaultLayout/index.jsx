import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

let DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <main className="bg-cyan-100 h-lvh ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
