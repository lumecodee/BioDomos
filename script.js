function moverGaleria(direccion) {

    const galeria = document.getElementById("galeria");

    if (!galeria) {
        return;
    }

    const distancia = galeria.clientWidth * 0.75;

    galeria.scrollBy({
        left: direccion * distancia,
        behavior: "smooth"
    });
}