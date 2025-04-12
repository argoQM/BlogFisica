import info from "./Info";
function Seccion2() {
  return (
    <div className="mt-4 p-4  gap-4">
      <div className=" flex gap-4">
        <div className="bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl   p-4 w-1/2">
          <img
            className="rounded-tl-3xl  "
            src={info.sector2.horarios.src}
            alt={info.sector2.horarios.alt}
            title={info.sector2.horarios.title}
          />
        </div>
        <div className="w-1/2  p-4 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% ">
          <img
            className="h-full "
            src={info.sector2.cronograma.src}
            alt={info.sector2.cronograma.alt}
            title={info.sector2.cronograma.title}
          />
        </div>
      </div>
      <div className=" bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90%  rounded-br-3xl p-2 mt-2">
        <span className="text-white">Talleres</span>
        <div className=" flex  gap-2 justify-between p-2">
          <div className=" p-2 gap-2 flex flex-col w-1/2">
            <div className="bg-orange-200 p-2 rounded-tl-3xl underline font-bold">
              {info.sector2.talleres.informacion.obligatoriedad}
            </div>
            <div className="bg-orange-200 p-2">
              {info.sector2.talleres.informacion.presencialidad}
            </div>
            <div className="bg-orange-200 p-2">
              {info.sector2.talleres.informacion.totalTalleres}
            </div>
            <div className="bg-orange-200 p-2 font-bold">
              {info.sector2.talleres.informacion.GananciaEvaluacion}
            </div>
            <div className="bg-orange-200 p-2 rounded-br-3xl">
              {info.sector2.talleres.informacion.puntajeMaximo}
            </div>
          </div>
          <div className=" p-2 flex  flex-wrap justify-evenly gap-2 w-1/2">
            <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
              <span className="underline font-bold">Grupo 1</span>
              <span>{info.sector2.talleres.grupos.grupo1.dia}</span>
              <span>{info.sector2.talleres.grupos.grupo1.horario}</span>
              <span>{info.sector2.talleres.grupos.grupo1.lugar}</span>
            </div>
            <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
              <span className="underline font-bold">Grupo 2</span>
              <span>{info.sector2.talleres.grupos.grupo2.dia}</span>
              <span>{info.sector2.talleres.grupos.grupo2.horario}</span>
              <span>{info.sector2.talleres.grupos.grupo2.lugar}</span>
            </div>
            <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
              <span className="underline font-bold">Grupo 3 </span>
              <span>{info.sector2.talleres.grupos.grupo3.dia}</span>
              <span>{info.sector2.talleres.grupos.grupo3.horario}</span>
              <span>{info.sector2.talleres.grupos.grupo3.lugar}</span>
            </div>
            <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
              <span className="underline font-bold">Grupo 4</span>
              <span>{info.sector2.talleres.grupos.grupo4.dia}</span>
              <span>{info.sector2.talleres.grupos.grupo4.horario}</span>
              <span>{info.sector2.talleres.grupos.grupo4.lugar}</span>
            </div>
            <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
              <span className="underline font-bold">Grupo 5</span>
              <span>{info.sector2.talleres.grupos.grupo5.dia}</span>
              <span>{info.sector2.talleres.grupos.grupo5.horario}</span>
              <span>{info.sector2.talleres.grupos.grupo5.lugar}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion2;
