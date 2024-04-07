import { List } from "phosphor-react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center w-full h-48 bg-cyan-100 font-roboto gap-80">
        <div className="-mt-20 -ml-44">
          <img
            src="src\assets\Black_Illustration_Catering_Logo-removebg-preview.png"
            alt="Sabor e Saúde.png"
            width={"350px"}
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
      </div>
    </>
  );
}
