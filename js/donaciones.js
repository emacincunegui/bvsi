
// ==========================================
// BVSI - DONACIONES
// MODO DEMOSTRACIÓN
// NO PROCESA PAGOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(
        ".donaciones-amount"
    );

    const checkbox = document.getElementById(
        "donacionPersonalizada"
    );

    const customField = document.getElementById(
        "donacionCustomField"
    );

    const customInput = document.getElementById(
        "montoPersonalizado"
    );

    const total = document.getElementById(
        "donacionTotal"
    );

    const continuar = document.getElementById(
        "donacionContinuar"
    );

    const estado = document.getElementById(
        "donacionEstado"
    );

    if (
        !botones.length ||
        !checkbox ||
        !customField ||
        !customInput ||
        !total ||
        !continuar ||
        !estado
    ) {
        return;
    }

    let montoSeleccionado = 5000;

    // FORMATO DE PESOS ARGENTINOS
    const formato = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    });

    // OCULTAR CONFIRMACIÓN ANTERIOR
    function limpiarEstado() {
        estado.textContent = "";
        estado.classList.remove("visible");
    }

    // OBTENER MONTO ACTUAL
    function obtenerMonto() {

        if (checkbox.checked) {

            const valor = customInput.value.trim();

            if (!valor) return 0;

            const numero = Number(valor);

            if (
                !Number.isSafeInteger(numero) ||
                numero < 1 ||
                numero > 100000000
            ) {
                return 0;
            }

            return numero;
        }

        return montoSeleccionado;
    }

    // ACTUALIZAR TOTAL
    function actualizarTotal() {

        const monto = obtenerMonto();

        total.textContent = formato.format(monto);

        continuar.disabled = monto <= 0;

        limpiarEstado();
    }

    // SELECCIÓN DE MONTOS SUGERIDOS
    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            montoSeleccionado = Number(
                boton.dataset.monto
            );

            // Desactivar monto personalizado
            checkbox.checked = false;

            customField.hidden = true;
            customInput.disabled = true;

            // Actualizar botones
            botones.forEach(item => {

                const activo = item === boton;

                item.classList.toggle(
                    "active",
                    activo
                );

                item.setAttribute(
                    "aria-pressed",
                    String(activo)
                );

            });

            actualizarTotal();

        });

    });

    // ACTIVAR MONTO PERSONALIZADO
    checkbox.addEventListener("change", () => {

        const personalizado = checkbox.checked;

        customField.hidden = !personalizado;
        customInput.disabled = !personalizado;

        botones.forEach(boton => {

            const activo =
                !personalizado &&
                Number(boton.dataset.monto) === montoSeleccionado;

            boton.classList.toggle(
                "active",
                activo
            );

            boton.setAttribute(
                "aria-pressed",
                String(activo)
            );

        });

        actualizarTotal();

        if (personalizado) {
            customInput.focus();
        }

    });

    // ACTUALIZAR MONTO AL ESCRIBIR
    customInput.addEventListener(
        "input",
        actualizarTotal
    );

    // BOTÓN DEMOSTRATIVO
    continuar.addEventListener("click", () => {

        const monto = obtenerMonto();

        if (monto <= 0) {
            return;
        }

        estado.textContent =
            "Demostración: seleccionaste un aporte de " +
            formato.format(monto) +
            ". En la versión definitiva continuarías " +
            "con Mercado Pago. No se realizó ningún cobro.";

        estado.classList.add("visible");

    });

    // ESTADO INICIAL
    actualizarTotal();

});
