import NavBar from "../../Navbar";
import Footer from "../../Footer";
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
