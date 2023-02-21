let carrito = [];
let carritoGuardado = [];
let contenedorProductos = document.getElementById("contenedorProductos")
const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const precioTotal = document.getElementById("precioTotal")
const procesarCompra = document.getElementById("procesarCompra")

fetch("./productos.json")
  .then((response) => response.json())
  .then((arrayProductos) => {return arrayProductos});

  console.log(arrayProductos)

 const productoGuardado = localStorage.getItem('carrito');
 if (productoGuardado) {
   const carritoContenido = JSON.parse(productoGuardado);
   const carritoLongitud = carritoContenido.length;
   carritoContenedor.textContent = carritoLongitud;
 } 
 

procesarCompra.addEventListener("click", () => {
  if (carrito.length === 0){
    swal({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",

  })
}  else {
  // ACA PASA ALGO CUANDO COMPRAS 
}})

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    localStorage.clear()
    mostrarCarrito();
  });
}

function eliminarProducto(id){
  const habitacionId = id
  carrito =carrito.filter((hab) => hab.id !== habitacionId)
  mostrarCarrito()
}

function agregarProducto(id){
  const item = arrayProductos.find((prod) => prod.id === id)
  const existe = carrito.some(prod => prod.id === id)
   if (existe){
     const prod = carrito.map(prod => {
      if(prod.id === id ){
        prod.cantidad++
       }
     })
   }else {
     let item = carrito.find((prod) => prod.id === id)
     carrito.push(item)
     carritoGuardado.push(item)
     localStorage.setItem("carrito", JSON.stringify(carritoGuardado))
    }
  mostrarCarrito();
}

console.log(arrayProductos)
  arrayProductos.forEach(producto => {
   let tarjetaProducto = document.createElement('div')
   const botones = document.getElementById("agregar${producto.id}")
   tarjetaProducto.className = 'producto'
   tarjetaProducto.innerHTML = `
   <div class="card" style="width: auto;">
      <img src="${producto.imgUrl}" class="card-img-top" alt="Imagenes de las habitacioes">
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
});

const mostrarCarrito = () => {
   const modalBody = document.querySelector(".modal .modal-body");
   
     modalBody.innerHTML = "";
     carrito.forEach((prod) => {
       const { id, nombre, precio, disponible, imgUrl, cantidad } = prod;
       modalBody.innerHTML += `
       <div class="modal-contenedor">
         <div>
         <img class="img-fluid img-carrito" src="${imgUrl}"/>
         </div>
         <div>
         <p>Producto: ${nombre}</p>
       <p>Precio: ${precio}</p>
       <p>Disponible :${disponible}</p>
       <p>Cantidad :${cantidad}</p>
       <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Cancelar Habitacion</button>
         </div>
       </div>`;
     });
   
   if (carrito.length === 0) {
     modalBody.innerHTML = `
     <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
     `;
   } else {
     // AÑADISTE UN ITEM AL CARRITO 
     const productoGuardado = localStorage.getItem('carrito');
     carritoContenedor.innerText = carrito.length;
     precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
     console.log(productoGuardado)
      
        carritoContenedor.textContent = carrito.length;
     
       }
           
           }
           carritoContenedor.addEventListener("click", mostrarCarrito());