import info from "./Info";

function Seccion3Descargables() {
  return (
    <div className="  flex flex-col p-2 gap-4">
      {/* bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% rounded-tl-3xl rounded-br-3xl */}
      <div className="text-white p-4 text-center  bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% ">
        <span>Informacion general del curso.</span>
        <ul className="flex flex-wrap justify-evenly gap-2 mt-2">
          <li>
            <a
              className="group flex flex-col gap-2"
              href={
                info.sector3.descargables.informacionGeneralCurso
                  .programaAsignatura.href
              }
              // download={
              //   info.sector3.descargables
              //     .informacionGeneralCurso.programaAsignatura.download
              // }
              target="_blank"
            >
              <span className="  p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                {
                  info.sector3.descargables.informacionGeneralCurso
                    .programaAsignatura.nombre
                }
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
              <iframe
                // className="hidden group-hover:flex "
                src={
                  info.sector3.descargables.informacionGeneralCurso
                    .programaAsignatura.href
                }
              ></iframe>
            </a>
          </li>
          <li>
            <a
              className="group flex flex-col gap-2"
              href={
                info.sector3.descargables.informacionGeneralCurso.programaCurso
                  .href
              }
              // download={
              //   info.sector3.descargables
              //     .informacionGeneralCurso.programaCurso.download
              // }
              target="_blank"
            >
              <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                {
                  info.sector3.descargables.informacionGeneralCurso
                    .programaCurso.nombre
                }
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
              <iframe
                // className="hidden group-hover:flex "
                src={
                  info.sector3.descargables.informacionGeneralCurso
                    .programaCurso.href
                }
              ></iframe>
            </a>
          </li>
          <li>
            <a
              className="group flex flex-col gap-2"
              href={
                info.sector3.descargables.informacionGeneralCurso
                  .estructuraCurso.href
              }
              // download={
              //   info.sector3.descargables
              //     .informacionGeneralCurso.estructuraCurso.download
              // }
              target="_blank"
            >
              <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                {
                  info.sector3.descargables.informacionGeneralCurso
                    .estructuraCurso.nombre
                }
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

              <iframe
                // className="hidden group-hover:flex "
                src={
                  info.sector3.descargables.informacionGeneralCurso
                    .estructuraCurso.href
                }
              ></iframe>
            </a>
          </li>
        </ul>
      </div>
      <div className="text-white p-2 ">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="p-4  bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% text-center">
            <span>Material de interes.</span>
            <div className="mt-2">
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.linkMaterialInteres.resumenFormulas
                    .href
                }
                // download={
                //   info.sector3.descargables.linkMaterialInteres
                //     .resumenFormulas.download
                // }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.linkMaterialInteres
                      .resumenFormulas.nombre
                  }
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
                <iframe
                  // className="hidden group-hover:flex "
                  src={
                    info.sector3.descargables.linkMaterialInteres
                      .resumenFormulas.href
                  }
                ></iframe>
              </a>
            </div>
          </div>
          <div className="p-4 bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90%  text-center">
            <span>Webs de simulaciones:</span>
            <div className="flex mt-2">
              <ul className="flex justify-evenly gap-6">
                <li>
                  <a
                    className="group flex flex-col gap-2"
                    href={
                      info.sector3.descargables.linkMaterialInteres
                        .webSimulaciones.web1.href
                    }
                    title={
                      info.sector3.descargables.linkMaterialInteres
                        .webSimulaciones.web1.title
                    }
                    target="_blank"
                  >
                    <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                      {
                        info.sector3.descargables.linkMaterialInteres
                          .webSimulaciones.web1.nombre
                      }
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
                    <iframe
                      src={
                        info.sector3.descargables.linkMaterialInteres
                          .webSimulaciones.web1.href
                      }
                    ></iframe>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex flex-col gap-2"
                    href={
                      info.sector3.descargables.linkMaterialInteres
                        .webSimulaciones.web2.href
                    }
                    title={
                      info.sector3.descargables.linkMaterialInteres
                        .webSimulaciones.web2.title
                    }
                    target="_blank"
                  >
                    <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                      {
                        info.sector3.descargables.linkMaterialInteres
                          .webSimulaciones.web2.nombre
                      }
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
                    <iframe
                      src={
                        info.sector3.descargables.linkMaterialInteres
                          .webSimulaciones.web2.href
                      }
                    ></iframe>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-2 ">
        <div className="p-4 rounded-br-3xl bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90% text-center">
          <span>Repartidos de trabajo adicionales</span>
          <ul className="flex flex-wrap gap-4 justify-evenly mt-2">
            <li>
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.materialAdicional.tutorias
                    .cinematicaDinamica.href
                }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.materialAdicional.tutorias
                      .cinematicaDinamica.nombre
                  }
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
                <iframe
                  src={
                    info.sector3.descargables.materialAdicional.tutorias
                      .cinematicaDinamica.href
                  }
                ></iframe>
              </a>
            </li>
            <li>
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.materialAdicional.tutorias
                    .trabajoEnergia.href
                }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.materialAdicional.tutorias
                      .trabajoEnergia.nombre
                  }
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
                <iframe
                  src={
                    info.sector3.descargables.materialAdicional.tutorias
                      .trabajoEnergia.href
                  }
                ></iframe>
              </a>
            </li>
            <li>
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.materialAdicional.tutorias
                    .CantidadMovimientoLineal.href
                }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.materialAdicional.tutorias
                      .CantidadMovimientoLineal.nombre
                  }
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
                <iframe
                  src={
                    info.sector3.descargables.materialAdicional.tutorias
                      .CantidadMovimientoLineal.href
                  }
                ></iframe>
              </a>
            </li>
            <li>
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.materialAdicional.tutorias
                    .oscilaciones.href
                }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.materialAdicional.tutorias
                      .oscilaciones.nombre
                  }
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
                <iframe
                  src={
                    info.sector3.descargables.materialAdicional.tutorias
                      .oscilaciones.href
                  }
                ></iframe>
              </a>
            </li>
            <li>
              <a
                className="group flex flex-col gap-2"
                href={
                  info.sector3.descargables.materialAdicional.tutorias
                    .rigidosMomentoAngular.href
                }
                target="_blank"
              >
                <span className="p-2 rounded-3xl flex justify-center items-center bg-amber-100 hover:bg-amber-200 text-black">
                  {
                    info.sector3.descargables.materialAdicional.tutorias
                      .rigidosMomentoAngular.nombre
                  }
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
                <iframe
                  src={
                    info.sector3.descargables.materialAdicional.tutorias
                      .rigidosMomentoAngular.href
                  }
                ></iframe>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Seccion3Descargables;
