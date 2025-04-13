import info from "./Info";
interface Props {
  mostrar: string;
}
const Seccion3CarteleraAvisos: React.FC<Props> = ({ mostrar }) => {
  let aviso = info.sector3.cartelera.avisos;
  const show: string = `${mostrar} flex flex-col`;
  return (
    <div className={show}>
      <div className="gap-2 p-2   flex flex-col ">
        <div className="flex gap-2 p-2 flex-wrap justify-evenly">
          <div className="flex flex-col gap-2 p-2 bg-gray-200 size-50 text-center items-center justify-center text-4xl rounded-xl">
            <div className="size-4 bg-red-700 border-1 border-red-800 rounded-full"></div>
            <span>{aviso}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion3CarteleraAvisos;
