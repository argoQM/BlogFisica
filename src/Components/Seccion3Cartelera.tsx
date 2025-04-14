import { useState } from "react";
import info from "./Info";
import Seccion3CarteleraAvisos from "./Seccion3CarteleraAvisos";
import Seccion3CarteleraParcial from "./Seccion3CarteleraParcial";
import Seccion3CarteleraExamen from "./Seccion3CarteleraExamen";

function Seccion3Cartelera() {
  const [avisosShow, setAvisosShow] = useState("flex");
  const [parcial, setParcial] = useState("");
  const [parcialShow, setParcialShow] = useState("hidden");
  const [parcialColor, setParcialColor] = useState("pink");
  const [examenShow, setExamenShow] = useState("hidden");
  return (
    <div className=" bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl  rounded-md p-4  flex gap-2 ">
      <div className="min-w-50 flex flex-col gap-8">
        <div className="h-50 bg-white gap-2 p-2 rounded-tl-3xl rounded-br-3xl flex justify-center items-center">
          <a
            href={info.sector3.cartelera.curso.href}
            title={info.sector3.cartelera.curso.title}
            target="_blank"
          >
            <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
              {info.sector3.cartelera.curso.nombre}.pdf
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className=" mx-2 group-hover:animate-bounce"
              >
                <path d="M10.5 1h4.5v4h-1V2.7l-5.5 5.5-.7-.7L13.3 2H11V1zM15 15H1V1h8v1H2v12h12V8h1v7z" />
              </svg>
            </span>
          </a>
        </div>
        <div className=" bg-white gap-2 mt-2 flex flex-col p-2 rounded-tl-3xl rounded-br-3xl">
          <button
            className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setAvisosShow("flex");
              setParcialShow("hidden");
              setExamenShow("hidden");
            }}
          >
            Avisos
          </button>
          <button
            className="bg-pink-200 hover:bg-pink-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setParcial("primerParcial");
              setParcialColor("pink");
              setParcialShow("flex");
              setExamenShow("hidden");
              setAvisosShow("hidden");
            }}
          >
            1er Parcial
          </button>
          <button
            className="bg-purple-200  hover:bg-purple-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setParcial("segundoParcial");
              setParcialColor("purple");
              setParcialShow("flex");
              setExamenShow("hidden");
              setAvisosShow("hidden");
            }}
          >
            2do Parcial
          </button>
          <button
            className="bg-violet-200 hover:bg-violet-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setParcialShow("hidden");
              setExamenShow("flex");
              setAvisosShow("hidden");
            }}
          >
            Examen
          </button>
        </div>
      </div>
      <div className="  flex  flex-wrap  w-full gap-2 ">
        <div className="justify-center items-center flex  flex-col size-full bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2  ">
          <Seccion3CarteleraAvisos mostrar={avisosShow} />
          <Seccion3CarteleraParcial
            objetivos={parcial}
            mostrar={parcialShow}
            color={parcialColor}
          />
          <Seccion3CarteleraExamen mostrar={examenShow} />
        </div>
      </div>
    </div>
  );
}

export default Seccion3Cartelera;
