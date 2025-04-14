import Seccion3Cartelera from "./Seccion3Cartelera";
import Seccion3Descargables from "./Seccion3Descargables";

function Seccion3() {
  return (
    <div id="cartelera" className="mt-4  p-4 flex gap-4  flex-col">
      <Seccion3Cartelera />
      <Seccion3Descargables />
    </div>
  );
}

export default Seccion3;
