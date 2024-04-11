import { List } from "phosphor-react";


export default function Navbar() {
  return (
    <>
      <header className="flex justify-center w-full h-48 bg-blueSky font-roboto gap-80">
        <div className="-mt-20 -ml-44 max-sm:my-auto max-md:my-auto ">
          <img
            src="src\assets\Black_Illustration_Catering_Logo-removebg-preview.png"
            alt="Sabor e Saúde.png"
            width={"350px"}
            className="max-sm:w-6/12 max-md:w-6/12 max-sm:ml-44 max-md:ml-44 w-6/12 ml-44"
          />
        </div>

        <div className="mt-auto mb-auto">
          <List
            className="cursor-pointer max-sm:block max-md:block hidden"
            size={"24px"}
          />
          <ul className="flex gap-10 align-middle max-sm:hidden max-md:hidden">
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
        </div>
      </header>
    </>
  );
}
