import NavBar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import { StyleDefault } from "./Default.style";

let DefaultLayout = () => {
  return (
    <>
      <StyleDefault>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyleDefault>
    </>
  );
};

export default DefaultLayout;
