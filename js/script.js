document.addEventListener('DOMContentLoaded', () => {
    // 1. Lista de productos con descripción corta incluida
    const productos = [
        // --- MANUALES (15 productos) ---
        { nombre: 'Martillo de Acero', precio: '$15.00', img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: true, desc: 'Herramienta de impacto para clavar o extraer clavos y golpear piezas.' },
        { nombre: 'Juego de Destornilladores', precio: '$12.00', img: 'https://www.bing.com/th?id=OPHS.UZtxYGrdvNGmTg474C474&o=5&pid=21.1&w=152&h=152&qlt=100&dpr=1&o=2&bw=6&bc=FFFFFF', categoria: 'Manuales', destacado: true, desc: 'Kit de puntas variadas para apretar y aflojar tornillos con precisión.' },
        { nombre: 'Caja de Herramientas', precio: '$45.00', img: 'https://www.bing.com/th?id=OPHS.eyMOFGF9S%2beOxQ474C474&o=5&pid=21.1&w=164&h=164&qlt=100&dpr=1&o=2', categoria: 'Manuales', destacado: true, desc: 'Contenedor robusto para organizar y transportar herramientas de forma segura.' },
        { nombre: 'Llave Inglesa 10"', precio: '$18.00', img: 'https://m.media-amazon.com/images/I/41wQB6UjNaL._AC_SX679_.jpg', categoria: 'Manuales', destacado: false, desc: 'Llave ajustable diseñada para adaptarse a diferentes tamaños de tuercas.' },
        { nombre: 'Serrucho Profesional', precio: '$22.00', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: false, desc: 'Hoja dentada de acero para realizar cortes rápidos en madera.' },
        { nombre: 'Nivel de Burbuja', precio: '$10.00', img: 'https://m.media-amazon.com/images/I/71DqY8AjImL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Instrumento para verificar la horizontalidad y verticalidad de una superficie.' },
        { nombre: 'Cinta Métrica 5m', precio: '$8.00', img: 'https://m.media-amazon.com/images/I/516mVX+RFyL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Cinta flexible graduada para realizar mediciones de longitud exactas.' },
        { nombre: 'Alicate Universal', precio: '$14.00', img: 'https://m.media-amazon.com/images/I/71Q4ngI4kvL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Herramienta versátil para sujetar, doblar o cortar cables y alambres.' },
        { nombre: 'Arco de Sierra', precio: '$16.50', img: 'https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: false, desc: 'Estructura metálica para realizar cortes en metales y plásticos.' },
        { nombre: 'Escuadra Metálica', precio: '$9.00', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: false, desc: 'Pieza en ángulo recto para marcar y verificar esquinas cuadradas.' },
        { nombre: 'Juego de Llaves Allen', precio: '$11.00', img: 'https://m.media-amazon.com/images/I/81Fpec4E0zL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Llaves hexagonales ideales para el montaje de muebles y maquinaria.' },
        { nombre: 'Espátula de Acero', precio: '$5.00', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: false, desc: 'Lámina plana para aplicar masilla o remover restos de pintura.' },
        { nombre: 'Prensa en C', precio: '$13.00', img: 'https://m.media-amazon.com/images/I/61jdAQ8klmL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Herramienta de sujeción para mantener piezas fijas durante el trabajo.' },
        { nombre: 'Cutter Profesional', precio: '$6.00', img: 'https://m.media-amazon.com/images/I/61EK10Pe0kL._AC_UL320_.jpg', categoria: 'Manuales', destacado: false, desc: 'Cuchilla retráctil para realizar cortes precisos en materiales diversos.' },
        { nombre: 'Combo de Cinceles', precio: '$25.00', img: 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?auto=format&fit=crop&q=80&w=400', categoria: 'Manuales', destacado: false, desc: 'Herramientas de corte para tallar madera o trabajar en mampostería.' },

        // --- ELÉCTRICAS (15 productos) ---
        { nombre: 'Taladro Percutor', precio: '$85.00', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: true, desc: 'Máquina eléctrica para perforar superficies duras como concreto y ladrillo.' },
        { nombre: 'Sierra Circular', precio: '$120.00', img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Sierra con disco dentado para cortes rectos y rápidos en tablas de madera.' },
        { nombre: 'Esmeril Angular', precio: '$75.00', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Herramienta para cortar, pulir y desbastar materiales metálicos o piedra.' },
        { nombre: 'Lijadora Orbital', precio: '$55.00', img: 'https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Máquina para pulir y dar acabados finos en superficies de madera.' },
        { nombre: 'Rotomartillo SDS', precio: '$145.00', img: 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Taladro de alta potencia para trabajos pesados en concreto y piedra.' },
        { nombre: 'Atornillador Inalámbrico', precio: '$65.00', img: 'https://m.media-amazon.com/images/I/71-9UR1F2XL._AC_UL320_.jpg', categoria: 'Eléctricas', destacado: false, desc: 'Herramienta portátil a batería para atornillar de forma rápida y cómoda.' },
        { nombre: 'Sierra Caladora', precio: '$70.00', img: 'https://images.unsplash.com/photo-1622044939413-0b829c342434?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Sierra para realizar cortes curvos y calados detallados en madera.' },
        { nombre: 'Cepillo Eléctrico', precio: '$95.00', img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Máquina para rebajar y nivelar madera logrando superficies planas.' },
        { nombre: 'Soldadora Inverter', precio: '$180.00', img: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Equipo de soldadura compacto para unir metales con arco eléctrico.' },
        { nombre: 'Pistola de Calor', precio: '$40.00', img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Emite aire caliente para decapar pintura o moldear plásticos.' },
        { nombre: 'Compresora de Aire', precio: '$210.00', img: 'https://images.unsplash.com/photo-1513467655676-561b7d489a88?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Máquina que genera aire a presión para inflado o uso de herramientas.' },
        { nombre: 'Hidrolavadora 1600W', precio: '$130.00', img: 'https://m.media-amazon.com/images/I/710cavCUkAL._AC_UY218_.jpg', categoria: 'Eléctricas', destacado: false, desc: 'Sistema de limpieza a alta presión para patios, fachadas y autos.' },
        { nombre: 'Ingletadora Telescópica', precio: '$250.00', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Sierra para realizar cortes en ángulos exactos en listones y marcos.' },
        { nombre: 'Fresadora/Router', precio: '$110.00', img: 'https://m.media-amazon.com/images/I/71-vSTIm1ZL._AC_UL320_.jpg', categoria: 'Eléctricas', destacado: false, desc: 'Máquina para realizar ranuras y decoraciones en bordes de madera.' },
        { nombre: 'Multímetro Digital', precio: '$35.00', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', categoria: 'Eléctricas', destacado: false, desc: 'Instrumento para medir tensiones, corrientes y resistencias eléctricas.' }
    ];

    // 2. Referencias a contenedores
    const contenedorInicio = document.getElementById('lista-productos');
    const contenedorPaginaProductos = document.getElementById('lista-productos-completo');
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    // Referencias para el Modal (Ventana de Información)
    const modal = document.getElementById('modal-info');
    const modalImg = document.getElementById('modal-img');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close');

    // 3. Función para renderizar tarjetas
    const renderizar = (lista, target) => {
        if (!target) return;
        target.innerHTML = ''; 
        lista.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${prod.img}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/150?text=Imagen+No+Disponible'" style="cursor:pointer;">
                <h3 style="cursor:pointer;">${prod.nombre}</h3>
                <p>${prod.precio}</p>
            `;
            
            // Evento al hacer clic en imagen o título para ver detalles
            const abrirInfo = () => {
                modalImg.src = prod.img;
                modalTitulo.innerText = prod.nombre;
                modalDesc.innerText = prod.desc;
                modal.style.display = 'block';
            };

            card.querySelector('img').onclick = abrirInfo;
            card.querySelector('h3').onclick = abrirInfo;

            target.appendChild(card);
        });
    };

    // 4. Lógica para cerrar el Modal
    if (closeModal) {
        closeModal.onclick = () => modal.style.display = 'none';
    }

    // Cerrar si se hace clic fuera del cuadro blanco del modal
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };

    // 5. Lógica de Filtrado
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');
            const categoria = boton.getAttribute('data-categoria');
            const filtrados = (categoria === 'Todos') ? productos : productos.filter(p => p.categoria === categoria);
            renderizar(filtrados, contenedorPaginaProductos);
        });
    });

    // 6. Ejecución inicial
    if (contenedorInicio) renderizar(productos.filter(p => p.destacado), contenedorInicio);
    if (contenedorPaginaProductos) renderizar(productos, contenedorPaginaProductos);

    const btnExplorar = document.getElementById('btn-explorar');
    if (btnExplorar) {
        btnExplorar.onclick = () => window.location.href = 'productos.html';
    }
});