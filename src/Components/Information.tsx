import Header from "./Header";
import datos from "./informacionCursoFisica101.json";
import Seccion1 from "./Seccion1";
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
  const objetivos: string = dataInfoJSON.sector1.caracterObjetivos;
  const comienzo: string = dataInfoJSON.sector1.comienzo.fecha;
  const teoricoDias: string = dataInfoJSON.sector1.comienzo.teorico.dias;
  const teoricoHorario: string = dataInfoJSON.sector1.comienzo.teorico.horario;
  const teoricoLugar: string = dataInfoJSON.sector1.comienzo.teorico.lugar;
  const practico: string = dataInfoJSON.sector1.comienzo.practico;
  const talleres: string = dataInfoJSON.sector1.comienzo.talleres;
  const consultasHorario: string =
    dataInfoJSON.sector1.comienzo.consultas.horario;
  const consultasLugar: string = dataInfoJSON.sector1.comienzo.consultas.lugar;
  return (
    <div id="arriba" className="max-w-300 flex mx-auto  flex-col bg-slate-950">
      <Header />
      <main>
        <header>
          <h1 className="text-5xl font-bold my-4 flex justify-center items-center  text-white">
            Fisica 101
          </h1>
        </header>
        <div className="p-4">
          <Seccion1
            objetivos={objetivos}
            comienzo={comienzo}
            teoricoDias={teoricoDias}
            teoricoHorario={teoricoHorario}
            teoricoLugar={teoricoLugar}
            practico={practico}
            talleres={talleres}
            consultasHorario={consultasHorario}
            consultasLugar={consultasLugar}
          />

          <div className="mt-4 bg-radial from-slate-900 from-40% to-gray-800  rounded-tl-3xl rounded-br-3xl p-4  gap-4">
            <div className="  p-2 flex gap-4">
              <div className="bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl  p-4 w-1/2">
                <img
                  className="rounded-tl-3xl rounded-br-3xl "
                  src={dataInfoJSON.sector2.horarios.src}
                  alt={dataInfoJSON.sector2.horarios.alt}
                  title={dataInfoJSON.sector2.horarios.title}
                />
              </div>
              <div className="w-1/2  p-4 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl ">
                <img
                  className="h-full rounded-tl-3xl rounded-br-3xl "
                  src={dataInfoJSON.sector2.cronograma.src}
                  alt={dataInfoJSON.sector2.cronograma.alt}
                  title={dataInfoJSON.sector2.cronograma.title}
                />
              </div>
            </div>
            <div className=" bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl p-2 mt-2">
              <span className="text-white">Talleres</span>
              <div className=" flex  gap-2 justify-between p-2">
                <div className=" p-2 gap-2 flex flex-col w-1/2">
                  <div className="bg-orange-200 p-2 rounded-tl-3xl">
                    {dataInfoJSON.sector2.talleres.informacion.obligatoriedad}
                  </div>
                  <div className="bg-orange-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.presencialidad}
                  </div>
                  <div className="bg-orange-200 p-2">
                    {dataInfoJSON.sector2.talleres.informacion.totalTalleres}
                  </div>
                  <div className="bg-orange-200 p-2">
                    {
                      dataInfoJSON.sector2.talleres.informacion
                        .GananciaEvaluacion
                    }
                  </div>
                  <div className="bg-orange-200 p-2 rounded-br-3xl">
                    {dataInfoJSON.sector2.talleres.informacion.puntajeMaximo}
                  </div>
                </div>
                <div className=" p-2 flex  flex-wrap justify-evenly gap-2 w-1/2">
                  <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
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
                  <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
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
                  <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
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
                  <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
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
                  <div className="bg-orange-200 justify-center p-2 w-40 flex flex-col items-center text-center">
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
          <div className="mt-4 bg-radial from-slate-900 from-40% to-gray-800  rounded-tl-3xl rounded-br-3xl p-4 flex gap-4 ">
            <div className="w-100 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl h-125 flex flex-col p-2 gap-2">
              <div className="text-white p-2 ">
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
              <div className="text-white p-2 ">
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
              <div className="text-white p-2 ">
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
            <div className=" bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl rounded-md p-4  flex gap-2 ">
              <div className="min-w-50 flex flex-col gap-8">
                <div className="h-50 bg-white gap-2 p-2 rounded-tl-3xl rounded-br-3xl">
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
                <div className=" bg-white gap-2 mt-2 flex flex-col p-2 rounded-tl-3xl rounded-br-3xl">
                  <span className="text-center">
                    {dataInfoJSON.sector3.cartelera.avisos}
                  </span>
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
                <div className=" flex justify-evenly flex-col max-w-150  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2  ">
                  <div className="gap-2 p-2   flex flex-col">
                    <span>1er Parcial</span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-pink-200 w-50">
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
                  <div className="   p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                <div className=" flex justify-evenly flex-col max-w-150  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2 hidden ">
                  <div className="gap-2 p-2   flex flex-col">
                    <span>2do Parcial</span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-purple-200 w-50">
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
                  <div className="   p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                <div className=" flex justify-evenly flex-col max-w-150  bg-[url(public/Img/corcho.jpg)]  bg-center rounded-md gap-2 hidden ">
                  <div className="gap-2 p-2   flex flex-col">
                    <span>
                      Examen periodo
                      {dataInfoJSON.sector3.cartelera.examen.periodo}
                    </span>
                    <div className="flex gap-2 p-2 flex-wrap justify-evenly">
                      <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
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
                      <div className="flex flex-col gap-2 p-2 bg-violet-200 w-50">
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
                  <div className="  p-2">
                    <span>Consultas</span>
                    <div className="flex  gap-2 p-2 flex-wrap justify-evenly">
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
                      <div className="bg-yellow-200 flex flex-col gap-2 p-2 w-50">
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
    </div>
  );
}

export default Information;
