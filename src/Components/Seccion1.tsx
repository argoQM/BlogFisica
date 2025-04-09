interface Props {
  objetivos: string;
  comienzo: string;
  teoricoDias: string;
  teoricoHorario: string;
  teoricoLugar: string;
  practico: string;
  talleres: string;
  consultasHorario: string;
  consultasLugar: string;
}

const Seccion1: React.FC<Props> = ({
  objetivos,
  comienzo,
  teoricoDias,
  teoricoHorario,
  teoricoLugar,
  practico,
  talleres,
  consultasHorario,
  consultasLugar,
}) => {
  return (
    <div className="bg-radial from-slate-900 from-40% to-gray-800  rounded-tl-3xl rounded-br-3xl p-4 flex gap-4 ">
      <div
        className="w-1/2  p-4 text-white bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl"
        dangerouslySetInnerHTML={{
          __html: objetivos,
        }}
      ></div>

      <div className="w-1/2  p-2 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl">
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
        </div>
        <div className="text-white gap-2 p-2 mt-2 flex justify-center">
          El curso comienza la semana del:
          <span className="font-bold ">{comienzo}</span>
        </div>
        <div className="bg-[url(public/Img/corcho.jpg)]  bg-center  mt-2 p-2 flex flex-wrap gap-2 justify-evenly rounded-md">
          <div className="bg-green-200 p-2 size-50 rounded-br-3xl shadow-2xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            </div>
            <div>
              <span className="font-bold underline">Teoricos</span>:
            </div>
            <div>Dias: {teoricoDias}</div>
            <div>Horarios: {teoricoHorario}</div>
            <div>Lugar: {teoricoLugar}</div>
          </div>
          <div className="bg-blue-200 p-2 size-55 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-orange-700 border-1 border-orange-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Practico</span>:<br />
            {practico}
          </div>
          <div className="bg-orange-200 p-2 size-50 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-blue-700 border-1 border-blue-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Talleres</span>:<br />
            {talleres}
          </div>
          <div className="bg-yellow-200 p-2 size-50 shadow-2xl rounded-br-3xl">
            <div className="flex justify-center items-center">
              <div className="size-4 bg-violet-700 border-1 border-violet-800 rounded-full"></div>
            </div>
            <span className="font-bold underline">Consultas</span>:
            <div>Dia y horario: {consultasHorario}</div>
            <div>Lugar: {consultasLugar}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
