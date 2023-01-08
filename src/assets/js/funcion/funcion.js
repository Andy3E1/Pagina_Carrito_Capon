const { ContentChild } = require("@angular/core");
const { withDebugTracing } = require("@angular/router");

function funcion () {


document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'BENGOO Ratón',
            precio: 1,
           imagen:'https://m.media-amazon.com/images/I/41r2kRbnXoL._SL500_.jpg'
    

        },
        {
            id: 2,
            nombre: 'GAMING MOUSE',
            precio: 1.2,
            imagen: 'https://m.media-amazon.com/images/I/61lCLrCtuhL.jpg'
        },
        {
            id: 3, 
            nombre: 'MOUSE M422 ',
            precio: 2.1,
            imagen: 'https://s3.amazonaws.com/imagenes.toners.ec/wp-content/uploads/2020/03/16094215/m422.jpg'
        },
        {
            id: 4,
            nombre: 'Teclado mecánico para juegos ONE-UP G300',
            precio: 0.6,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71cdho+dabL._AC_SL1500_.jpg'
        },
        {
            id: 5,
            nombre: 'Teclado mecánico para juegos ONE-UP G300 ',
            precio: 1.2,
            imagen: 'https://m.media-amazon.com/images/I/71TyGobdfQL._AC_SL1500_.jpg'
        },
        {
            id: 6,
            nombre: 'Teclado para juegos Razer Huntsman Mini 60%',
            precio: 2.1,
            imagen: 'http://havit.ec/wp-content/uploads/2017/08/CP-NACEBTECHNOLOGY-NA-635.jpg'
        },
        {
            id: 7,
            nombre: 'Dron E88',
            precio: 0.6,
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_912211-MEC52723170912_122022-O.webp'
        },
        {
            id: 8,
            nombre: 'Drone 998',
            precio: 0.6,
            imagen: 'https://tecnicomfenix.com/wp-content/uploads/2022/04/DRONE-ESTUCHE5.jpg'
        },
        {
            id: 9,
            nombre: 'Dron de Loolinn ',
            precio: 1.2,
            imagen: 'https://7mejor.top/wp-content/uploads/2022/10/Loolinn.jpg'
        },
        {
            id: 10,
            nombre: 'Samsung Galaxy S22 ',
            precio: 2.1,
            imagen: 'https://mobilestore.ec/wp-content/uploads/2022/02/Samsung-Galaxy-S22-Verde-Mobile-Store-Ecuador.jpg'
        },
        {
            id: 11,
            nombre: 'Samsung Galaxy A33 5G',
            precio: 0.6,
            imagen: 'https://mobilestore.ec/wp-content/uploads/2022/05/Galaxy-A33-5G-Azul-Mobile-Store-Ecuador.jpg'
        },
        {
            id: 12,
            nombre: 'Xiaomi Redmi Note',
            precio: 1.2,
            imagen: 'https://mobilestore.ec/wp-content/uploads/2021/04/Redmi-Note-10-Pro-Azul-Mobile-Store-Ecuador.jpg'
        },
        {
            id: 13,
            nombre: 'Cámara VEMONT 1080P',
            precio: 2.1,
            imagen: 'https://m.media-amazon.com/images/I/618N0bCuAmL._AC_SL1000_.jpg'
        },
        {
            id: 14,
            nombre: 'Cámara de acción HD',
            precio: 0.6,
            imagen: 'https://m.media-amazon.com/images/I/61Cjxp4S1-L._AC_.jpg'
        },
        {
            id: 15,
            nombre: 'Cámara de acción 4K',
            precio: 1.2,
            imagen: 'https://m.media-amazon.com/images/I/71w+HJbH0sL._AC_SL1500_.jpg'
        },
        {
            id: 16,
            nombre: 'Cámara de SEGURIDAD WIFI',
            precio: 2.1,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51dT-Quc7wL._AC_SL1000_.jpg'
        },
        {
            id: 17,
            nombre: 'Cámara de seguridad para exteriores, WiFi',
            precio: 0.6,
            imagen: 'https://m.media-amazon.com/images/I/712rWrkArWL._AC_SL1500_.jpg'
        },
        {
            id: 18,
            nombre: 'Cámara con luz de seguridad',
            precio: 0.6,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61L6JAnpiSL._AC_SL1500_.jpg'
        },
        {
            id: 19,
            nombre: 'PC de escritorio Dell OptiPlex',
            precio: 1.2,
            imagen: 'https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_SL1500_.jpg'
        },
        {
            id: 20,
            nombre: 'PC Continuum Micro',
            precio: 2.1,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81DsscehkVL._AC_SL1493_.jpg'
        },
        {
            id: 21,
            nombre: 'PC Case Gamer, Mid Tower, 2',
            precio: 0.6,
            imagen: 'https://tecnogame.ec/wp-content/uploads/2023/01/Gamemax-Elysium.jpg.webp'
        }


    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title' );
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Añadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');

            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa} -${miItem[0].imagen} `;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
       // Renderizamos el precio total en el HTML
       DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
  })};