function Bento() {
  return (
    <>
      <div className="max-w-300 w-full mx-auto min-h-150 max-h-150 flex flex-wrap border-2 rounded-tl-3xl rounded-br-3xl box-border p-4  bg-red-200">
        <div className="w-1/2 border-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quasi veniam sapiente accusantium, consequatur, facere officia
          perspiciatis nihil a delectus magnam voluptatum? Laborum perspiciatis,
          voluptatem officiis distinctio omnis magni expedita.
        </div>
        <div className="w-1/2 border-2">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/s9QDGv9H9jQ?list=PLUofhDIg_38oPjHgzSf8UfYtIuE5T1wdm"
            title="TYPESCRIPT - Aprendiendo desde CERO con curso oficial de Microsoft"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-1/2 border-2">Imagenes</div>
        <div className="w-1/2 border-2">Ecuaciones</div>
      </div>
    </>
  );
}

export default Bento;
