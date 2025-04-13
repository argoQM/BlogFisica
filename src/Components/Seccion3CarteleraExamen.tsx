import info from "./Info";
interface Props {
  mostrar: string;
}
const Seccion3CarteleraExamen: React.FC<Props> = ({ mostrar }) => {
  let examen = info.sector3.cartelera.examen;
  const show: string = `${mostrar} flex flex-col`;
  return (
    <div className={show}>
      <div className="gap-2 p-2   flex flex-col ">
        <span>
          Examen periodo
          {examen.periodo}
        </span>
        <div className="flex gap-2 p-2 flex-wrap justify-evenly">
          <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
            <span>{examen.fecha}</span>
            <span>{examen.horario}</span>
            <span>{examen.lugar}</span>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
            <span>Resolucion: </span>
            <span>
              <a
                href={examen.resolucion.href}
                title={examen.resolucion.title}
                target="_blank"
              >
                {examen.resolucion.nombre}
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
            <span>Resultado: </span>
            <span>
              <a
                href={examen.resultado.href}
                title={examen.resultado.title}
                target="_blank"
              >
                {examen.resultado.nombre}
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
            <span>Muestra:</span>
            <span>{examen.muestra.fecha}</span>
            <span>{examen.muestra.horario}</span>
            <span>{examen.muestra.lugar}</span>
          </div>
        </div>
      </div>
      <div className="  p-2">
        <span>Consultas</span>
        <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{examen.consulta.consulta1.fecha}</span>
            <span>{examen.consulta.consulta1.horario}</span>
            <span>{examen.consulta.consulta1.lugar}</span>
          </div>
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{examen.consulta.consulta2.fecha}</span>
            <span>{examen.consulta.consulta2.horario}</span>
            <span>{examen.consulta.consulta2.lugar}</span>
          </div>
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{examen.consulta.consulta3.fecha}</span>
            <span>{examen.consulta.consulta3.horario}</span>
            <span>{examen.consulta.consulta3.lugar}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion3CarteleraExamen;
