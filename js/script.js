document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { nombre: 'Martillo de Acero 16oz', precio: 'S/. 15.00', img: 'img/martillo.jpg', cat: 'Manual' },
        { nombre: 'Taladro Percutor 600W', precio: 'S/. 85.00', img: 'img/taladro.jpg', cat: 'Eléctrica' },
        { nombre: 'Juego de Destornilladores (6 pzas)', precio: 'S/. 12.00', img: 'img/destornilladores.jpg', cat: 'Manual' },
        { nombre: 'Amoladora Angular 4.5"', precio: 'S/. 120.00', img: 'img/amoladora.jpg', cat: 'Eléctrica' },
        { nombre: 'Cinta Métrica 5m Profesional', precio: 'S/. 9.50', img: 'img/medicion.jpg', cat: 'Manual' },
        { nombre: 'Sierra Circular 1400W', precio: 'S/. 210.00', img: 'img/sierra.jpg', cat: 'Eléctrica' }
    ];

    const contenedor = document.getElementById('lista-productos');
    const inputBusqueda = document.getElementById('input-busqueda');
    const btnVerTodo = document.getElementById('ver-todo');
    const cartCount = document.getElementById('cart-count');

    // Función para actualizar el contador del carrito
    function actualizarContador() {
        if (cartCount) {
            const productoEnCarrito = localStorage.getItem('productoCarrito');
            if (productoEnCarrito && productoEnCarrito !== 'null' && productoEnCarrito !== 'undefined') {
                cartCount.innerText = '1';
                cartCount.style.background = '#ff8800';
                cartCount.style.color = '#1a1a1a';
            } else {
                cartCount.innerText = '0';
                cartCount.style.background = '#444';
                cartCount.style.color = 'white';
            }
            console.log('Contador actualizado a:', cartCount.innerText);
        }
    }

    // Función para agregar producto al carrito
    function agregarAlCarrito(producto, botonElemento) {
        const itemParaCarrito = {
            nombre: producto.nombre,
            precio: producto.precio,
            img: producto.img,
            fecha: new Date().getTime()
        };
        
        // Guardar en localStorage
        localStorage.setItem('productoCarrito', JSON.stringify(itemParaCarrito));
        
        // Verificar que se guardó
        const verificado = localStorage.getItem('productoCarrito');
        if (verificado) {
            console.log('✅ Producto guardado:', JSON.parse(verificado).nombre);
        } else {
            console.error('❌ Error: No se pudo guardar');
            return false;
        }
        
        // Actualizar contador
        actualizarContador();
        
        // Efecto visual en el botón
        if (botonElemento) {
            const textoOriginal = botonElemento.innerHTML;
            botonElemento.innerHTML = "<i class='bx bx-check'></i> ¡Añadido!";
            botonElemento.style.background = "#2ecc71";
            botonElemento.style.color = "white";
            
            setTimeout(() => {
                botonElemento.innerHTML = textoOriginal;
                botonElemento.style.background = "#222";
                botonElemento.style.color = "white";
            }, 2000);
        }
        
        return true;
    }

    function mostrarProductos(productosAFiltrar, limite = null) {
        if (!contenedor) return;
        contenedor.innerHTML = ''; 

        const listaAMostrar = limite ? productosAFiltrar.slice(0, limite) : productosAFiltrar;

        if (listaAMostrar.length === 0) {
            contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No hay resultados.</p>`;
            return;
        }

        listaAMostrar.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="badge-oferta">Nuevo</div>
                <img src="${prod.img}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200'">
                <h3>${prod.nombre}</h3>
                <p>${prod.precio}</p>
                <button class="btn-agregar" data-nombre="${prod.nombre}" data-precio="${prod.precio}" data-img="${prod.img}">Añadir al carrito</button>
            `;
            
            const botonAgregar = card.querySelector('.btn-agregar');
            botonAgregar.onclick = (e) => {
                e.preventDefault();
                agregarAlCarrito(prod, botonAgregar);
            };

            contenedor.appendChild(card);
        });
    }

    function filtrar() {
        const texto = inputBusqueda.value.toLowerCase().trim();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
        mostrarProductos(filtrados, null); 
    }

    if (btnVerTodo) {
        btnVerTodo.onclick = (e) => {
            e.preventDefault();
            mostrarProductos(productos);
            btnVerTodo.style.display = 'none';
        };
    }

    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', filtrar);
    }

    const btnExplorar = document.getElementById('btn-explorar');
    if (btnExplorar) {
        btnExplorar.onclick = () => {
            document.querySelector('.productos').scrollIntoView({ behavior: 'smooth' });
        };
    }

    // Mostrar productos y actualizar contador
    mostrarProductos(productos, 5);
    actualizarContador();
    
    // Para depuración - mostrar en consola si hay producto guardado
    console.log('Producto en carrito al cargar:', localStorage.getItem('productoCarrito'));
});