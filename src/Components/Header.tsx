function Header() {
  return (
    <div>
      <header className="flex justify-evenly items-center w-full h-15 bg-radial from-slate-300 from-60% to-gray-800  rounded-tl-3xl rounded-br-3xl text-white">
        <a href="https://detema.fq.edu.uy/" target="_blank">
          <img
            className="h-15"
            src="public/Img/logos/detema.png"
            alt="Logo Detema"
            title="Acceso a www.detema.fq.edu.uy"
          />
        </a>
        <a href="https://www.fq.edu.uy/" target="_blank">
          <img
            className="h-15"
            src="public/Img/logos/Logotipos_Facultad de Quimica_Horizontal reducido_Color_Texto negro.png"
            alt="Logo de Facultad de Quimica"
            title="Acceso a www.fq.edu.uy"
          />
        </a>
        <a
          href="https://moodle3.fq.edu.uy/course/view.php?id=33"
          target="_blank"
        >
          <img
            className="h-15"
            src="public/Img/logos/moodle.png"
            alt="Logo del Moodle"
            title="Acceso a www.moodle3.fq.edu.uy curso de Fisica 101"
          />
        </a>
        <a href="https://udelar.edu.uy/" target="_blank">
          <img
            className="h-15"
            src="public/Img/logos/R.png"
            alt="Logo de UdelaR"
            title="Acceso a www.udelar.edu.uy"
          />
        </a>
      </header>
    </div>
  );
}

export default Header;
