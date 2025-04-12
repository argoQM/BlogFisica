import Seccion3Cartelera from "./Seccion3Cartelera";
import Seccion3Descargables from "./Seccion3Descargables";

function Seccion3() {
  return (
    <div id="cartelera" className="mt-4  p-4 flex gap-4  flex-col">
      {/* bg-radial from-slate-900 from-40% to-gray-800  rounded-tl-3xl rounded-br-3xl */}
      <Seccion3Cartelera />
      <Seccion3Descargables />
    </div>
  );
}

export default Seccion3;
