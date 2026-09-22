document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       DATOS DE PRUEBA

       Más adelante este objeto será reemplazado por
       los datos obtenidos desde Supabase.
       ===================================================== */

    const movil = {

        numero: '51',

        denominacion:
            'Autobomba de Primera dotación',

        marca:
            'DAF',

        modelo:
            '65-210',

        anio:
            '1996',

        patente:
            'AB 844 CM',

        dependencia:
            'Cuartel Central',

        uso:
            'Primera Intervención',

        fechaIngreso:
            '15/03/2024',

        combustible:
            'Diésel',

        capacidadAgua:
            '1.500 litros',

        capacidadPersonal:
            '8 personas',

        dimensiones: {

            largo:
                '7,30 m',

            ancho:
                '2,95 m',

            alto:
                '3,40 m'

        },

        /*
            Estados posibles:

            operativo
            fuera_servicio
            baja
        */

        estado:
            'operativo',

        foto:
            '../../assets/moviles/fotos/51.jpg',

        privado: {

            numeroChasis:
                'XLRAE65 NCOE 429502',

            numeroMotor:
                'G-18768',

            vtv: {
                estado: 'Vigente',
                fecha: '01/08/2026'
            },

            aceiteFiltros:
                '27/12/2024',

            aceite:
                '',

            bateria:
                'Adelmo',

            radioVhf:
                'Motorola VHF',

            aceiteHidraulico:
                '',

            correaMotor:
                '',

            correaDistribucion:
                '',

            filtroAire:
                'MANN C 25 860/6',

            filtroCompresor:
                'Volvo 3944785 / Fleetguard AF 4966',

            filtroCombustible:
                'MANN WDK 9140',

            filtroSecadoAire:
                'MANN TB 1374X',

            filtroTrampa:
                '',

            filtroAceite:
                'MANN W 962',

            filtroHidraulico:
                'MANN H 601/4',

            cubiertas:
                '275/70 R 22.5',

            controles: [

                {
                    fecha: '22/09/2026',

                    aceiteMotor: 'Aprobado',

                    refrigerante: 'Aprobado',

                    liquidoHidraulico: 'Aprobado',

                    combustible: '3/4',

                    luces: 'Aprobado',

                    balizasSirena: 'Aprobado',

                    radio: 'Aprobado',

                    observaciones:
                        'Sin novedades.',

                    controladoPor:
                        'Cincunegui Emanuel',

                    supervisadoPor:
                        'Jefatura'
                },

                {
                    fecha: '21/09/2026',

                    aceiteMotor: 'Aprobado',

                    refrigerante: 'Aprobado',

                    liquidoHidraulico: 'Aprobado',

                    combustible: '1/2',

                    luces: 'Aprobado',

                    balizasSirena: 'Aprobado',

                    radio: 'Aprobado',

                    observaciones:
                        'Se recomienda completar combustible.',

                    controladoPor:
                        'Bombero Ejemplo',

                    supervisadoPor:
                        'Jefatura'
                },

                {
                    fecha: '20/09/2026',

                    aceiteMotor: 'Aprobado',

                    refrigerante: 'Aprobado',

                    liquidoHidraulico: 'Aprobado',

                    combustible: 'Reserva',

                    luces: 'Aprobado',

                    balizasSirena: 'No aprobado',

                    radio: 'Aprobado',

                    observaciones:
                        'Unidad con combustible en reserva. Baliza trasera derecha fuera de servicio.',
                }

            ],

            trabajos: [

                {
                    fecha: '07/04/2026',
                    descripcion: 'Se arregla luz barral y baberos'
                },

                {
                    fecha: '28/04/2026',
                    descripcion: 'Se realiza mantenimiento al filtro de aire'
                },

                {
                    fecha: '01/08/2026',
                    descripcion: 'Se lleva la unidad a realizarse la VTV, la misma es aprobada'
                }

            ]

        }

    };


    /* =====================================================
       REFERENCIAS DEL HTML
       ===================================================== */

    const elementos = {

        foto:
            document.getElementById('foto-movil'),

        numero:
            document.getElementById('numero-movil'),

        denominacion:
            document.getElementById('denominacion-movil'),

        dependenciaPrincipal:
            document.getElementById('dependencia-movil'),

        estado:
            document.getElementById('estado-movil'),


        /* Datos generales */

        marca:
            document.getElementById('marca-movil'),

        modelo:
            document.getElementById('modelo-movil'),

        anio:
            document.getElementById('anio-movil'),

        patente:
            document.getElementById('patente-movil'),

        dependencia:
            document.getElementById('dependencia-datos-movil'),

        uso:
            document.getElementById('uso-movil'),

        fechaIngreso:
            document.getElementById('fecha-ingreso-movil'),


        /* Datos técnicos */

        combustible:
            document.getElementById('combustible-movil'),

        filaCapacidadAgua:
            document.getElementById('fila-capacidad-agua'),

        capacidadAgua:
            document.getElementById('capacidad-agua-movil'),

        capacidadPersonal:
            document.getElementById('capacidad-personal-movil'),


        /* Dimensiones */

        largo:
            document.getElementById('largo-movil'),

        ancho:
            document.getElementById('ancho-movil'),

        alto:
            document.getElementById('alto-movil')

    };


    /* =====================================================
       CARGA GENERAL
       ===================================================== */

    function cargarDatosMovil(datos) {

        elementos.numero.textContent =
            `MÓVIL ${datos.numero || 'S/N'}`;

        elementos.denominacion.textContent =
            datos.denominacion || 'Unidad';

        elementos.dependenciaPrincipal.textContent =
            datos.dependencia || 'Dependencia no informada';


        /* Datos generales */

        elementos.marca.textContent =
            datos.marca || 'No informado';

        elementos.modelo.textContent =
            datos.modelo || 'No informado';

        elementos.anio.textContent =
            datos.anio || 'No informado';

        elementos.patente.textContent =
            datos.patente || 'No informado';

        elementos.dependencia.textContent =
            datos.dependencia || 'No informado';

        elementos.uso.textContent =
            datos.uso || 'No informado';

        elementos.fechaIngreso.textContent =
            datos.fechaIngreso || 'No informado';


        /* Datos técnicos */

        elementos.combustible.textContent =
            datos.combustible || 'No informado';

        elementos.capacidadPersonal.textContent =
            datos.capacidadPersonal || 'No informado';


        /* Dimensiones */

        elementos.largo.textContent =
            datos.dimensiones?.largo || 'No informado';

        elementos.ancho.textContent =
            datos.dimensiones?.ancho || 'No informado';

        elementos.alto.textContent =
            datos.dimensiones?.alto || 'No informado';


        cargarFoto(datos);

        cargarCapacidadAgua(
            datos.capacidadAgua
        );

        cargarEstadoMovil(
            datos.estado
        );

    }


    /* =====================================================
       FOTO
       ===================================================== */

    function cargarFoto(datos) {

        if (!datos.foto) {

            elementos.foto.alt =
                'Fotografía no disponible';

            elementos.foto.removeAttribute('src');

            return;
        }


        elementos.foto.src =
            datos.foto;

        elementos.foto.alt =
            `Móvil ${datos.numero} - ${datos.denominacion}`;


        elementos.foto.addEventListener(
            'error',
            () => {

                elementos.foto.removeAttribute('src');

                elementos.foto.alt =
                    'Fotografía no disponible';

            },
            { once: true }
        );

    }


    /* =====================================================
       CAPACIDAD DE AGUA

       Si el móvil no posee tanque,
       la fila directamente no aparece.
       ===================================================== */

    function cargarCapacidadAgua(capacidad) {

        if (
            !capacidad ||
            capacidad.trim() === ''
        ) {

            elementos.filaCapacidadAgua.hidden =
                true;

            elementos.capacidadAgua.textContent =
                '';

            return;

        }


        elementos.filaCapacidadAgua.hidden =
            false;

        elementos.capacidadAgua.textContent =
            capacidad;

    }


    /* =====================================================
       ESTADO DEL MÓVIL
       ===================================================== */

    function cargarEstadoMovil(estado) {

        const estados = {

            operativo: {

                texto:
                    'MÓVIL OPERATIVO',

                clase:
                    'is-operational'

            },


            fuera_servicio: {

                texto:
                    'MÓVIL FUERA DE SERVICIO',

                clase:
                    'is-out-of-service'

            },


            baja: {

                texto:
                    'MÓVIL DADO DE BAJA',

                clase:
                    'is-retired'

            }

        };


        const estadoSeleccionado =
            estados[estado];


        if (!estadoSeleccionado) {

            elementos.estado.hidden =
                true;

            elementos.estado.textContent =
                '';

            return;

        }


        elementos.estado.hidden =
            false;


        elementos.estado.className =
            `credential-status ${estadoSeleccionado.clase}`;


        elementos.estado.textContent =
            estadoSeleccionado.texto;

    }


    /* =====================================================
       MENÚ HAMBURGUESA
       ===================================================== */

    const menuToggle =
        document.querySelector('.menu-toggle');

    const mainNav =
        document.querySelector('.main-nav');


    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            'click',
            () => {

                const menuAbierto =
                    mainNav.classList.toggle('is-open');


                menuToggle.setAttribute(
                    'aria-expanded',
                    String(menuAbierto)
                );


                menuToggle.textContent =
                    menuAbierto ? '✕' : '☰';

            }
        );


        document.addEventListener(
            'click',
            (evento) => {

                const clicDentroDelMenu =
                    mainNav.contains(evento.target);

                const clicEnBoton =
                    menuToggle.contains(evento.target);


                if (
                    !clicDentroDelMenu &&
                    !clicEnBoton &&
                    mainNav.classList.contains('is-open')
                ) {

                    mainNav.classList.remove('is-open');

                    menuToggle.setAttribute(
                        'aria-expanded',
                        'false'
                    );

                    menuToggle.textContent =
                        '☰';

                }

            }
        );

    }

    /* =====================================================
   PLANO DESPLEGABLE
   ===================================================== */

    const planoToggle =
        document.getElementById('plano-toggle');

    const planoContenido =
        document.getElementById('plano-contenido');


    if (planoToggle && planoContenido) {

        planoToggle.addEventListener('click', () => {

            const abierto =
                planoToggle.getAttribute('aria-expanded') === 'true';


            planoToggle.setAttribute(
                'aria-expanded',
                String(!abierto)
            );


            planoContenido.hidden =
                abierto;

        });

    }

    /* =====================================================
   VISOR DE IMÁGENES / LIGHTBOX
   ===================================================== */

    const imagenesPlano =
        document.querySelectorAll('.vehicle-plan-image');

    const lightbox =
        document.getElementById('vehicle-lightbox');

    const lightboxImage =
        document.getElementById('vehicle-lightbox-image');

    const lightboxCaption =
        document.getElementById('vehicle-lightbox-caption');

    const lightboxClose =
        document.getElementById('vehicle-lightbox-close');


    function abrirLightbox(imagen) {

        lightboxImage.src =
            imagen.src;

        lightboxImage.alt =
            imagen.alt;

        lightboxCaption.textContent =
            imagen.alt;

        lightbox.hidden =
            false;

        document.body.style.overflow =
            'hidden';
    }


    function cerrarLightbox() {

        lightbox.hidden =
            true;

        lightboxImage.removeAttribute('src');

        document.body.style.overflow =
            '';
    }


    imagenesPlano.forEach((imagen) => {

        imagen.addEventListener('click', () => {

            abrirLightbox(imagen);

        });

    });


    lightboxClose.addEventListener('click', () => {

        cerrarLightbox();

    });


    lightbox.addEventListener('click', (evento) => {

        if (evento.target === lightbox) {

            cerrarLightbox();

        }

    });


    document.addEventListener('keydown', (evento) => {

        if (
            evento.key === 'Escape' &&
            !lightbox.hidden
        ) {

            cerrarLightbox();

        }

    });

    /* =====================================================
   INVENTARIO
   ===================================================== */

    const inventarioButton =
        document.getElementById('inventario-button');

    if (inventarioButton) {

        inventarioButton.addEventListener(
            'click',
            () => {

                alert('PRÓXIMAMENTE');

            }
        );

    }

    /* =====================================================
   ÁREA PRIVADA
   SOLO MAQUETA - NO ES SEGURIDAD REAL
   ===================================================== */

    const estadoMovil =
        document.getElementById('estado-movil');

    const loginModal =
        document.getElementById('vehicle-login-modal');

    const loginClose =
        document.getElementById('vehicle-login-close');

    const loginForm =
        document.getElementById('vehicle-login-form');

    const loginUser =
        document.getElementById('vehicle-user');

    const loginPassword =
        document.getElementById('vehicle-password');

    const loginError =
        document.getElementById('vehicle-login-error');

    const seccionPrivada =
        document.getElementById('seccion-privada');


    /*
       SOLO PARA LA PRUEBA VISUAL.
       DESPUÉS ESTO SE ELIMINA Y SE USA SUPABASE AUTH.
    */

    const usuarioPrueba =
        'bvsi';

    const passwordPrueba =
        '1234';


    function abrirLogin() {

        loginModal.hidden =
            false;

        loginError.hidden =
            true;

        document.body.style.overflow =
            'hidden';

        loginUser.focus();

    }


    function cerrarLogin() {

        loginModal.hidden =
            true;

        document.body.style.overflow =
            '';

    }


    function mostrarAreaPrivada() {

        const datos =
            movil.privado;

        document.getElementById(
            'privado-numero-chasis'
        ).textContent =
            datos.numeroChasis || 'No informado';


        document.getElementById(
            'privado-numero-motor'
        ).textContent =
            datos.numeroMotor || 'No informado';


        document.getElementById(
            'privado-vtv'
        ).textContent =
            `${datos.vtv.estado} - ${datos.vtv.fecha}`;


        document.getElementById(
            'privado-aceite-filtros'
        ).textContent =
            datos.aceiteFiltros || 'No informado';


        document.getElementById(
            'privado-aceite'
        ).textContent =
            datos.aceite || 'No informado';


        document.getElementById(
            'privado-bateria'
        ).textContent =
            datos.bateria || 'No informado';


        document.getElementById(
            'privado-radio-vhf'
        ).textContent =
            datos.radioVhf || 'No informado';


        document.getElementById(
            'privado-aceite-hidraulico'
        ).textContent =
            datos.aceiteHidraulico || 'No informado';


        document.getElementById(
            'privado-correa-motor'
        ).textContent =
            datos.correaMotor || 'No informado';


        document.getElementById(
            'privado-correa-distribucion'
        ).textContent =
            datos.correaDistribucion || 'No informado';


        document.getElementById(
            'privado-filtro-aire'
        ).textContent =
            datos.filtroAire || 'No informado';


        document.getElementById(
            'privado-filtro-compresor'
        ).textContent =
            datos.filtroCompresor || 'No informado';


        document.getElementById(
            'privado-filtro-combustible'
        ).textContent =
            datos.filtroCombustible || 'No informado';


        document.getElementById(
            'privado-filtro-secado-aire'
        ).textContent =
            datos.filtroSecadoAire || 'No informado';


        document.getElementById(
            'privado-filtro-trampa'
        ).textContent =
            datos.filtroTrampa || 'No informado';


        document.getElementById(
            'privado-filtro-aceite'
        ).textContent =
            datos.filtroAceite || 'No informado';


        document.getElementById(
            'privado-filtro-hidraulico'
        ).textContent =
            datos.filtroHidraulico || 'No informado';


        document.getElementById(
            'privado-cubiertas'
        ).textContent =
            datos.cubiertas || 'No informado';


        cargarControles(
            datos.controles
        );


        cargarTrabajos(
            datos.trabajos
        );


        seccionPrivada.hidden =
            false;


        cerrarLogin();


        seccionPrivada.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

    function crearFilaControl(nombre, estado) {

        let clase =
            'not-checked';

        let texto =
            estado || 'No controlado';


        if (estado === 'Aprobado') {

            clase =
                'approved';

        } else if (estado === 'No aprobado') {

            clase =
                'rejected';

        }


        return `

        <div class="vehicle-check-row">

            <dt>
                ${nombre}
            </dt>

            <dd class="vehicle-check-value ${clase}">
                ${texto}
            </dd>

        </div>

    `;
    }

    function obtenerEstadoCombustible(nivel) {

        /*
            NORMAL:
            Full
            Full -
            3/4
            3/4 -
    
            OBSERVACIÓN:
            1/2
    
            ATENCIÓN:
            1/2 -
            Reserva
        */


        if (nivel === '1/2') {

            return {

                html: `
                <span class="vehicle-check-general-status observation">
                    OBSERVACIÓN
                </span>
            `,

                etiqueta: `
                <span class="vehicle-fuel-status observation">
                    OBSERVACIÓN
                </span>
            `

            };

        }


        if (
            nivel === '1/2 -' ||
            nivel === 'Reserva'
        ) {

            return {

                html: `
                <span class="vehicle-check-general-status attention">
                    ATENCIÓN
                </span>
            `,

                etiqueta: `
                <span class="vehicle-fuel-status attention">
                    ATENCIÓN
                </span>
            `

            };

        }


        return {

            html: `
            <span class="vehicle-check-general-status approved">
                APROBADO
            </span>
        `,

            etiqueta: ''

        };

    }


    function cargarControles(controles) {

        const contenedor =
            document.getElementById(
                'historial-controles'
            );

        contenedor.innerHTML = '';


        if (
            !Array.isArray(controles) ||
            controles.length === 0
        ) {

            contenedor.textContent =
                'No hay controles registrados.';

            return;
        }


        controles.forEach((control) => {

            const tarjeta =
                document.createElement('article');

            tarjeta.className =
                'vehicle-daily-check';


            /* ==============================================
               ESTADO DEL COMBUSTIBLE
               ============================================== */

            const estadoCombustible =
                obtenerEstadoCombustible(
                    control.combustible
                );


            tarjeta.innerHTML = `

            <div class="vehicle-daily-check-header">

                <div>
                    <span class="vehicle-check-label">
                        REVISIÓN DIARIA
                    </span>

                    <strong>
                        ${control.fecha}
                    </strong>
                </div>

                ${estadoCombustible.html}

            </div>


            <dl class="vehicle-check-list">

                ${crearFilaControl(
                'Aceite motor',
                control.aceiteMotor
            )}

                ${crearFilaControl(
                'Refrigerante',
                control.refrigerante
            )}

                ${crearFilaControl(
                'Líquido hidráulico',
                control.liquidoHidraulico
            )}


                <div class="vehicle-check-row">

                    <dt>
                        Combustible
                    </dt>

                    <dd>
                        <strong>
                            ${control.combustible}
                        </strong>

                        ${estadoCombustible.etiqueta}
                    </dd>

                </div>


                ${crearFilaControl(
                'Luces',
                control.luces
            )}

                ${crearFilaControl(
                'Balizas y sirena',
                control.balizasSirena
            )}

                ${crearFilaControl(
                'Radio',
                control.radio
            )}

            </dl>


            <div class="vehicle-check-observations">

                <span>
                    OBSERVACIONES
                </span>

                <p>
                    ${control.observaciones ||
                'Sin observaciones.'}
                </p>

            </div>


          
        `;


            contenedor.appendChild(
                tarjeta
            );

        });

    }


    function cargarTrabajos(trabajos) {

        const contenedor =
            document.getElementById(
                'historial-trabajos'
            );


        contenedor.innerHTML =
            '';


        trabajos
            .slice(0, 3)
            .forEach(
                (trabajo) => {

                    const item =
                        document.createElement('div');


                    item.className =
                        'vehicle-history-item';


                    item.innerHTML = `
                    <span class="vehicle-history-date">
                        ${trabajo.fecha}
                    </span>

                    <span class="vehicle-history-description">
                        ${trabajo.descripcion}
                    </span>
                `;


                    contenedor.appendChild(
                        item
                    );

                }
            );

    }


    /* CLICK EN ESTADO */

    estadoMovil.addEventListener(
        'click',
        () => {

            abrirLogin();

        }
    );


    /* CERRAR */

    loginClose.addEventListener(
        'click',
        cerrarLogin
    );


    loginModal.addEventListener(
        'click',
        (evento) => {

            if (evento.target === loginModal) {
                cerrarLogin();
            }

        }
    );


    /* LOGIN */

    loginForm.addEventListener(
        'submit',
        (evento) => {

            evento.preventDefault();


            if (
                loginUser.value === usuarioPrueba &&
                loginPassword.value === passwordPrueba
            ) {

                loginError.hidden =
                    true;

                mostrarAreaPrivada();

            } else {

                loginError.hidden =
                    false;

            }

        }
    );

    /* =====================================================
       INICIO
       ===================================================== */

    cargarDatosMovil(movil);

    console.log("movil.js cargado correctamente");

});