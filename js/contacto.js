
// ==========================================
// BVSI - FORMULARIO DE CONTACTO
// MODO DEMOSTRACIÓN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactoForm");
    const status = document.getElementById("contactoStatus");

    if (!form || !status) return;

    // ======================================
    // SIMULACIÓN DE ENVÍO
    // ======================================

    form.addEventListener("submit", (event) => {

        // Impedir el envío real
        event.preventDefault();

        // Validar campos
        if (!form.reportValidity()) {
            return;
        }

        // Confirmación ilustrativa
        status.textContent =
            "Demostración completada correctamente. " +
            "No se envió ningún mensaje.";

        status.className =
            "contacto-form-status estado-exito";

        // Vaciar el formulario
        form.reset();

    });

    // ======================================
    // OCULTAR CONFIRMACIÓN AL EDITAR
    // ======================================

    form.addEventListener("input", () => {

        status.textContent = "";
        status.className = "contacto-form-status";

    });

    form.addEventListener("change", () => {

        status.textContent = "";
        status.className = "contacto-form-status";

    });

});
