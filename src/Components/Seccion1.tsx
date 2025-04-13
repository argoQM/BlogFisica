import info from "./Info";
function Seccion1() {
  return (
    <div className="p-4 flex gap-4 ">
      <div
        className="w-1/2  p-4 text-white bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl  "
        dangerouslySetInnerHTML={{
          __html: info.sector1.caracterObjetivos,
        }}
      ></div>
      <div className="w-1/2  p-2 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90%  rounded-br-3xl">
        <div className="flex justify-around gap-2 ">
          <a
            className="bg-amber-200 rounded-3xl hover:bg-amber-300 w-1/3 p-2 justify-center flex"
            href="https://nivelacion-fisica101.vercel.app/"
            target="blank"
          >
            <div>Nivelacion</div>
          </a>
          <a
            href="#contenidoTeorico"
            className="bg-green-200 rounded-3xl hover:bg-green-300 w-1/3 p-2 justify-center flex"
          >
            Teoricos
          </a>
          <a
            href="#contenidoPractico"
            className="bg-blue-200 rounded-3xl hover:bg-blue-300 w-1/3 p-2 justify-center flex"
          >
            Practicos
          </a>
          <a
            href="#cartelera"
            className="bg-gray-200 rounded-3xl hover:bg-gray-300 w-1/3 p-2 justify-center flex"
          >
            Cartelera
          </a>
        </div>
        <div className="text-white gap-2 p-2 mt-2 flex justify-center">
          El curso comienza la semana del:
          <span className="font-bold ">{info.sector1.comienzo.fecha}</span>
        </div>
        <div className="bg-[url(public/Img/corcho.jpg)]  bg-center  mt-2 p-2 flex flex-wrap gap-2 justify-evenly rounded-md rounded-br-3xl">
          <div className="bg-green-200 p-2 size-50 rounded-br-3xl shadow-2xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            </div>
            <div>
              <span className="font-bold underline">Teoricos</span>:
            </div>
            <div>Dias: {info.sector1.comienzo.teorico.dias}</div>
            <div>Horarios: {info.sector1.comienzo.teorico.horario}</div>
            <div>Lugar: {info.sector1.comienzo.teorico.lugar}</div>
          </div>
          <div className="bg-blue-200 p-2 size-55 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Practico</span>:<br />
            {info.sector1.comienzo.practico}
          </div>
          <div className="bg-orange-200 p-2 size-50 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Talleres</span>:<br />
            {info.sector1.comienzo.talleres}
          </div>
          <div className="bg-yellow-200 p-2 size-50 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Consultas</span>:
            <div>Dia y horario: {info.sector1.comienzo.consultas.horario}</div>
            <div>Lugar: {info.sector1.comienzo.consultas.lugar}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
