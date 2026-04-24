document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { nombre: 'Martillo de Acero', precio: '$15.00', img: 'https://via.placeholder.com/150' },
        { nombre: 'Taladro Percutor', precio: '$85.00', img: 'https://via.placeholder.com/150' },
        { nombre: 'Juego de Destornilladores', precio: '$12.00', img: 'https://via.placeholder.com/150' }
    ];

    const contenedor = document.getElementById('lista-productos');

    productos.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
        `;
        contenedor.appendChild(card);
    });

    document.getElementById('btn-explorar').onclick = () => {
        alert('¡Pronto tendremos más ofertas para ti!');
    };
});