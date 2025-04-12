import info from "./Info";

function Seccion3Cartelera() {
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
          <span className="text-center">{info.sector3.cartelera.avisos}</span>
          <div className="bg-pink-200 rounded-3xl p-2 flex justify-center items-center">
            1er Parcial
          </div>
          <div className="bg-purple-200 rounded-3xl p-2 flex justify-center items-center">
            2do Parcial
          </div>
          <div className="bg-violet-200 rounded-3xl p-2 flex justify-center items-center">
            Examen
          </div>
        </div>
      </div>
      <div className="  flex flex-wrap justify-evenly gap-2 ">
        <div className=" flex justify-evenly flex-col   bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2  ">
          <div className="gap-2 p-2   flex flex-col">
            <span>1er Parcial</span>
            <div className="flex gap-2 p-2 flex-wrap justify-evenly">
              <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
                <span>
                  {info.sector3.cartelera.parciales.primerParcial.fecha}
                </span>
                <span>
                  {info.sector3.cartelera.parciales.primerParcial.horario}
                </span>
                <span>
                  {info.sector3.cartelera.parciales.primerParcial.lugar}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
                <span>Resolucion: </span>
                <span>
                  <a
                    href={
                      info.sector3.cartelera.parciales.primerParcial.resolucion
                        .href
                    }
                    title={
                      info.sector3.cartelera.parciales.primerParcial.resolucion
                        .title
                    }
                    target="_blank"
                  >
                    {
                      info.sector3.cartelera.parciales.primerParcial.resolucion
                        .nombre
                    }
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
                <span>Resultado: </span>
                <span>
                  <a
                    href={
                      info.sector3.cartelera.parciales.primerParcial.resultado
                        .href
                    }
                    title={
                      info.sector3.cartelera.parciales.primerParcial.resultado
                        .title
                    }
                    target="_blank"
                  >
                    {
                      info.sector3.cartelera.parciales.primerParcial.resultado
                        .nombre
                    }
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
                <span>Muestra:</span>
                <span>
                  {info.sector3.cartelera.parciales.primerParcial.muestra.fecha}
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.muestra
                      .horario
                  }
                </span>
                <span>
                  {info.sector3.cartelera.parciales.primerParcial.muestra.lugar}
                </span>
              </div>
            </div>
          </div>
          <div className="   p-2">
            <span>Consultas</span>
            <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta1.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta1.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta1.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta2.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta2.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta2.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta3.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta3.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta3.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta4.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta4.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.primerParcial.consulta
                      .consulta4.lugar
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly flex-col max-w-150  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2 hidden ">
          <div className="gap-2 p-2   flex flex-col">
            <span>2do Parcial</span>
            <div className="flex gap-2 p-2 flex-wrap justify-evenly">
              <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
                <span>
                  {info.sector3.cartelera.parciales.segundoParcial.fecha}
                </span>
                <span>
                  {info.sector3.cartelera.parciales.segundoParcial.horario}
                </span>
                <span>
                  {info.sector3.cartelera.parciales.segundoParcial.lugar}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
                <span>Resolucion: </span>
                <span>
                  <a
                    href={
                      info.sector3.cartelera.parciales.segundoParcial.resolucion
                        .href
                    }
                    title={
                      info.sector3.cartelera.parciales.segundoParcial.resolucion
                        .title
                    }
                    target="_blank"
                  >
                    {
                      info.sector3.cartelera.parciales.segundoParcial.resolucion
                        .nombre
                    }
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
                <span>Resultado: </span>
                <span>
                  <a
                    href={
                      info.sector3.cartelera.parciales.segundoParcial.resultado
                        .href
                    }
                    title={
                      info.sector3.cartelera.parciales.segundoParcial.resultado
                        .title
                    }
                    target="_blank"
                  >
                    {
                      info.sector3.cartelera.parciales.segundoParcial.resultado
                        .nombre
                    }
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
                <span>Muestra:</span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.muestra
                      .fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.muestra
                      .horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.muestra
                      .lugar
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="   p-2">
            <span>Consultas</span>
            <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta1.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta1.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta1.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta2.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta2.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta2.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta3.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta3.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta3.lugar
                  }
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta4.fecha
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta4.horario
                  }
                </span>
                <span>
                  {
                    info.sector3.cartelera.parciales.segundoParcial.consulta
                      .consulta4.lugar
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-evenly flex-col max-w-150  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2 hidden ">
          <div className="gap-2 p-2   flex flex-col">
            <span>
              Examen periodo
              {info.sector3.cartelera.examen.periodo}
            </span>
            <div className="flex gap-2 p-2 flex-wrap justify-evenly">
              <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
                <span>{info.sector3.cartelera.examen.fecha}</span>
                <span>{info.sector3.cartelera.examen.horario}</span>
                <span>{info.sector3.cartelera.examen.lugar}</span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
                <span>Resolucion: </span>
                <span>
                  <a
                    href={info.sector3.cartelera.examen.resolucion.href}
                    title={info.sector3.cartelera.examen.resolucion.title}
                    target="_blank"
                  >
                    {info.sector3.cartelera.examen.resolucion.nombre}
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
                <span>Resultado: </span>
                <span>
                  <a
                    href={info.sector3.cartelera.examen.resultado.href}
                    title={info.sector3.cartelera.examen.resultado.title}
                    target="_blank"
                  >
                    {info.sector3.cartelera.examen.resultado.nombre}
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
                <span>Muestra:</span>
                <span>{info.sector3.cartelera.examen.muestra.fecha}</span>
                <span>{info.sector3.cartelera.examen.muestra.horario}</span>
                <span>{info.sector3.cartelera.examen.muestra.lugar}</span>
              </div>
            </div>
          </div>
          <div className="  p-2">
            <span>Consultas</span>
            <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta1.fecha}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta1.horario}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta1.lugar}
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta2.fecha}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta2.horario}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta2.lugar}
                </span>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta3.fecha}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta3.horario}
                </span>
                <span>
                  {info.sector3.cartelera.examen.consulta.consulta3.lugar}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion3Cartelera;
