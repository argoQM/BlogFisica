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
        <div className="h-50 bg-white gap-2 p-2 rounded-tl-3xl rounded-br-3xl">
          <span>Resultado del Curso Fisica 101</span>
          <div>
            <a
              href={info.sector3.cartelera.curso.href}
              title={info.sector3.cartelera.curso.title}
              target="_blank"
            >
              {info.sector3.cartelera.curso.nombre}
            </a>
          </div>
        </div>
        <div className=" bg-white gap-2 mt-2 flex flex-col p-2 rounded-tl-3xl rounded-br-3xl">
          <div
            className="bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setAvisosShow("flex");
              setParcialShow("hidden");
              setExamenShow("hidden");
            }}
          >
            Avisos
          </div>
          <div
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
          </div>
          <div
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
          </div>
          <div
            className="bg-violet-200 hover:bg-violet-300 hover:cursor-pointer rounded-3xl p-2 flex justify-center items-center"
            onClick={() => {
              setParcialShow("hidden");
              setExamenShow("flex");
              setAvisosShow("hidden");
            }}
          >
            Examen
          </div>
        </div>
      </div>
      <div className="  flex flex-wrap justify-evenly gap-2 ">
        <div className=" flex justify-evenly flex-col  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2  ">
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
