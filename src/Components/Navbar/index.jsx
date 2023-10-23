import { NavBar } from "./NavBar.style";

export default function Home() {
  return (
    <>
      <NavBar>
        <img
          src="src\assets\Black_Illustration_Catering_Logo-removebg-preview.png"
          alt="Sabor e Saúde.png"
          width={"300px"}
        />
        <ul>
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">FAÇA UM PEDIDO</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
      </NavBar>
    </>
  );
}
