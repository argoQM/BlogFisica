import datos from "./informacionCursoFisica101.json";
interface InfoJSON {
  sector1: {
    caracterObjetivos: string;
    comienzo: {
      fecha: string;
      teorico: {
        dias: string;
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
      informacionCurso: {
        titulo: string;
        programa: {
          label: string;
          src: string;
        };
        estructura: {
          label: string;
          src: string;
        };
      };
      materiales: {
        titulo: string;
        libro: {
          label: string;
          src: string;
        };
        formulas: {
          label: string;
          src: string;
        };
      };
      simulaciones: {
        web1: {
          src: string;
        };
        web2: {
          src: string;
        };
      };
    };
    cartelera: {};
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
                  className="bg-amber-300 w-1/3 p-2"
                  href="https://nivelacion-fisica101.vercel.app/"
                  target="blank"
                >
                  <div>Nivelacion</div>
                </a>
                <div className="bg-amber-300 w-1/3 p-2">Teoricos</div>
                <div className="bg-amber-300 w-1/3 p-2">Practicos</div>
              </div>
              <div className="bg-amber-300 mt-2 p-2">
                Informacion de comienzo de clases, y lugares de dictado
              </div>
            </div>
          </div>
          <div className="mt-4 bg-green-300 p-2 flex gap-4">
            <div className="w-1/2 bg-violet-300 p-2">
              <div className="bg-amber-300 p-2">Horarios</div>
              <div className="bg-amber-300 p-2 mt-2">Talleres</div>
            </div>
            <div className="w-1/2 bg-red-300 p-2">Cronograma</div>
          </div>
          <div className="mt-4 bg-green-300 p-2 flex gap-4">
            <div className="w-1/2 bg-red-300 p-2">Material descargable</div>
            <div className="w-1/2 bg-red-300 p-2">Cartelera</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Information;
