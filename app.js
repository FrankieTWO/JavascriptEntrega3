 const productos = [
    { id: 101, nombre: "id simple", precio: 100, cantidad: 1, disponible: true, imgUrl:"./images/habDobleFoto.jpg" },
    { id: 201, nombre: "id doble", precio: 200, cantidad: 1,  disponible: true, imgUrl:"./images/habSuiteFoto.jpg" },
    { id: 301, nombre: "id triple", precio: 300, cantidad: 1,  disponible: true, imgUrl:"./images/habTripleFoto.jpg" },
    { id: 401, nombre: "habitaid", precio: 400, cantidad: 1,  disponible: true, imgUrl: "./images/habTripleFoto.jpg" }
]
let carrito = []
let contenedorProductos = document.getElementById("contenedorProductos")

for (const producto of productos){
   let tarjetaProducto = document.createElement('div')
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

   const botones = document.getElementsById('agregar${producto.id}')
}
productos.forEach(producto => {
  boton.addEventListener("click" , () => {
    agregarAlCarrito(producto.id)

  })



const agregarAlCarrito  =(prodId) => {
  const item = productos.find((prod)=> prod.id ==prodId)
  carrito.push(item)
}
});
s

    
    
