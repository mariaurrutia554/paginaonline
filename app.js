const productos = [
    {
        id: 1,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        precio: 38,
        precioOld: 45,
        categoria: "clasico",
        imagen: "img/don_quijote.jpg",
        descripcion: "La obra maestra de la literatura española. Las aventuras del ingenioso hidalgo que soñaba ser caballero andante.",
        oferta: true
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        precio: 42,
        categoria: "clasico",
        imagen: "img/cien_anos_soledad.jpg",
        descripcion: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo de Macondo.",
        oferta: false
    },
    {
        id: 3,
        titulo: "El poder del ahora",
        autor: "Eckhart Tolle",
        precio: 32,
        precioOld: 40,
        categoria: "autoayuda",
        imagen: "img/podre_del_ahora.jpg",
        descripcion: "Una guía para vivir en el presente y encontrar la paz interior.",
        oferta: true
    },
    {
        id: 4,
        titulo: "Padre Rico, Padre Pobre",
        autor: "Robert Kiyosaki",
        precio: 35,
        categoria: "autoayuda",
        imagen: "img/padre_rico_padre_pobre.jpg",
        descripcion: "Las lecciones que los ricos enseñan a sus hijos sobre el dinero que los pobres y la clase media no.",
        oferta: false
    },
    {
        id: 5,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        precio: 39,
        categoria: "clasico",
        imagen: "img/la_sombra_del_viento.jpg",
        descripcion: "Una historia misteriosa ambientada en la Barcelona de posguerra.",
        oferta: false
    },
    {
        id: 6,
        titulo: "Los 7 hábitos de la gente altamente efectiva",
        autor: "Stephen Covey",
        precio: 34,
        precioOld: 42,
        categoria: "autoayuda",
        imagen: "img/los_habitos_de_la_gente_efectiva.jpg",
        descripcion: "Un enfoque integral para resolver problemas personales y profesionales.",
        oferta: true
    },
    {
        id: 7,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        precio: 28,
        categoria: "clasico",
        imagen: "img/el_principito.jpg",
        descripcion: "Un piloto se encuentra varado en el desierto del Sahara y conoce a un pequeño príncipe.",
        oferta: false
    },
    {
        id: 8,
        titulo: "Pensar rápido, pensar despacio",
        autor: "Daniel Kahneman",
        precio: 37,
        categoria: "autoayuda",
        imagen: "img/pensar_rapido_pensar_despacio.jpg",
        descripcion: "Un análisis de los dos sistemas que dirigen cómo pensamos y tomamos decisiones.",
        oferta: false
    },
    {
        id: 9,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        precio: 30,
        precioOld: 38,
        categoria: "clasico",
        imagen: "img/orgullo_prejuicio.jpg",
        descripcion: "La historia de Elizabeth Bennet y el señor Darcy en la Inglaterra del siglo XIX.",
        oferta: true
    },
    {
        id: 10,
        titulo: "El arte de no amargarse la vida",
        autor: "Richard Carlson",
        precio: 26,
        categoria: "autoayuda",
        imagen: "img/el_arte_de_no_amargarse_la_vida.jpg",
        descripcion: "Pequeños cambios que marcan una gran diferencia en tu vida diaria.",
        oferta: false
    },
    {
        id: 11,
        titulo: "La Divina Comedia",
        autor: "Dante Alighieri",
        precio: 40,
        categoria: "clasico",
        imagen: "img/divina_comedia.jpg",
        descripcion: "El épico viaje de Dante por el Infierno, el Purgatorio y el Paraíso.",
        oferta: false
    },
    {
        id: 12,
        titulo: "Hábitos atómicos",
        autor: "James Clear",
        precio: 36,
        precioOld: 45,
        categoria: "autoayuda",
        imagen: "img/habitos_atomicos.jpg",
        descripcion: "Un método práctico para crear buenos hábitos y romper los malos.",
        oferta: true
    }
];

const souvenirs = [
    {
        id: 101,
        titulo: "Taza - Don Quijote",
        tipo: "Taza",
        frase: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
        autorFrase: "Miguel de Cervantes - Don Quijote de la Mancha",
        precio: 15,
        imagen: "img/taza.jpg"
    },
    {
        id: 102,
        titulo: "Taza - El Principito",
        tipo: "Taza",
        frase: "Lo esencial es invisible a los ojos.",
        autorFrase: "Antoine de Saint-Exupéry - El Principito",
        precio: 15,
        imagen: "img/taza2.jpg"
    },
    {
        id: 103,
        titulo: "Polo - Cien años de soledad",
        tipo: "Polo",
        frase: "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
        autorFrase: "Gabriel García Márquez - Cien años de soledad",
        precio: 40,
        imagen: "img/polo.jpg"
    },
    {
        id: 104,
        titulo: "Taza - El Poder del Ahora",
        tipo: "Taza",
        frase: "El pasado ya no existe, el futuro aún no ha llegado. Solo existe el ahora.",
        autorFrase: "Eckhart Tolle - El Poder del Ahora",
        precio: 15,
        imagen: "img/taza3.jpg"
    },
    {
        id: 105,
        titulo: "Llavero - Orgullo y Prejuicio",
        tipo: "Llavero",
        frase: "No puedo evitarlo, tampoco lo intento.",
        autorFrase: "Jane Austen - Orgullo y Prejuicio",
        precio: 10,
        imagen: "img/llavero.jpg"
    },
    {
        id: 122,
        titulo: "Llavero - Don Quijote",
        tipo: "Llavero",
        frase: "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.",
        autorFrase: "Miguel de Cervantes - Don Quijote de la Mancha",
        precio: 10,
        imagen: "img/llavero.jpg"
    },
    {
        id: 106,
        titulo: "Polo - Hábitos Atómicos",
        tipo: "Polo",
        frase: "No subas de nivel hasta que hayas dominado el nivel en el que estás.",
        autorFrase: "James Clear - Hábitos Atómicos",
        precio: 40,
        imagen: "img/polo2.jpg"
    },
    {
        id: 107,
        titulo: "Taza - La Divina Comedia",
        tipo: "Taza",
        frase: "Abandonad toda esperanza, vosotros que entráis.",
        autorFrase: "Dante Alighieri - La Divina Comedia",
        precio: 15,
        imagen: "img/taza4.jpg"
    },
    {
        id: 108,
        titulo: "Taza - Padre Rico, Padre Pobre",
        tipo: "Taza",
        frase: "Los ricos no trabajan por dinero, hacen que el dinero trabaje para ellos.",
        autorFrase: "Robert Kiyosaki - Padre Rico, Padre Pobre",
        precio: 15,
        imagen: "img/taza5.jpg"
    },
    {
        id: 109,
        titulo: "Marcapáginas - La Sombra del Viento",
        tipo: "Marcapáginas",
        frase: "Los libros tienen alma. Es el alma de quien los escribió y el alma de quienes los leyeron.",
        autorFrase: "Carlos Ruiz Zafón - La Sombra del Viento",
        precio: 8,
        imagen: "img/marcapaginas.jpg"
    },
    {
        id: 110,
        titulo: "Polo - Pensar Rápido, Pensar Despacio",
        tipo: "Polo",
        frase: "Pensar rápido es instinto, pensar despacio es razón.",
        autorFrase: "Daniel Kahneman - Pensar Rápido, Pensar Despacio",
        precio: 40,
        imagen: "img/polo4.jpg"
    },
    {
        id: 111,
        titulo: "Taza - Los 7 Hábitos",
        tipo: "Taza",
        frase: "Sé proactivo. Tú decides tu destino.",
        autorFrase: "Stephen Covey - Los 7 Hábitos de la Gente Efectiva",
        precio: 15,
        imagen: "img/taza6.jpg"
    },
    {
        id: 112,
        titulo: "Taza - El Arte de No Amargarse la Vida",
        tipo: "Taza",
        frase: "La única persona que puede hacerme infeliz soy yo mismo.",
        autorFrase: "Richard Carlson - El Arte de No Amargarse la Vida",
        precio: 15,
        imagen: "img/taza.jpg"
    },
    {
        id: 113,
        titulo: "Polo - El Principito",
        tipo: "Polo",
        frase: "Lo esencial es invisible a los ojos.",
        autorFrase: "Antoine de Saint-Exupéry - El Principito",
        precio: 40,
        imagen: "img/polo.jpg"
    },
    {
        id: 114,
        titulo: "Polo - La Divina Comedia",
        tipo: "Polo",
        frase: "Abandonad toda esperanza, vosotros que entráis.",
        autorFrase: "Dante Alighieri - La Divina Comedia",
        precio: 40,
        imagen: "img/polo2.jpg"
    },
    {
        id: 115,
        titulo: "Polo - Don Quijote",
        tipo: "Polo",
        frase: "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.",
        autorFrase: "Miguel de Cervantes - Don Quijote de la Mancha",
        precio: 40,
        imagen: "img/polo4.jpg"
    },
    {
        id: 116,
        titulo: "Agenda - Don Quijote",
        tipo: "Agenda",
        frase: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...",
        autorFrase: "Miguel de Cervantes - Don Quijote de la Mancha",
        precio: 25,
        imagen: "img/don_quijote.jpg"
    },
    {
        id: 117,
        titulo: "Agenda - El Principito",
        tipo: "Agenda",
        frase: "Lo esencial es invisible a los ojos.",
        autorFrase: "Antoine de Saint-Exupéry - El Principito",
        precio: 25,
        imagen: "img/el_principito.jpg"
    },
    {
        id: 118,
        titulo: "Agenda - Hábitos Atómicos",
        tipo: "Agenda",
        frase: "Los hábitos son el compuesto del interés propio.",
        autorFrase: "James Clear - Hábitos Atómicos",
        precio: 25,
        imagen: "img/habitos_atomicos.jpg"
    },
    {
        id: 119,
        titulo: "Agenda - El Poder del Ahora",
        tipo: "Agenda",
        frase: "El pasado ya no existe, el futuro aún no ha llegado. Solo existe el ahora.",
        autorFrase: "Eckhart Tolle - El Poder del Ahora",
        precio: 25,
        imagen: "img/podre_del_ahora.jpg"
    },
    {
        id: 120,
        titulo: "Agenda - Cien años de soledad",
        tipo: "Agenda",
        frase: "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
        autorFrase: "Gabriel García Márquez - Cien años de soledad",
        precio: 25,
        imagen: "img/cien_anos_soledad.jpg"
    },
    {
        id: 121,
        titulo: "Agenda - La Divina Comedia",
        tipo: "Agenda",
        frase: "Abandonad toda esperanza, vosotros que entráis.",
        autorFrase: "Dante Alighieri - La Divina Comedia",
        precio: 25,
        imagen: "img/divina_comedia.jpg"
    }
];

let carrito = [];

document.addEventListener("DOMContentLoaded", function() {
    renderizarProductos(productos);
    renderizarOfertas();
    renderizarSouvenirs();
    configurarFiltros();
    configurarCarrito();
    configurarContacto();
});

function renderizarProductos(listaProductos) {
    const grid = document.getElementById("productosGrid");
    grid.innerHTML = "";

    listaProductos.forEach(function(producto) {
        const card = document.createElement("div");
        card.className = "producto-card";
        const esImagen = producto.imagen.endsWith(".jpg") || producto.imagen.endsWith(".png");
        const contenidoImagen = esImagen 
            ? `<img src="${producto.imagen}" alt="${producto.titulo}" style="width:100%;height:100%;object-fit:cover;">` 
            : producto.imagen;
        card.innerHTML = `
            <div class="producto-image">${contenidoImagen}</div>
            <div class="producto-info">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-autor">${producto.autor}</p>
                <p class="producto-precio">S/${producto.precio}</p>
                <button class="producto-btn" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            </div>
        `;
        card.addEventListener("click", function(e) {
            if (!e.target.classList.contains("producto-btn")) {
                abrirModalProducto(producto);
            }
        });
        grid.appendChild(card);
    });
}

function renderizarOfertas() {
    const grid = document.getElementById("ofertasGrid");
    const ofertas = productos.filter(function(p) { return p.oferta; });

    ofertas.forEach(function(producto) {
        const card = document.createElement("div");
        card.className = "oferta-card";
        const esImagen = producto.imagen.endsWith(".jpg") || producto.imagen.endsWith(".png");
        const contenidoImagen = esImagen 
            ? `<img src="${producto.imagen}" alt="${producto.titulo}" style="width:100%;height:100%;object-fit:cover;">` 
            : producto.imagen;
        card.innerHTML = `
            <span class="oferta-badge">-${Math.round((1 - producto.precio / producto.precioOld) * 100)}%</span>
            <div class="producto-image">${contenidoImagen}</div>
            <div class="producto-info">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-autor">${producto.autor}</p>
                <p class="producto-precio">S/${producto.precio} <span class="producto-precio-old">S/${producto.precioOld}</span></p>
                <button class="producto-btn" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderizarSouvenirs() {
    const grid = document.getElementById("souvenirsGrid");

    souvenirs.forEach(function(souvenir) {
        const card = document.createElement("div");
        card.className = "souvenir-card";
        const esImagen = souvenir.imagen.endsWith(".jpg") || souvenir.imagen.endsWith(".png");
        const contenidoImagen = esImagen 
            ? `<img src="${souvenir.imagen}" alt="${souvenir.titulo}" style="width:100%;height:100%;object-fit:cover;">` 
            : `<span style="font-size:80px;">${souvenir.imagen}</span>`;
        card.innerHTML = `
            <div class="souvenir-image">
                ${contenidoImagen}
                <span class="souvenir-tipo">${souvenir.tipo}</span>
            </div>
            <div class="souvenir-info">
                <p class="souvenir-frase">"${souvenir.frase}"</p>
                <p class="souvenir-autor-frase">- ${souvenir.autorFrase}</p>
                <p class="souvenir-precio">S/${souvenir.precio}</p>
                <button class="souvenir-btn" onclick="agregarAlCarrito(${souvenir.id})">Agregar al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function configurarFiltros() {
    const botones = document.querySelectorAll(".filtro-btn");

    botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            botones.forEach(function(b) { b.classList.remove("active"); });
            boton.classList.add("active");

            const filtro = boton.dataset.filtro;
            if (filtro === "todos") {
                renderizarProductos(productos);
            } else {
                const filtrados = productos.filter(function(p) { return p.categoria === filtro; });
                renderizarProductos(filtrados);
            }
        });
    });

    document.querySelectorAll(".categoria-card").forEach(function(card) {
        card.addEventListener("click", function() {
            const categoria = card.dataset.categoria;
            document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });

            setTimeout(function() {
                botones.forEach(function(b) { b.classList.remove("active"); });
                const botonFiltro = document.querySelector(`[data-filtro="${categoria}"]`);
                if (botonFiltro) {
                    botonFiltro.classList.add("active");
                    const filtrados = productos.filter(function(p) { return p.categoria === categoria; });
                    renderizarProductos(filtrados);
                }
            }, 500);
        });
    });
}

function abrirModalProducto(producto) {
    const modal = document.getElementById("modalProducto");
    const modalImage = document.getElementById("modalImage");
    const esImagen = producto.imagen.endsWith(".jpg") || producto.imagen.endsWith(".png");
    if (esImagen) {
        modalImage.innerHTML = `<img src="${producto.imagen}" alt="${producto.titulo}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`;
    } else {
        modalImage.innerHTML = producto.imagen;
    }
    document.getElementById("modalTitle").textContent = producto.titulo;
    document.getElementById("modalAutor").textContent = producto.autor;
    document.getElementById("modalPrecio").textContent = "S/" + producto.precio;
    document.getElementById("modalDescripcion").textContent = producto.descripcion;
    document.getElementById("modalAddCart").onclick = function() {
        agregarAlCarrito(producto.id);
    };
    modal.classList.add("active");
}

function configurarCarrito() {
    document.getElementById("carrito").addEventListener("click", function() {
        renderizarCarrito();
        document.getElementById("modalCarrito").classList.add("active");
    });

    document.getElementById("modalClose").addEventListener("click", function() {
        document.getElementById("modalProducto").classList.remove("active");
    });

    document.getElementById("modalCarritoClose").addEventListener("click", function() {
        document.getElementById("modalCarrito").classList.remove("active");
    });

    document.getElementById("btnCheckout").addEventListener("click", function() {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }
        alert("Gracias por tu compra! Recibirás un email de confirmación.");
        carrito = [];
        actualizarCarrito();
        document.getElementById("modalCarrito").classList.remove("active");
    });

    document.querySelectorAll(".modal").forEach(function(modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(function(p) { return p.id === id; });
    const souvenir = souvenirs.find(function(s) { return s.id === id; });
    const item = producto || souvenir;
    
    if (!item) return;
    
    const itemExistente = carrito.find(function(i) { return i.id === id; });

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ id: item.id, titulo: item.titulo, precio: item.precio, imagen: item.imagen, cantidad: 1 });
    }

    actualizarCarrito();
    alert(item.titulo + " agregado al carrito");
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(function(item) { return item.id !== id; });
    actualizarCarrito();
    renderizarCarrito();
}

function actualizarCarrito() {
    const total = carrito.reduce(function(sum, item) { return sum + item.precio * item.cantidad; }, 0);
    const cantidad = carrito.reduce(function(sum, item) { return sum + item.cantidad; }, 0);

    document.getElementById("carritoCount").textContent = cantidad;
    document.getElementById("carritoTotal").textContent = "S/" + total.toLocaleString();
}

function renderizarCarrito() {
    const container = document.getElementById("carritoItems");
    container.innerHTML = "";

    if (carrito.length === 0) {
        container.innerHTML = "<p style='padding: 20px; text-align: center; color: #666;'>Tu carrito está vacío</p>";
        return;
    }

    carrito.forEach(function(item) {
        const div = document.createElement("div");
        div.className = "carrito-item";
        const esImagen = item.imagen.endsWith(".jpg") || item.imagen.endsWith(".png");
        const contenidoImagen = esImagen 
            ? `<img src="${item.imagen}" alt="${item.titulo}" style="width:100%;height:100%;object-fit:cover;border-radius:5px;">` 
            : item.imagen;
        div.innerHTML = `
            <div class="carrito-item-image">${contenidoImagen}</div>
            <div class="carrito-item-info">
                <p class="carrito-item-titulo">${item.titulo}</p>
                <p class="carrito-item-precio">S/${item.precio} x ${item.cantidad}</p>
            </div>
            <button class="carrito-item-remove" onclick="eliminarDelCarrito(${item.id})">✕</button>
        `;
        container.appendChild(div);
    });

    actualizarCarrito();
}

function configurarContacto() {
    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Mensaje enviado! Te contactaremos pronto.");
        this.reset();
    });
}
