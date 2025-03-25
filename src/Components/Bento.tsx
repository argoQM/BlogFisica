function Bento() {
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
        <div className="max-w-300 w-full mx-auto min-h-150 max-h-150 flex flex-wrap border-2 rounded-tl-3xl rounded-br-3xl box-border p-4 m-4 bg-blue-200">
          <div className="w-1/2 bg-yellow-300 p-4 rounded-tl-3xl rounded-br-3xl">
            {this.resumen}
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <iframe
              className="aspect-video w-full"
              src={this.video[0]}
              title={this.video[1]}
              // frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/2  flex justify-center items-center flex-wrap">
            <img
              src={this.imagenes[0]}
              alt={this.imagenes[1]}
              title={this.imagenes[2]}
            />
          </div>
          <div className="w-1/2 bg-yellow-300 p-4 rounded-tl-3xl rounded-br-3xl">
            {this.ecuaciones}
          </div>
        </div>
      );
    }
  }

  const informacion: string[][] = [
    [
      "Aqui va el contenido del resumen del video1",
      "https://www.youtube.com/embed/s9QDGv9H9jQ?list=PLUofhDIg_38oPjHgzSf8UfYtIuE5T1wdm",
      "TYPESCRIPT - Aprendiendo desde CERO con curso oficial de Microsoft",
      "public/vite.svg",
      "alt de la imagen1",
      "titulo de la imagen1",
      "Ecuaciones1",
      "video1",
    ],
    [
      "Aqui va el contenido del resumen del video2",
      "https://www.youtube.com/embed/rEwEa6NXSb8?list=PLT1BRNHVBeMLBXDXQTFptuChaVMsY-Sdw",
      "APOKI (아뽀키) - ‘Super Duper Ride’ Official MV",
      "public/vite.svg",
      "alt de la imagen2",
      "titulo de la imagen2",
      "Ecuaciones2",
      "video2",
    ],
    [
      "Aqui va el contenido del resumen del video3",
      "https://www.youtube.com/embed/QrYFF5W-Qak?list=PLT1BRNHVBeMLBXDXQTFptuChaVMsY-Sdw",
      "APOKI (아뽀키) - ‘Nu Boo (feat. SOMIN of KARD)’ Official MV",
      "public/vite.svg",
      "alt de la imagen3",
      "titulo de la imagen3",
      "Ecuaciones3",
      "video3",
    ],
    [
      "Aqui va el contenido del resumen del video4",
      "https://www.youtube.com/embed/6lRUL3GMnUI?list=PLT1BRNHVBeMLBXDXQTFptuChaVMsY-Sdw",
      "APOKI 아뽀키 &#39;GET IT OUT&#39; MV",
      "public/vite.svg",
      "alt de la imagen4",
      "titulo de la imagen4",
      "Ecuaciones4",
      "video4",
    ],
  ];

  function elContenido(): any {
    let info: any = [];
    for (let i: number = 0; i < informacion.length; i++) {
      const contenido = new Contenido(
        informacion[i][0],
        [informacion[i][1], informacion[i][2]],
        [informacion[i][3], informacion[i][4], informacion[i][5]],
        informacion[i][6]
      );
      info.push(contenido.mostrarContenido());
    }
    return info;
  }

  return <>{elContenido()}</>;
}

export default Bento;
