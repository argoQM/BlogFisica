import info from "./Info";
interface Props {
  objetivos: string;
  mostrar: string;
  color: string;
}
const Seccion3CarteleraParcial: React.FC<Props> = ({
  objetivos,
  mostrar,
  color,
}) => {
  const show: string = `${mostrar} flex flex-col`;
  const showTarjeta: string = `bg-${color}-200 flex flex-col gap-2 p-2  w-50`;
  let parcial = info.sector3.cartelera.parciales.primerParcial;
  if (objetivos == "primerParcial") {
    parcial = info.sector3.cartelera.parciales.primerParcial;
  } else if (objetivos == "segundoParcial") {
    parcial = info.sector3.cartelera.parciales.segundoParcial;
  }

  return (
    <div className={show}>
      <div className="gap-2 p-2   flex flex-col">
        <span>1er Parcial</span>
        <div className="flex gap-2 p-2 flex-wrap justify-evenly">
          <div className={showTarjeta}>
            <span>{parcial.fecha}</span>
            <span>{parcial.horario}</span>
            <span>{parcial.lugar}</span>
          </div>
          <div className={showTarjeta}>
            <span>Resolucion: </span>
            <span>
              <a
                href={parcial.resolucion.href}
                title={parcial.resolucion.title}
                target="_blank"
              >
                {parcial.resolucion.nombre}
              </a>
            </span>
          </div>
          <div className={showTarjeta}>
            <span>Resultado: </span>
            <span>
              <a
                href={parcial.resultado.href}
                title={parcial.resultado.title}
                target="_blank"
              >
                {parcial.resultado.nombre}
              </a>
            </span>
          </div>
          <div className={showTarjeta}>
            <span>Muestra:</span>
            <span>{parcial.muestra.fecha}</span>
            <span>{parcial.muestra.horario}</span>
            <span>{parcial.muestra.lugar}</span>
          </div>
        </div>
      </div>
      <div className="   p-2">
        <span>Consultas</span>
        <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{parcial.consulta.consulta1.fecha}</span>
            <span>{parcial.consulta.consulta1.horario}</span>
            <span>{parcial.consulta.consulta1.lugar}</span>
          </div>
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{parcial.consulta.consulta2.fecha}</span>
            <span>{parcial.consulta.consulta2.horario}</span>
            <span>{parcial.consulta.consulta2.lugar}</span>
          </div>
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{parcial.consulta.consulta3.fecha}</span>
            <span>{parcial.consulta.consulta3.horario}</span>
            <span>{parcial.consulta.consulta3.lugar}</span>
          </div>
          <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
            <span>{parcial.consulta.consulta4.fecha}</span>
            <span>{parcial.consulta.consulta4.horario}</span>
            <span>{parcial.consulta.consulta4.lugar}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion3CarteleraParcial;
