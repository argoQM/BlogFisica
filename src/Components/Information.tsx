import datos from "./informacionCursoFisica101.json";
interface InfoJSON {
  sector1: {
    caracterObjetivos: string;
    comienzo: {
      fecha: string;
      teorico: {
        dias: string;
        horario: string;
        lugar: string;
      };
      practico: string;
      talleres: string;
      consultas: {
        horario: string;
        lugar: string;
      };
    };
  };
  sector2: {
    horarios: {
      src: string;
      title: string;
      alt: string;
    };
    talleres: {
      informacion: {
        obligatoriedad: string;
        presencialidad: string;
        totalTalleres: string;
        GananciaEvaluacion: string;
        puntajeMaximo: string;
      };
      grupos: {
        grupo1: {
          dia: string;
          horario: string;
          lugar: string;
        };
        grupo2: {
          dia: string;
          horario: string;
          lugar: string;
        };
        grupo3: {
          dia: string;
          horario: string;
          lugar: string;
        };
        grupo4: {
          dia: string;
          horario: string;
          lugar: string;
        };
        grupo5: {
          dia: string;
          horario: string;
          lugar: string;
        };
      };
    };
    cronograma: {
      src: string;
      title: string;
      alt: string;
    };
  };
  sector3: {
    descargables: {
      informacionGeneralCurso: {
        programaAsignatura: {
          nombre: string;
          href: string;
          download: string;
        };
        programaCurso: {
          nombre: string;
          href: string;
          download: string;
        };
        estructuraCurso: {
          nombre: string;
          href: string;
          download: string;
        };
      };
      linkMaterialInteres: {
        resumenFormulas: {
          nombre: string;
          href: string;
          download: string;
        };
        libroWeb: {
          nombre: string;
          href: string;
          alt: string;
          title: string;
        };
        webSimulaciones: {
          web1: {
            nombre: string;
            href: string;
            alt: string;
            title: string;
          };
          web2: {
            nombre: string;
            href: string;
            alt: string;
            title: string;
          };
        };
      };
      materialAdicional: {
        tutorias: {
          cinematicaDinamica: {
            nombre: string;
            href: string;
            download: string;
          };
          trabajoEnergia: {
            nombre: string;
            href: string;
            download: string;
          };
          CantidadMovimientoLineal: {
            nombre: string;
            href: string;
            download: string;
          };
          oscilaciones: {
            nombre: string;
            href: string;
            download: string;
          };
          rigidosMomentoAngular: {
            nombre: string;
            href: string;
            download: string;
          };
        };
      };
    };
    cartelera: {
      parciales: {
        primerParcial: {
          fecha: string;
          horario: string;
          lugar: string;
          resultado: {
            href: string;
            nombre: string;
            title: string;
          };
          resolucion: {
            href: string;
            nombre: string;
            title: string;
          };
          muestra: {
            fecha: string;
            horario: string;
            lugar: string;
          };
          consulta: {
            consulta1: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta2: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta3: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta4: {
              fecha: string;
              horario: string;
              lugar: string;
            };
          };
        };
        segundoParcial: {
          fecha: string;
          horario: string;
          lugar: string;
          resultado: {
            href: string;
            nombre: string;
            title: string;
          };
          resolucion: {
            href: string;
            nombre: string;
            title: string;
          };
          muestra: {
            fecha: string;
            horario: string;
            lugar: string;
          };
          consulta: {
            consulta1: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta2: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta3: {
              fecha: string;
              horario: string;
              lugar: string;
            };
            consulta4: {
              fecha: string;
              horario: string;
              lugar: string;
            };
          };
        };
      };
      examen: {
        fecha: string;
        horario: string;
        lugar: string;
        periodo: string;
        resultado: {
          href: string;
          nombre: string;
          title: string;
        };
        resolucion: {
          href: string;
          nombre: string;
          title: string;
        };
        muestra: {
          fecha: string;
          horario: string;
          lugar: string;
        };
        consulta: {
          consulta1: {
            fecha: string;
            horario: string;
            lugar: string;
          };
          consulta2: {
            fecha: string;
            horario: string;
            lugar: string;
          };
          consulta3: {
            fecha: string;
            horario: string;
            lugar: string;
          };
        };
      };
      curso: {
        href: string;
        nombre: string;
        title: string;
      };
      avisos: string;
    };
  };
}
//Variables
const dataInfoJSON: InfoJSON = datos;
function Information() {
  return (
    <>
      <header className="flex justify-evenly items-center w-full h-15 bg-orange-600 ">
        <div>DETEMA</div>
        <div>Facultad de Quimica</div>
        <div>UdelaR</div>
      </header>
      <main>
        <h1 className="text-3xl text-boltd flex justify-center items-center underline">
          Fisica 101
        </h1>
        <div className="p-4">
          <div className="bg-green-300 p-2 flex gap-4">
            <div
              className="w-1/2 bg-red-300 p-2"
              dangerouslySetInnerHTML={{
                __html: dataInfoJSON.sector1.caracterObjetivos,
              }}
            ></div>
            <div className="w-1/2 bg-violet-300 p-2">
              <div className="flex justify-around gap-2">
                <a
                  className="bg-amber-300 w-1/3 p-2 justify-center flex"
                  href="https://nivelacion-fisica101.vercel.app/"
                  target="blank"
                >
                  <div>Nivelacion</div>
                </a>
                <div className="bg-amber-300 w-1/3 p-2 justify-center flex">
                  Teoricos
                </div>
                <div className="bg-amber-300 w-1/3 p-2 justify-center flex">
                  Practicos
                </div>
              </div>
              <div className="bg-green-200 p-2 mt-2 flex justify-center">
                El curso comienza la semana del:{" "}
                <span className="font-bold ">
                  {dataInfoJSON.sector1.comienzo.fecha}
                </span>
              </div>
              <div className="bg-red-300  mt-2 p-2 flex flex-wrap gap-2 justify-evenly">
                <div className="bg-green-200 p-2 w-50">
                  <div>
                    <span className="font-bold underline">Teoricos</span>:
                  </div>
                  <div>Dias: {dataInfoJSON.sector1.comienzo.teorico.dias}</div>
                  <div>
                    Horarios: {dataInfoJSON.sector1.comienzo.teorico.horario}
                  </div>
                  <div>
                    Lugar: {dataInfoJSON.sector1.comienzo.teorico.lugar}
                  </div>
                </div>
                <div className="bg-green-200 p-2 w-50">
                  <span className="font-bold underline">Practico</span>:<br />
                  {dataInfoJSON.sector1.comienzo.practico}
                </div>
                <div className="bg-green-200 p-2 w-50">
                  <span className="font-bold underline">Talleres</span>:<br />
                  {dataInfoJSON.sector1.comienzo.talleres}
                </div>
                <div className="bg-green-200 p-2 w-50">
                  <span className="font-bold underline">Consultas</span>:
                  <div>
                    Dia y horario:{" "}
                    {dataInfoJSON.sector1.comienzo.consultas.horario}
                  </div>
                  <div>
                    Lugar: {dataInfoJSON.sector1.comienzo.consultas.lugar}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-green-300 p-2  gap-4">
            <div className=" bg-violet-300 p-2 flex">
              <div className="bg-amber-300 p-2 w-1/2">
                <img
                  src={dataInfoJSON.sector2.horarios.src}
                  alt={dataInfoJSON.sector2.horarios.alt}
                  title={dataInfoJSON.sector2.horarios.title}
                />
              </div>
              <div className="w-1/2 bg-red-300 p-2">
                <img
                  className="h-full"
                  src={dataInfoJSON.sector2.cronograma.src}
                  alt={dataInfoJSON.sector2.cronograma.alt}
                  title={dataInfoJSON.sector2.cronograma.title}
                />
              </div>
            </div>
            <div className="bg-amber-300 p-2 mt-2">
              Talleres
              <div className="bg-green-200 flex  gap-2 justify-between p-2">
                <div className="bg-cyan-300 p-2 gap-2 flex flex-col w-1/2">
                  <div className="bg-pink-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.obligatoriedad}
                  </div>
                  <div className="bg-pink-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.presencialidad}
                  </div>
                  <div className="bg-pink-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.totalTalleres}
                  </div>
                  <div className="bg-pink-200 p-2">
                    {
                      dataInfoJSON.sector2.talleres.informacion
                        .GananciaEvaluacion
                    }
                  </div>
                  <div className="bg-pink-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.puntajeMaximo}
                  </div>
                </div>
                <div className="bg-cyan-300 p-2 flex  flex-wrap justify-evenly gap-2 w-1/2">
                  <div className="bg-pink-200 justify-center p-2 w-40 flex flex-col items-center text-center">
                    Grupo 1{" "}
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo1.dia}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo1.horario}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo1.lugar}
                    </span>
                  </div>
                  <div className="bg-pink-200 justify-center p-2 w-40 flex flex-col items-center text-center">
                    Grupo 2{" "}
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo2.dia}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo2.horario}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo2.lugar}
                    </span>
                  </div>
                  <div className="bg-pink-200 justify-center p-2 w-40 flex flex-col items-center text-center">
                    Grupo 3{" "}
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo3.dia}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo3.horario}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo3.lugar}
                    </span>
                  </div>
                  <div className="bg-pink-200 justify-center p-2 w-40 flex flex-col items-center text-center">
                    Grupo 4{" "}
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo4.dia}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo4.horario}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo4.lugar}
                    </span>
                  </div>
                  <div className="bg-pink-200 justify-center p-2 w-40 flex flex-col items-center text-center">
                    Grupo 5{" "}
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo5.dia}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo5.horario}
                    </span>
                    <span>
                      {dataInfoJSON.sector2.talleres.grupos.grupo5.lugar}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-green-300 p-2 flex gap-4">
            <div className="w-100 bg-red-300 flex flex-col p-2 gap-2">
              <div className="bg-cyan-100 p-2 ">
                <span>Informacion general del curso.</span>
                <ul>
                  <li>
                    <a
                      href={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaAsignatura.href
                      }
                      download={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaAsignatura.download
                      }
                    >
                      {
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaAsignatura.nombre
                      }
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaCurso.href
                      }
                      download={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaCurso.download
                      }
                    >
                      {
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.programaCurso.nombre
                      }
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.estructuraCurso.href
                      }
                      download={
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.estructuraCurso.download
                      }
                    >
                      {
                        dataInfoJSON.sector3.descargables
                          .informacionGeneralCurso.estructuraCurso.nombre
                      }
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-cyan-100 p-2 ">
                <span>Link y Material de interes.</span>
                <div>
                  <a
                    href={
                      dataInfoJSON.sector3.descargables.linkMaterialInteres
                        .resumenFormulas.href
                    }
                    // download={
                    //   dataInfoJSON.sector3.descargables.linkMaterialInteres
                    //     .resumenFormulas.download
                    // }
                    target="_blank"
                  >
                    {
                      dataInfoJSON.sector3.descargables.linkMaterialInteres
                        .resumenFormulas.nombre
                    }
                  </a>
                </div>
                <div className="flex flex-col ">
                  <span>Webs de simulaciones:</span>
                  <ul>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web1.href
                        }
                        title={
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web1.title
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web1.nombre
                        }
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web2.href
                        }
                        title={
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web2.title
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.linkMaterialInteres
                            .webSimulaciones.web2.nombre
                        }
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-100 p-2 ">
                <span>Material adicional</span>
                <div>
                  <span>Repartidos de trabajo adicionales</span>
                  <ul>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.cinematicaDinamica.href
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.cinematicaDinamica.nombre
                        }
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.trabajoEnergia.href
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.trabajoEnergia.nombre
                        }
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.CantidadMovimientoLineal.href
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.CantidadMovimientoLineal.nombre
                        }
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.oscilaciones.href
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.oscilaciones.nombre
                        }
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.rigidosMomentoAngular.href
                        }
                        target="_blank"
                      >
                        {
                          dataInfoJSON.sector3.descargables.materialAdicional
                            .tutorias.rigidosMomentoAngular.nombre
                        }
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full bg-red-300 p-2  flex gap-2 ">
              <div className="w-100 flex flex-col justify-between">
                <div className="h-50 bg-cyan-100 gap-2 ">
                  <span>Resultado del Curso Fisica 101</span>
                  <div>
                    <a
                      href={dataInfoJSON.sector3.cartelera.curso.href}
                      title={dataInfoJSON.sector3.cartelera.curso.title}
                      target="_blank"
                    >
                      {dataInfoJSON.sector3.cartelera.curso.nombre}
                    </a>
                  </div>
                </div>
                <div className="h-full bg-cyan-100 gap-2 mt-2 ">
                  <span>{dataInfoJSON.sector3.cartelera.avisos}</span>
                </div>
              </div>
              <div className="w-full bg-amber-200 flex flex-col justify-betwee gap-2">
                <div className=" flex justify-evenly bg-cyan-100 gap-2 ">
                  <div className="gap-2 p-2 w-150 bg-pink-700 flex flex-col">
                    <span>1er Parcial</span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.lugar
                          }
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resolucion: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resolucion.href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resolucion.title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resolucion.nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resultado: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resultado.href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resultado.title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.parciales
                                .primerParcial.resultado.nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Muestra:</span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.muestra.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.muestra.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.muestra.lugar
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-700 w-200  p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta1.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta1.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta1.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta2.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta2.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta2.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta3.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta3.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta3.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta4.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta4.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .primerParcial.consulta.consulta4.lugar
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-evenly bg-cyan-100 gap-2 ">
                  <div className="gap-2 p-2 w-150 bg-pink-700 flex flex-col">
                    <span>2do Parcial</span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.lugar
                          }
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resolucion: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resolucion.href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resolucion.title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resolucion.nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resultado: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resultado.href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resultado.title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.parciales
                                .segundoParcial.resultado.nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Muestra:</span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.muestra.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.muestra.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.muestra.lugar
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-700 w-200  p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta1.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta1.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta1.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta2.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta2.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta2.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta3.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta3.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta3.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta4.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta4.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.parciales
                              .segundoParcial.consulta.consulta4.lugar
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-evenly bg-cyan-100 gap-2 ">
                  <div className="gap-2 p-2 w-150 bg-pink-700 flex flex-col">
                    <span>
                      Examen periodo{" "}
                      {dataInfoJSON.sector3.cartelera.examen.periodo}
                    </span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>
                          {dataInfoJSON.sector3.cartelera.examen.fecha}
                        </span>
                        <span>
                          {dataInfoJSON.sector3.cartelera.examen.horario}
                        </span>
                        <span>
                          {dataInfoJSON.sector3.cartelera.examen.lugar}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resolucion: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.examen.resolucion
                                .href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.examen.resolucion
                                .title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.examen.resolucion
                                .nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Resultado: </span>
                        <span>
                          <a
                            href={
                              dataInfoJSON.sector3.cartelera.examen.resultado
                                .href
                            }
                            title={
                              dataInfoJSON.sector3.cartelera.examen.resultado
                                .title
                            }
                            target="_blank"
                          >
                            {
                              dataInfoJSON.sector3.cartelera.examen.resultado
                                .nombre
                            }
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 p-2 bg-pink-400 w-50">
                        <span>Muestra:</span>
                        <span>
                          {dataInfoJSON.sector3.cartelera.examen.muestra.fecha}
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.muestra
                              .horario
                          }
                        </span>
                        <span>
                          {dataInfoJSON.sector3.cartelera.examen.muestra.lugar}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-700 w-200  p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta1.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta1.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta1.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta2.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta2.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta2.lugar
                          }
                        </span>
                      </div>
                      <div className="bg-amber-100 flex flex-col gap-2 p-2 w-50">
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta3.fecha
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta3.horario
                          }
                        </span>
                        <span>
                          {
                            dataInfoJSON.sector3.cartelera.examen.consulta
                              .consulta3.lugar
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Information;
