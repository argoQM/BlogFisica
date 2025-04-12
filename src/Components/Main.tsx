import Bento from "./Bento";
import Seccion1 from "./Seccion1";
import Seccion2 from "./Seccion2";
import Seccion3 from "./Seccion3";

function Main() {
  return (
    <div>
      <main>
        <header>
          <h1 className="text-5xl font-bold my-4 flex justify-center items-center  text-white">
            Fisica 101
          </h1>
        </header>
        <div className="p-4">
          <Seccion1 />
          <Seccion2 />
          <Seccion3 />
          <Bento />
        </div>
      </main>
    </div>
  );
}

export default Main;
