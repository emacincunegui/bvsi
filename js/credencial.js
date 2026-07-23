document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       DATOS DE PRUEBA

       Más adelante este objeto será reemplazado por los datos
       obtenidos desde Supabase.
       ===================================================== */

    const integrante = {
        nombre: 'Apellido Nombre',
        jerarquia: 'Jerarquia',
        funcion: 'Cargo',
        lp: '24 / 000',
        dependencia: 'Dependencia', 
        estadoCredencial: 'revision', /*Opciones: vigente, revision, inhabilitada , falta baja*/

        foto: '../../assets/credenciales/fotos/template.jpg',

        insigniaJerarquia:
            '../../assets/credenciales/jerarquias/ayudante principal.png',

        dni: '00.000.000',
        grupoSanguineo: 'A+',
        domicilio: 'Av. Santa Fe 650, Acassuso',
        transporte: 'Vehículo particular',
        telefono: '11 4747-8927',

        especialidades: [
            {
                nombre: 'Rescate Acuático',
                escudo:
                    '../../assets/credenciales/divisiones/acuatico.png'
            },
            {
                nombre: 'Busqueda y Rescate en Estructuras Colapsadas',
                escudo:
                    '../../assets/credenciales/divisiones/brec.png'
            },
            {
                nombre: 'Buceo',
                escudo:
                    '../../assets/credenciales/divisiones/buceo.png'
            },
            {
                nombre: 'Chofer de Vehículos de Emergencia',
                escudo:
                    '../../assets/credenciales/divisiones/chofer.png'
            },
            {
                nombre: 'Rescate con Cuerdas',
                escudo:
                    '../../assets/credenciales/divisiones/cuerdas.png'
            },
            {
                nombre: 'Brigadista Forestal',
                escudo:
                    '../../assets/credenciales/divisiones/forestal.png'
            },
            {
                nombre: 'HAZ MAT',
                escudo:
                    '../../assets/credenciales/divisiones/hazmat.png'
            },
            {
                nombre: 'Psicología de la Emergencia',
                escudo:
                    '../../assets/credenciales/divisiones/psicologia.png'
            },
            {
                nombre: 'USAR (Urban Search and Rescue)',
                escudo:
                    '../../assets/credenciales/divisiones/usar.png'
            },
            {
                nombre: 'Rescate Vehicular',
                escudo:
                    '../../assets/credenciales/divisiones/vehicular.png'
            }
        ]
    };


    /* =====================================================
       REFERENCIAS DEL HTML
       ===================================================== */

    const elementos = {
        foto: document.getElementById('foto-integrante'),

        contenedorInsignia:
            document.getElementById('contenedor-jerarquia-imagen'),

        insignia:
            document.getElementById('imagen-jerarquia'),

        nombre:
            document.getElementById('nombre-integrante'),

        jerarquia:
            document.getElementById('jerarquia-integrante'),

        bloqueFuncion:
            document.getElementById('bloque-funcion-integrante'),

        funcion:
            document.getElementById('funcion-integrante'),

        lp:
            document.getElementById('legajo-integrante'),

        dependencia:
            document.getElementById('dependencia-integrante'),

        estadoCredencial:
            document.getElementById('estado-credencial'),

        dni:
            document.getElementById('dni-integrante'),

        grupoSanguineo:
            document.getElementById('grupo-sanguineo-integrante'),

        domicilio:
            document.getElementById('domicilio-integrante'),

        transporte:
            document.getElementById('transporte-integrante'),

        telefono:
            document.getElementById('telefono-integrante'),

        seccionEspecialidades:
            document.getElementById('seccion-especialidades'),

        listaEspecialidades:
            document.getElementById('lista-especialidades')
    };


    /* =====================================================
       CARGA DE DATOS PRINCIPALES
       ===================================================== */

    function cargarDatosIntegrante(datos) {

        elementos.nombre.textContent =
            datos.nombre || 'Nombre no disponible';

        elementos.jerarquia.textContent =
            datos.jerarquia || 'Bombero';

        elementos.lp.textContent =
            datos.lp || 'Sin asignar';

        elementos.dependencia.textContent =
            datos.dependencia || 'Dependencia no informada';

        cargarEstadoCredencial(datos.estadoCredencial);

        elementos.dni.textContent =
            datos.dni || 'No informado';

        elementos.dni.textContent =
            datos.dni || 'No informado';

        elementos.grupoSanguineo.textContent =
            datos.grupoSanguineo || 'No informado';

        elementos.domicilio.textContent =
            datos.domicilio || 'No informado';

        elementos.transporte.textContent =
            datos.transporte || 'No informado';

        elementos.telefono.textContent =
            datos.telefono || 'No informado';

        cargarFoto(datos);
        cargarInsignia(datos);
        cargarTelefono(datos.telefono);
        cargarEspecialidades(datos.especialidades);
        cargarFuncion(datos.funcion);
    }


    /* =====================================================
       FOTO
       ===================================================== */

    function cargarFoto(datos) {
        if (!datos.foto) {
            elementos.foto.src =
                '../../assets/credenciales/fotos/template.jpg';

            elementos.foto.alt =
                'Foto no disponible';

            return;
        }

        elementos.foto.src = datos.foto;
        elementos.foto.alt = `Foto de ${datos.nombre}`;

        elementos.foto.addEventListener(
            'error',
            () => {
                elementos.foto.src =
                    '../../assets/credenciales/fotos/template.jpg';

                elementos.foto.alt =
                    'Foto no disponible';
            },
            { once: true }
        );
    }


    /* =====================================================
       INSIGNIA DE JERARQUÍA

       Un bombero sin jerarquía no debe mostrar insignia.
       ===================================================== */

    function cargarInsignia(datos) {
        if (!datos.insigniaJerarquia) {
            elementos.contenedorInsignia.hidden = true;
            elementos.insignia.removeAttribute('src');
            elementos.insignia.alt = '';
            return;
        }

        elementos.contenedorInsignia.hidden = false;
        elementos.insignia.src = datos.insigniaJerarquia;
        elementos.insignia.alt =
            `Insignia de ${datos.jerarquia}`;

        elementos.insignia.addEventListener(
            'error',
            () => {
                elementos.contenedorInsignia.hidden = true;
            },
            { once: true }
        );
    }

    /* =====================================================
       Funcion / Cargo

      El componente que no tiene cargo no debe mostrar nada.
       ===================================================== */

    function cargarFuncion(funcion) {
        if (!funcion || funcion.trim() === '') {
            elementos.bloqueFuncion.hidden = true;
            elementos.funcion.textContent = '';
            return;
        }

        elementos.bloqueFuncion.hidden = false;
        elementos.funcion.textContent = funcion;
    }

    /* =====================================================
       TELEFONO (HABILITA LLAMADA)
       ===================================================== */

    function cargarTelefono(telefono) {
        if (!telefono) {
            elementos.telefono.textContent = 'No informado';
            elementos.telefono.removeAttribute('href');
            return;
        }

        elementos.telefono.textContent = telefono;

        const numeroLimpio = telefono.replace(/\D/g, '');

        elementos.telefono.href = `tel:${numeroLimpio}`;
    }


    /* =====================================================
       ESPECIALIDADES
       ===================================================== */

    function cargarEspecialidades(especialidades) {
        elementos.listaEspecialidades.innerHTML = '';

        if (
            !Array.isArray(especialidades) ||
            especialidades.length === 0
        ) {
            elementos.seccionEspecialidades.hidden = true;
            return;
        }

        elementos.seccionEspecialidades.hidden = false;

        especialidades.forEach((especialidad) => {
            const tarjeta =
                document.createElement('article');

            tarjeta.className =
                'credential-specialty';

            const imagen =
                document.createElement('img');

            imagen.src = especialidad.escudo;
            imagen.alt =
                `Escudo de ${especialidad.nombre}`;

            imagen.loading = 'lazy';

            imagen.addEventListener(
                'error',
                () => {
                    imagen.style.visibility = 'hidden';
                },
                { once: true }
            );

            const nombre =
                document.createElement('span');

            nombre.textContent =
                especialidad.nombre;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(nombre);

            elementos.listaEspecialidades.appendChild(
                tarjeta
            );
        });
    }


    /* =====================================================
       MENÚ HAMBURGUESA
       ===================================================== */

    const menuToggle =
        document.querySelector('.menu-toggle');

    const mainNav =
        document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const menuAbierto =
                mainNav.classList.toggle('is-open');

            menuToggle.setAttribute(
                'aria-expanded',
                String(menuAbierto)
            );

            menuToggle.textContent =
                menuAbierto ? '✕' : '☰';
        });

        document.addEventListener('click', (evento) => {
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

                menuToggle.textContent = '☰';
            }
        });
    }


    /* =====================================================
       INICIO
       ===================================================== */
    function cargarEstadoCredencial(estado) {
        const estados = {
            vigente: {
                texto: 'CREDENCIAL VIGENTE',
                clase: 'is-valid'
            },

            revision: {
                texto: 'CREDENCIAL EN REVISIÓN',
                clase: 'is-warning'
            },

            inhabilitada: {
                texto: 'CREDENCIAL INHABILITADA',
                clase: 'is-invalid'
            }
        };

        const estadoSeleccionado = estados[estado];

        if (!estadoSeleccionado) {
            elementos.estadoCredencial.hidden = true;
            elementos.estadoCredencial.textContent = '';
            return;
        }

        elementos.estadoCredencial.hidden = false;

        elementos.estadoCredencial.className =
            `credential-status ${estadoSeleccionado.clase}`;

        elementos.estadoCredencial.textContent =
            estadoSeleccionado.texto;
    }


    cargarDatosIntegrante(integrante);

    console.log('Datos cargados:', integrante);
    console.log('Elemento foto:', elementos.foto);
    console.log('Lista especialidades:', elementos.listaEspecialidades);

});