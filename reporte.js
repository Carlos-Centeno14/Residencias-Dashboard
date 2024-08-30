document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#btncrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.querySelector("#prueba");

        html2pdf()
            .set({
                filename: "ReporteArea.pdf",
                image: {
                    type: "pdf",
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2, 
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: "portrait"
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});
