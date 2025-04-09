import { useState } from "react";
import data from "./datos.json";

// Clase Contenido
class Contenido {
  resumen: string;
  video: string[];
  imagenes: string[];
  ecuaciones: string;

  constructor(
    resumen: string,
    video: string[],
    imagenes: string[],
    ecuaciones: string
  ) {
    this.resumen = resumen;
    this.video = video;
    this.imagenes = imagenes;
    this.ecuaciones = ecuaciones;
  }

  mostrarContenido() {
    return (
      <div className="max-w-300  mx-auto min-h-150   flex flex-wrap border-2 rounded-tl-3xl rounded-br-3xl box-border p-4 my-4  text-white bg-radial-[at_50%_75%] from-gray-800 via-slate-900 to-gray-700 to-90%">
        {/* Renderiza el HTML del resumen */}
        <div
          className="w-1/2 p-4 rounded-tl-3xl rounded-br-3xl"
          dangerouslySetInnerHTML={{ __html: this.resumen }}
        ></div>
        <div className="w-1/2 flex justify-center items-center">
          <iframe
            className="aspect-video w-full"
            src={this.video[0]}
            title={this.video[1]}
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-wrap">
          <img
            src={this.imagenes[0]}
            alt={this.imagenes[1]}
            title={this.imagenes[2]}
          />
        </div>
        <div
          className="w-1/2"
          dangerouslySetInnerHTML={{ __html: this.ecuaciones }}
        ></div>
      </div>
    );
  }
}

// Define el tipo del JSON para evitar errores en TypeScript
interface DataJSON {
  temas: {
    [key: string]: {
      [key: string]: {
        resumen: string;
        Video: {
          url: string;
          title: string;
        };
        Image: {
          src: string;
          title: string;
          alt: string;
        };
        Ecuaciones: string;
      };
    };
  };

  practico: {
    [key: string]: {
      [key: string]: {
        resumen: string;
        Video: {
          url: string;
          title: string;
        };
        Image: {
          src: string;
          title: string;
          alt: string;
        };
        Ecuaciones: string;
      };
    };
  };
}

// Tipar los datos JSON importados
const jsonData: DataJSON = data;
// Mapeo del JSON a instancias de Contenido
// const contenidos = Object.keys(jsonData.temas).map((key) => {
//   const contenidosTemas = Object.keys(jsonData.temas[key]).map((llave) => {
//     const item = jsonData.temas[key][llave];
//     return new Contenido(
//       item.resumen,
//       [item.Video.url, item.Video.title],
//       [item.Image.src, item.Image.alt, item.Image.title],
//       item.Ecuaciones
//     );
//   });
//   return contenidosTemas;
// });

// Componente principal
function Bento() {
  const [tema, setTema] = useState("Generalidades");

  const contenidos = Object.keys(jsonData.temas[tema]).map((llave) => {
    const item = jsonData.temas[tema][llave];
    return new Contenido(
      item.resumen,
      [item.Video.url, item.Video.title],
      [item.Image.src, item.Image.alt, item.Image.title],
      item.Ecuaciones
    );
  });
  const contenidosP = Object.keys(jsonData.practico[tema]).map((llave) => {
    const item = jsonData.practico[tema][llave];
    return new Contenido(
      item.resumen,
      [item.Video.url, item.Video.title],
      [item.Image.src, item.Image.alt, item.Image.title],
      item.Ecuaciones
    );
  });
  return (
    <>
      <div
        id="contenidoTeorico"
        className="flex justify-around items-center flex-wrap sticky top-0 bg-green-200/30 backdrop-blur-sm max-w-300 mx-auto text-white h-15 p-4 rounded-br-3xl rounded-tl-3xl backdrop-blur-smbackdrop-blur-xs"
      >
        <button onClick={() => setTema("Generalidades")}>Generalidades</button>
        <button onClick={() => setTema("CinematicaDinamica")}>
          Cinematica y Dinamica
        </button>
        <button onClick={() => setTema("TrabajoEnergia")}>
          Trabajo y Energia
        </button>
        <button onClick={() => setTema("CantidadMovimientoLineal")}>
          Cantidad de Movimiento Lineal
        </button>
        <button onClick={() => setTema("Oscilaciones")}>Oscilaciones</button>
        <button onClick={() => setTema("Rigidos")}>Dinamica de Rigidos</button>
        <button onClick={() => setTema("FluidosCalor")}>Fluidos y Calor</button>
        <a
          href="#arriba"
          className="size-8 rounded-full bg-white flex justify-center text-black hover:animate-pulse items-center font-extrabold"
        >
          &#8593;
        </a>
      </div>

      {contenidos.map((contenido, index) => {
        return <div key={index}>{contenido.mostrarContenido()}</div>;
      })}

      <div
        id="contenidoPractico"
        className="flex justify-around items-center flex-wrap sticky top-10 bg-blue-200/30 text-white backdrop-blur-sm max-w-300 mx-auto h-15 p-4 rounded-br-3xl rounded-tl-3xl backdrop-blur-smbackdrop-blur-xs "
      >
        <button onClick={() => setTema("Generalidades")}>Generalidades</button>
        <button onClick={() => setTema("CinematicaDinamica")}>
          Cinematica y Dinamica
        </button>
        <button onClick={() => setTema("TrabajoEnergia")}>
          Trabajo y Energia
        </button>
        <button onClick={() => setTema("CantidadMovimientoLineal")}>
          Cantidad de Movimiento Lineal
        </button>
        <button onClick={() => setTema("Oscilaciones")}>Oscilaciones</button>
        <button onClick={() => setTema("Rigidos")}>Dinamica de Rigidos</button>
        <button onClick={() => setTema("FluidosCalor")}>Fluidos y Calor</button>
        <a
          href="#arriba"
          className="size-8 rounded-full bg-white flex justify-center text-black items-center duration-2000 ease-in-out hover:animate-pulse font-extrabold "
        >
          &#8593;
        </a>
      </div>

      {contenidosP.map((contenido, index) => {
        return <div key={index}>{contenido.mostrarContenido()}</div>;
      })}
    </>
  );
}

export default Bento;
