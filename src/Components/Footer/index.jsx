import { InstagramLogo, WhatsappLogo, FacebookLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <>
      <footer className="h-lvh">
        <div className="flex justify-center items-center bg-blueSky h-3/4">
          <div className="flex justify-center items-center bg-creamAdvise h-4/4 w-1/3 text-black font-roboto p-3">
            <div className="w-2/2 border-solid border-2 border-black ">
              <div className="flex flex-col items-center mx-auto gap-2 w-1/2">
                <div className="flex flex-col items-start">
                  <h1 className="mt-2 text-2xl border-b-2 border-solid border-black">
                    <span>HORÁRIO</span> DE FUNCIONAMENTO
                  </h1>
                  <p>Segunda-Feira: 20:00 as 23:00</p>
                  <p>Terça-Feira: 20:00 as 23:00</p>
                  <p>Quarta-Feira: 20:00 as 23:00</p>
                  <p>Quinta-Feira: 20:00 as 23:00</p>
                  <p>Sexta-Feira: 20:00 as 23:00</p>
                  <p>Sabado: 20:00 as 23:00</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-1/4">
          <div className="flex flex-col text-white items-center pt-3">
            <p className="">Saude e Sabor</p>
            <p className="">Rua Tal Tal | São Paulo, SP</p>
          </div>
          <div className="flex justify-center pt-4 gap-3">
            <InstagramLogo
              className="cursor-pointer"
              color="white"
              size={"24px"}
            />
            <WhatsappLogo
              className="cursor-pointer"
              color="white"
              size={"24px"}
            />
            <FacebookLogo
              className="cursor-pointer"
              color="white"
              size={"24px"}
            />
          </div>
        </div>
      </footer>
    </>
  );
};
