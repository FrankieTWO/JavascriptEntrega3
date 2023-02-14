 const productos = [
    { id: 101, nombre: "simple", precio: 100, cantidad: 1, disponible: true, imgUrl:"./images/habDobleFoto.jpg" },
    { id: 201, nombre: "doble", precio: 200, cantidad: 1,  disponible: true, imgUrl:"./images/habSuiteFoto.jpg" },
    { id: 301, nombre: "triple", precio: 300, cantidad: 1,  disponible: true, imgUrl:"./images/habTripleFoto.jpg" },
    { id: 401, nombre: "suite", precio: 400, cantidad: 1,  disponible: true, imgUrl: "./images/habTripleFoto.jpg" }
]
// let carrito = JSON.parse(localStorage.getItem("carrito")) || [] ;


let carrito = [];
let contenedorProductos = document.getElementById("contenedorProductos")
const carritoContenedor = document.querySelector("#carritoContenedor")
const vaciarCarrito = document.querySelector("#vaciarCarrito")
const precioTotal = document.getElementById("precioTotal")
const procesarCompra = document.getElementById("procesarCompra")
let carritoGuardado = []

const productoGuardado = localStorage.getItem('carrito');
console.log(productoGuardado)
if (productoGuardado) {
  const carritoContenido = JSON.parse(productoGuardado);
  const carritoLongitud = carritoContenido.length;
  carritoContenedor.textContent = carritoLongitud;
} 
for (const item of carritoGuardado) {
  console.log(carrito)
  mostrarCarrito
  
  
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
}

})

if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    localStorage.clear("carrito")
    mostrarCarrito();
  });
}

function eliminarProducto(id){
  const habitacionId = id
  carrito =carrito.filter((hab) => hab.id !== habitacionId)
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito()
}


function agregarProducto(id){
  const existe = carrito.some(prod => prod.id == id)
  if (existe){
    const prod = carrito.map(prod => {
      if(prod.id === id ){
        prod.cantidad++
      }
      return prod;
    });
    carrito = [...prod];
  } else {
    const item = productos.find((prod) => prod.id === id)
    item.cantidad = 1;
    carrito.push(item);
    carritoGuardado.push(item);
    localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
  }
  mostrarCarrito();
}

//   if (existe){
//     const prod = carrito.map(prod => {
//       if(prod.id === id ){
//         prod.cantidad++
//         console.log(carrito + "doble cantidad")
//       }
//     })
//   }else {
//     const item = productos.find((prod) => prod.id === id)
//     carrito.push(item)
//     carritoGuardado.push(item)
//     console.log(carrito + "agregado al carrito" )
//     localStorage.setItem("carrito", JSON.stringify(carritoGuardado))
  
    

//   }

  
//   mostrarCarrito()

// }

for (const producto of productos){
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
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Cancelar Habitacion</button>
        </div>
      </div>`;
    });
  }
  if (carrito.length === 0) {
    
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    // AÑADISTE UN ITEM AL CARRITO 
    const productoGuardado = localStorage.getItem('carrito');
    console.log(productoGuardado)
    if (productoGuardado) {
      const carritoContenido = JSON.parse(productoGuardado);
      const carritoLongitud = carritoContenido.length;
      carritoContenedor.textContent = carritoLongitud;
    }
      }
      
      precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
      
    }



//   }
//   carritoContenedor.innerText = carrito.length;

//   precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

// }


  
  





    
    
