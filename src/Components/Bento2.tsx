import React from "react";
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
}

// Tipar los datos JSON importados
const jsonData: DataJSON = data;

// Mapeo del JSON a instancias de Contenido
const contenidos = Object.keys(jsonData).map((key) => {
  const item = jsonData[key];
  return new Contenido(
    item.resumen,
    [item.Video.url, item.Video.title],
    [item.Image.src, item.Image.alt, item.Image.title],
    item.Ecuaciones
  );
});

// Componente principal
function Bento2() {
  return (
    <div>
      {contenidos.map((contenido, index) => (
        <div key={index}>{contenido.mostrarContenido()}</div>
      ))}
    </div>
  );
}

export default Bento2;
