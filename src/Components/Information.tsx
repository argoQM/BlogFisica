import React from "react";
interface infoJson {
  sector1: {
    caracterObjetivos: "";
    comienzo: {
      fecha: "";
      teorico: {
        dias: "";
        lugar: "";
      };
      practico: "";
      talleres: "";
      consultas: {
        horario: "";
        lugar: "";
      };
    };
  };
  sector2: {
    horarios: {
      src: "";
      title: "Horarios";
      alt: "Imagen de los horarios";
    };
    talleres: {
      informacion: {
        obligatoriedad: "";
        presencialidad: "";
        totalTalleres: "";
        GananciaEvaluacion: "";
        puntajeMaximo: "";
      };
      grupos: {
        grupo1: {
          dia: "";
          horario: "";
          lugar: "";
        };
        grupo2: {
          dia: "";
          horario: "";
          lugar: "";
        };
        grupo3: {
          dia: "";
          horario: "";
          lugar: "";
        };
        grupo4: {
          dia: "";
          horario: "";
          lugar: "";
        };
        grupo5: {
          dia: "";
          horario: "";
          lugar: "";
        };
      };
    };
    cronograma: {
      src: "";
      title: "Cronograma";
      alt: "Imagen del cronograma";
    };
  };
  sector3: {
    descargables: {
      informacionCurso: {
        titulo: "";
        programa: {
          label: "";
          src: "";
        };
        estructura: {
          label: "";
          src: "";
        };
      };
      materiales: {
        titulo: "";
        libro: {
          label: "";
          src: "";
        };
        formulas: {
          label: "";
          src: "";
        };
      };
      simulaciones: {
        web1: {
          src: "";
        };
        web2: {
          src: "";
        };
      };
    };
    cartelera: {};
  };
}
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
            <div className="w-1/2 bg-red-300 p-2">Caracter y Objetivos</div>
            <div className="w-1/2 bg-violet-300 p-2">
              <div className="flex justify-around gap-2">
                <div className="bg-amber-300 w-1/2 p-2">Teoricos</div>
                <div className="bg-amber-300 w-1/2 p-2">Practicos</div>
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
