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
      <div className="max-w-300 w-full mx-auto min-h-150   flex flex-wrap border-2 rounded-tl-3xl rounded-br-3xl box-border p-4 m-4 bg-blue-200">
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
function Bento2() {
  const [tema, setTema] = useState("TrabajoEnergia");

  const contenidos = Object.keys(jsonData.temas[tema]).map((llave) => {
    const item = jsonData.temas[tema][llave];
    return new Contenido(
      item.resumen,
      [item.Video.url, item.Video.title],
      [item.Image.src, item.Image.alt, item.Image.title],
      item.Ecuaciones
    );
  });
  return (
    <>
      <div className="flex justify-around items-center flex-wrap fixed top-0 bg-white/30 backdrop-blur-sm w-full p-4 rounded-b-3xl backdrop-blur-smbackdrop-blur-xs">
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
      </div>

      {contenidos.map((contenido, index) => {
        return <div key={index}>{contenido.mostrarContenido()}</div>;
      })}
    </>
  );
}

export default Bento2;
