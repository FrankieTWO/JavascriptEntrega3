 const productos = [
    { id: 101, nombre: "id simple", precio: 100, cantidad: 1, disponible: true, imgUrl:"./images/habDobleFoto.jpg" },
    { id: 201, nombre: "id doble", precio: 200, cantidad: 1,  disponible: true, imgUrl:"./images/habSuiteFoto.jpg" },
    { id: 301, nombre: "id triple", precio: 300, cantidad: 1,  disponible: true, imgUrl:"./images/habTripleFoto.jpg" },
    { id: 401, nombre: "habitaid", precio: 400, cantidad: 1,  disponible: true, imgUrl: "./images/habTripleFoto.jpg" }
]
let carrito = []
let contenedorProductos = document.getElementById("contenedorProductos")
document.addEventListener('DOMContentLoaded', () => {
  carrito = JSON.parse(localStorage.getItem("carrito"));
});

function eliminarProducto(id){
  const habitacionId = id
  carrito =carrito.filter((hab) => hab.id !== habitacionId)
  console.log(carrito)
  mostrarCarrito()
}
function saveStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
  mostrarCarrito();
}
function getcarrito() {
carrito = JSON.parse(localStorage.getItem("carrito"));
}
function agregarProducto(id){
  const item = productos.find((prod) => prod.id === id)
  carrito.push(item)
  mostrarCarrito()

}

for (const producto of productos){
   let tarjetaProducto = document.createElement('div')
   const botones = document.getElementById("agregar${producto.id}")
   tarjetaProducto.className = 'producto'
   tarjetaProducto.innerHTML = `
   <div class="card" style="width: 18rem;">
      <img src="${producto.imgUrl}" class="card-img-top" alt="Imagenes de las ides">
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Vacante ${producto.disponible}</li>
    <li class="list-group-item">Valor $${producto.precio}</li>
    <li class="list-group-item">Habitacion N°  ${producto.id}</li>
    </ul>
    <div class="card-body">
    <button id="agregar${producto.id}" class="botonAgregar" >Reservar</button>
    </div>
    </div>`
  contenedorProductos.append(tarjetaProducto)    
  const boton = document.getElementById("agregar" + producto.id)
  boton.addEventListener("click", () => agregarProducto(producto.id))
}


const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, disponible, imgUrl, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${imgUrl}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Disponible :${disponible}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Cancelar Habitacion</button>
        </div>
      </div>
      
  
      `;
    });
  }
saveStorage()
}


  
  





    
    
