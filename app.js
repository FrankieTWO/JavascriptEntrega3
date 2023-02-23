const productos = [
  { id: 101, nombre: "simple", precio: 100, cantidad: 1, disponible: true, imgUrl:"./images/habDobleFoto.jpg" },
  { id: 201, nombre: "doble", precio: 200, cantidad: 1,  disponible: true, imgUrl:"./images/habSuiteFoto.jpg" },
  { id: 301, nombre: "triple", precio: 300, cantidad: 1,  disponible: true, imgUrl:"./images/habTripleFoto.jpg" },
  { id: 401, nombre: "suite", precio: 400, cantidad: 1,  disponible: true, imgUrl: "./images/habTripleFoto.jpg" }
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;
let contenedorProductos = document.getElementById("contenedorProductos")
const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const procesarCompra = document.getElementById("procesarCompra")
const horoscopo = document.getElementById("horoscopo")
procesarCompra.addEventListener("click", () =>{
carrito = [];
swal({
  title: "Reserva Exitosa",
  text: "Gracias por comprar",
  icon: "success",
  button: "Aww yiss!",
});
mostrarCarrito();
})

vaciarCarrito.addEventListener("click", () => {
  carrito.length = [];
  localStorage.clear;
  mostrarCarrito();
});


function eliminarProducto(id){
  const habitacionId = id;
  if (hab.id !== habitacionId) {
    carrito =carrito.filter((hab) => hab.id !== habitacionId)
  } else {
    id.cantidad--
  }
}


function eliminarProducto(id){
const habitacionId = id
carrito =carrito.filter((hab) => hab.id !== habitacionId)

mostrarCarrito()
}


const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = productos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

for (const producto of productos){
 let tarjetaProducto = document.createElement('div')
 const botones = document.getElementById("agregar${producto.id}")
 tarjetaProducto.className = 'producto'
 tarjetaProducto.innerHTML = `
 <div class="card" style="width: 18rem;">
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
}


const mostrarCarrito = () => {
const modalBody = document.querySelector(".modal .modal-body");
if (modalBody) {
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
    <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Cancelar Habitacion</button>
      </div>
    </div>`;
  });
}
if (carrito.length === 0) {
  console.log("Nada");
  modalBody.innerHTML = `
  <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
  `;
} else {
  console.log("Algo");
}
carritoContenedor.textContent = carrito.length;
if (precioTotal) {
  precioTotal.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}


};
let fortuna
let zodiac = ["aries","taurus","cancer","leo","scorpio","virgo","capricorn","aquarius","libra"]
let signo = zodiac[[Math.floor(Math.random() * zodiac.length)]]
const Url = `https://aztro.sameerkumar.website/?sign=${signo}&day=today`;
    fetch( Url, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(json => {
         fortuna = json;
        console.log(fortuna.description);
    });




































// const arrayProductos = [
//   { id: 101, nombre: "simple", precio: 100, cantidad: 1, imgUrl:"./images/habDobleFoto.jpg" },
//   { id: 201, nombre: "doble", precio: 200, cantidad: 1, imgUrl:"./images/habSuiteFoto.jpg" },
//   { id: 301, nombre: "triple", precio: 300, cantidad: 1, imgUrl:"./images/habTripleFoto.jpg" },
//   { id: 401, nombre: "suite", precio: 400, cantidad: 1, imgUrl: "./images/habTripleFoto.jpg" }
// ]     
// let carrito = [];
// let carritoGuardado = [];
// let contenedorProductos = document.getElementById("contenedorProductos")
// const carritoContenedor = document.querySelector("#carritoContenedor")
// const vaciarCarrito = document.getElementById("vaciarCarrito")
// const precioTotal = document.getElementById("precioTotal")
// const procesarCompra = document.getElementById("procesarCompra")

//  const productoGuardado = localStorage.getItem('carrito');
//  if (productoGuardado) {
//    const carritoContenido = JSON.parse(productoGuardado);
//    const carritoLongitud = carritoContenido.length;
//    carritoContenedor.textContent = carritoLongitud;
//  } 
 

// procesarCompra.addEventListener("click", () => {
//   if (carrito.length === 0){
//     swal({
//         title: "¡Tu carrito está vacio!",
//         text: "Compra algo para continuar con la compra",
//         icon: "error",
//         confirmButtonText: "Aceptar",

//   })
// }  else {
//   // ACA PASA ALGO CUANDO COMPRAS 
// }})

// if (vaciarCarrito) {
//   vaciarCarrito.addEventListener("click", () => {
//     carrito.length = [];
//     localStorage.clear()
//     mostrarCarrito();
//   });
// }

// function eliminarProducto(id){
//   const habitacionId = id
//   carrito =carrito.filter((hab) => hab.id !== habitacionId)
//   mostrarCarrito()
// }

// function agregarProducto(id){
//   const item = arrayProductos.find((prod) => prod.id === id)
//   const existe = carrito.some(prod => prod.id === id)
//    if (existe){
//      const prod = carrito.map(prod => {
//       if(prod.id === id ){
//         prod.cantidad++
//        }
//      })
//    }else {
//     //  const item = carrito.find((prod) => prod.id === id)
//      console.log(item)
//      carrito.push(item)
//      carritoGuardado.push(item)
//      localStorage.setItem("carrito", JSON.stringify(carritoGuardado))
//     }
//   mostrarCarrito();
// }


//   arrayProductos.forEach(producto => {
//    let tarjetaProducto = document.createElement('div')
//    const botones = document.getElementById("agregar${producto.id}")
//    tarjetaProducto.className = 'producto'
//    tarjetaProducto.innerHTML = `
//    <div class="card" style="width: auto;">
//       <img src="${producto.imgUrl}" class="card-img-top" alt="Imagenes de las habitacioes">
//       <div class="card-body">
//       <h5 class="card-title">${producto.nombre}</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item">Vacante ${producto.disponible}</li>
//     <li class="list-group-item">Valor $${producto.precio}</li>
//     <li class="list-group-item">Habitacion N°  ${producto.id}</li>
//     </ul>
//     <div class="card-body">
//     <button id="agregar${producto.id}" class="botonAgregar" >Reservar</button>
//     </div>
//     </div>`
//   contenedorProductos.append(tarjetaProducto)    
//   const boton = document.getElementById("agregar" + producto.id)
//   boton.addEventListener("click", () => agregarProducto(producto.id))
// });

// const mostrarCarrito = () => {
//   const modalBody = document.querySelector(".modal .modal-body");
//   if (modalBody) {
//     modalBody.innerHTML = "";
//     console.log(carrito)
//     carrito.forEach((producto) => {
//       const { imgUrl, nombre, precio, cantidad, id,} = producto;
//       console.log(modalBody);
//       modalBody.innerHTML += `
//       <div class="modal-contenedor">
//         <div>
//         <img class="img-fluid img-carrito" src="${imgUrl}"/>
//         </div>
//         <div>
//         <p>Producto: ${nombre}</p>
//       <p>Precio: ${precio}</p>
//       <p>Cantidad :${cantidad}</p>
//       <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
//         </div>
//       </div>`;
//      });
   
//    if (carrito.length === 0) {
//      modalBody.innerHTML = `
//      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
//      `;
//    } else {
//      // AÑADISTE UN ITEM AL CARRITO 
//      const productoGuardado = localStorage.getItem('carrito');
//      carritoContenedor.innerText = carrito.length;
//      precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
           
//         carritoContenedor.textContent = carrito.length;
     
//        }
           
//            }
//            carritoContenedor.addEventListener("click", mostrarCarrito());}
            
        
          
        