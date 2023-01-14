function funcion() {//METODO FUNCION
document.addEventListener('DOMContentLoaded', () => {//El método addEventlistener, 
    //es un escuchador que indica al navegador que este atento a la interacción del usuario
    //************************************ */
    // Variables
        let carrito = [];//permite declarar variables limitando su alcance 
    const baseDeDatos = [//Se crea la variable base de datos, donde se almacena las caracteristicas de productos
/*La palabra const especifica que el valor de una variable 
 es constante e indica al compilador que evite que el programador lo modifique.*/
        {
            id: 1,
            nombre: 'BENGOO Ratón',
            precio: 40,
           imagen:'https://m.media-amazon.com/images/I/41r2kRbnXoL._SL500_.jpg'
          

        },
        {
            id: 2,
            nombre: 'GAMING MOUSE',
            precio: 30,
            imagen: 'https://m.media-amazon.com/images/I/61lCLrCtuhL.jpg'
        },
        {
            id: 3, 
            nombre: 'MOUSE M422 ',
            precio: 54,
            imagen: 'https://s3.amazonaws.com/imagenes.toners.ec/wp-content/uploads/2020/03/16094215/m422.jpg'
        },
        {
            id: 4,
            nombre: 'Teclado mecánico para juegos ONE-UP G300',
            precio: 30.5,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71cdho+dabL._AC_SL1500_.jpg'
        },
        {
            id: 5,
            nombre: 'Teclado mecánico para juegos ONE-UP G300 ',
            precio: 10.4,
            imagen: 'https://m.media-amazon.com/images/I/71TyGobdfQL._AC_SL1500_.jpg'
        },
        {
            id: 6,
            nombre: 'Teclado para juegos Razer Huntsman Mini 60%',
            precio: 80,
            imagen: 'http://havit.ec/wp-content/uploads/2017/08/CP-NACEBTECHNOLOGY-NA-635.jpg'
        },
        {
            id: 7,
            nombre: 'Dron E88',
            precio: 500,
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_912211-MEC52723170912_122022-O.webp'
        },
        {
            id: 8,
            nombre: 'Drone 998',
            precio: 180,
            imagen: 'https://tecnicomfenix.com/wp-content/uploads/2022/04/DRONE-ESTUCHE5.jpg'
        },
        {
            id: 9,
            nombre: 'Dron de Loolinn ',
            precio: 740,
            imagen: 'https://7mejor.top/wp-content/uploads/2022/10/Loolinn.jpg'
        },
        {
            id: 10,
            nombre: 'Samsung Galaxy S22 ',
            precio: 800,
            imagen: 'https://mobilestore.ec/wp-content/uploads/2022/02/Samsung-Galaxy-S22-Verde-Mobile-Store-Ecuador.jpg'
        },
        {
            id: 11,
            nombre: 'Samsung Galaxy A33 5G',
            precio: 970,
            imagen: 'https://mobilestore.ec/wp-content/uploads/2022/05/Galaxy-A33-5G-Azul-Mobile-Store-Ecuador.jpg'
        },
        {
            id: 12,
            nombre: 'Xiaomi Redmi Note',
            precio: 450,
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
            precio: 302,
            imagen: 'https://m.media-amazon.com/images/I/61Cjxp4S1-L._AC_.jpg'
        },
        {
            id: 15,
            nombre: 'Cámara de acción 4K',
            precio: 100,
            imagen: 'https://m.media-amazon.com/images/I/71w+HJbH0sL._AC_SL1500_.jpg'
        },
        {
            id: 16,
            nombre: 'Cámara de SEGURIDAD WIFI',
            precio:  100.50,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51dT-Quc7wL._AC_SL1000_.jpg'
        },
        {
            id: 17,
            nombre: 'Cámara de seguridad para exteriores, WiFi',
            precio: 85,
            imagen: 'https://m.media-amazon.com/images/I/712rWrkArWL._AC_SL1500_.jpg'
        },
        {
            id: 18,
            nombre: 'Cámara con luz de seguridad',
            precio: 30,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61L6JAnpiSL._AC_SL1500_.jpg'
        },
        {
            id: 19,
            nombre: 'PC de escritorio Dell OptiPlex',
            precio: 1700,
            imagen: 'https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_SL1500_.jpg'
        },
        {
            id: 20,
            nombre: 'PC Continuum Micro',
            precio: 3000,
            imagen: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81DsscehkVL._AC_SL1493_.jpg'
        },
        {
            id: 21,
            nombre: 'PC Case Gamer, Mid Tower, 2',
            precio: 1800,
            imagen: 'https://tecnogame.ec/wp-content/uploads/2023/01/Gamemax-Elysium.jpg.webp'
        }


    ];

    //al bloque, declaración, o expresión donde se está usando
    const dolar = '$';//Simbolo de Moneda que aparece al lado de los productos
    const El_items = document.querySelector('#items');//Retorna el primer elemento que cumpla con el criterio dado.
     //Puede ser invocada sobre el document o sobre algún elemento.
    const El_carrito = document.querySelector('#carrito');
    const El_total = document.querySelector('#total');
    const El_boton_Vaciar = document.querySelector('#boton-vaciar');

    function anyadirProductoAlCarrito(evento) {//Metodo 
        // Añadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

    }


    function renderizarCarrito() {
        // Vaciamos todo el html
        El_carrito.textContent = '';
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
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${dolar}  `;

            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'Eliminar ❌';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemsdelCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            El_carrito.appendChild(miNodo);
        });
       // Renderizamos el precio total en el HTML
       El_total.textContent = calcularTotal();
    }
 // Funciones
 function renderizarProductos() {
    baseDeDatos.forEach((info) => {//El for each es un bucle que permite recorrer los elementos de id,nombre, precio,imagen
        // Estructura
        const renderizar = document.createElement('div');// Este comando le permite agregar dinámicamente nuevos elementos HTML al DOM usando JavaScript.
        renderizar.classList.add('card', 'col-sm-4');
        //Usar classList es una forma práctica de acceder a la lista de clases de 
        //un elemento como una cadena de texto delimitada por espacios a través de element.
        // Body
        const renderizarCardBody = document.createElement('div');
        renderizarCardBody.classList.add('card-body');
        // Titulo
        const mirenderizarTitle = document.createElement('h5');
        mirenderizarTitle.classList.add('card-title' );
        mirenderizarTitle.textContent = info.nombre;
        // Imagen
        const mirenderizarImagen = document.createElement('img');
        mirenderizarImagen.classList.add('img-fluid');
        mirenderizarImagen.setAttribute('src', info.imagen);
        // Precio
        const mirenderizarPrecio = document.createElement('p');
        mirenderizarPrecio.classList.add('card-text');
        mirenderizarPrecio.textContent = `${info.precio}${dolar}`;
        // Boton 
        const mirenderizarBoton = document.createElement('button');
        mirenderizarBoton.classList.add('btn', 'btn-primary');
        mirenderizarBoton.textContent = 'Añadir ✔️';
        mirenderizarBoton.setAttribute('marcador', info.id);
        mirenderizarBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        renderizarCardBody.appendChild(mirenderizarImagen);
        renderizarCardBody.appendChild(mirenderizarTitle);
        renderizarCardBody.appendChild(mirenderizarPrecio);
        renderizarCardBody.appendChild(mirenderizarBoton);
        renderizar.appendChild(renderizarCardBody);
        El_items.appendChild(renderizar);
    });
}

    function borrarItemsdelCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
    }


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

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    El_boton_Vaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();
    renderizarCarrito();
  })};
  /*Nodo es cada elemento que forma parte de la red de
información y que puede corresponder bien con las definiciones
clásicas de un documento escrito: capítulos, secciones, párrafos, etc; */