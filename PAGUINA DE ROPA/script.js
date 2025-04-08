let carrito = [];
let total = 0;

function mostrarCategoria(id) {
  document.querySelectorAll('.categoria-productos').forEach(div => {
    div.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarAlerta();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total');
  lista.innerHTML = '';
  total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.nombre} - $${item.precio.toLocaleString()} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
    lista.appendChild(li);
    total += item.precio;
  });
  totalSpan.textContent = `$${total.toLocaleString()}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function mostrarFormulario() {
  document.getElementById('formulario-compra').classList.remove('oculto');
}

function mostrarAlerta() {
  const alerta = document.getElementById('alerta');
  alerta.style.display = 'block';
  setTimeout(() => {
    alerta.style.display = 'none';
  }, 2000);
}