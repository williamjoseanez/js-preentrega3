// alert( `
//         Hola 😎‼️ Bienvenido al curso de JavaScript®️.

//         Mi nombre es William Añez. 🤓

//         Entraste a mi primer y segundo proyecto básico de JS 👨🏻‍💻.

//         Para avanzar debe contestar todas las preguntas 🔜.`);

// let nombre = prompt( `Por favor, Introducir tu Nombre 📝:` ).toLowerCase();


//         if (nombre != "") {
//               alert( ` 
//               Muy bien👌🏻${ nombre }.

//               A continuación ingrese su Apellido 📝.`);
//               }
//         else {
//               alert("El nombre se requiere 📝");
//               nombre = prompt( `Introducir su Nombre 📝:` );
//               }
 
// let apellido = prompt( `Introducir su Apellido 📝:` ).toLowerCase();
    
//         if (apellido != ""){
//               alert( ` 
//               Muy bien 👌🏻 ${nombre} ${ apellido }.
              
//               En la proxima ventana ingrese su Edad.`);
//               }
//         else {
//               alert(`El apellido se requiere`);
//               apellido = prompt( `Introducir su Apellido 📝:` );
//               }

//   function pedirNumero(){
//         let input = prompt("Ingrese su Edad 🙂:");
              
//         while (isNaN(input) || input.trim() === "" ) {
//               input = prompt("❌ Debe Ingresar una edad Valida");
//               }
//               return parseFloat(input);
//             }
              
//  let edad = pedirNumero();
              
//         if (edad >= 0 && edad < 18) {
//               alert(` ❌ Para continuar debe ser mayor de edad ⚠️`);
//               edad = parseInt(prompt(`Ingrese su Edad`));
//                 }
//         else {
//               alert(` ✅ Edad ingresada correctamente , puede continuar 🔜`);
//               };
            
// let país = prompt(`✏  Ingrese su País de Nacimiento 🇦🇵🚩... 
//                    ⚠️ Nuestra base de datos esta basada en países Sudamericanos`).toLowerCase();

//         switch (país) {
//           case "argentina":
//                 alert(`Su país de nacimiento es Argentina 🇷.`);
//           break;

//           case "chile":
//                 alert(`Su país de nacimiento es Chile 🏴󠁵󠁳󠁴󠁸󠁿.`);
//           break;

//           case "colombia":
//                 alert(`Su país de nacimiento es Colombia 🇨🇴.`);
//           break;

//           case "venezuela":
//                 alert(`Su país de nacimiento es Venezuela 🇻🇪.`);
//           break;

//           case "peru":
//                 alert(`Su país de nacimiento es Peru 🇪.`);
//           break;

//           case "brasil":
//                 alert(`Su país de nacimiento es Brasil 🇧🇷.`);
//           break;

//           case "uruguay":
//                 alert(`Su país de nacimiento es Uruguay 🇾🇺🇾.`);
//           break;
              
//           case "ecuador":
//                 alert(`Su país de nacimiento es Ecuador.`);
//           break;

//           default:
//                 alert(`❌ Su país de nacimiento no esta en nuestra base de datos.`)
//                 país = prompt(`Ingrese su País de Nacimiento 🇦🇵🚩`);  
//              };

// alert( `🥳 Genial 👏.

//         ✅ Vamos avanzando muy bien 🥳...
        
//         📝 Ahora te toca resolver las siguientes preguntas 📝:
                      
//         🔜`);

// let pregunta1 = prompt("La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdadero o Falso").toLowerCase();

//           if (pregunta1 === "verdadero" ){
//                   alert(`Excelente 👏, vamos a la siguiente pregunta`);
//                   } 
//           else {
//                   alert(` ❌ Lo siento, vuelva a intentarlo ❌`);
//                   pregunta1 = prompt(`La suma de dos numero Impares tiene como resultado un numero Par?, Responda Verdad o Falso`);
//               };

//       alert( ` Felicitaciones 🥳🥳🥳.

//                 Vamos avanzando muy bien 👏👏, ahora comprobaremos si un numero es PRIMO o NO`);

// function esPrimo(numeroPrimo) {
//           if (numeroPrimo <= 1) {
//               return false;
//           }
          
//           for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
//           if (numeroPrimo % i === 0) {
//               return false;
//             }
//           }
          
//           return true;
// }

// const numeroIngresado = parseInt(prompt("Ingresa un número para verificar 📝:"));

//         if (esPrimo(numeroIngresado)) {
//           alert(numeroIngresado + " Es un número PRIMO.");
//         } else {
//           alert(numeroIngresado + `     ❌ No es un número PRIMO ❌.
//       Un número primo sólo es divisible por sí mismo y por 1, los números negativos, 0 y 1 NO son números primos`);
//         };

// alert( ` Excelente 👏👏, has llegado muy lejos.

//          Ahora comprobaremos si un numero es PAR O IMPAR`);

// function esPar(numeroPar) {
//           return numeroPar % 2 === 0;
//         }
        
//         const numeroIngresado1 = parseInt(prompt("Ingresa un número 📝:"));
        
//         if (esPar(numeroIngresado1)) {
//           alert(`👏👏El numero ` + numeroIngresado1 + " es un número PAR.");
//         } else {
//           alert(`👏👏El numero ` + numeroIngresado1 + " es un número IMPAR.");
//         };


// alert (`En esta sección simularemos una tienda de compras, donde tu calcularías cuanto te quedaría el precio final`);
    
// alert (`Vendemos un producto 🍔 , el Valor del producto es de $500 + iva, en la proxima ventana elija la cantidad de productos que desea agregar al carrito 🛒`);
        
        
//         let cantidadArticulo = parseInt(prompt(`¿Cuántos artículos deseas agregar ✍🏻`));{
//                   if (cantidadArticulo >= 1 && cantidadArticulo < 13){
//                   alert(`Ha agregado correctamente  ` + cantidadArticulo + ` artículos al carrito 🛒 `)
//                   } else {
//                         alert(`❌Mínimo debe elegir un producto, un máximo de 12 unidades❌`)
//                         cantidadArticulo = parseInt(prompt(`¿Cuántos artículos deseas agregar ✍🏻`))
//                   }
//             }
//         const suma = (a, b) => a + b;
//         const resta = (a, b) => a - b;
//         const iva = (x) => x * 0.21;
//         const multiplica = (a,b) => a * b;
//         const porcentajeDescuento = (x) => x / 100;
              
//     let valorProducto = 500;
       
//     let totalApagar = multiplica(suma(valorProducto,iva(valorProducto)),cantidadArticulo);{
//           alert("El Total Apagará $ " + Math.round(totalApagar));
//             };

//           alert(`Pedimos una donación especial para los niños de la calle, agrega porcentaje en la siguiente ventana`);

    
    
//     function pedirDonacion(){
//       let donacion = prompt(`Ingrese por favor un porcentaje 💱,
//       ejemplo: 5, 10, 15 o el porcentaje que usted considere`);
                                
//               while (isNaN(donacion) || donacion.trim() === "" ) {
//                     donacion = prompt("❌ Debe Ingresar un porcentaje Valido");
//                     }
//                     return parseFloat(donacion);
//                   };
                    
//        let porcentaje = pedirDonacion();{
                    
//               if (porcentaje < 0) {
//                     alert(` ❌ Para continuar debe ingresar un porcentaje ⚠️`);
//                     porcentaje = parseInt(prompt(`❌ Debe Ingresar un porcentaje Valido`));
//                       }
//                   }
         
//         alert("✅ Gracias! ha decidido donar el " + Math.round(porcentaje) + "%  💵 del monto de su factura a una buena causa");
      


//   let montoConPorcentaje = porcentajeDescuento(multiplica(totalApagar,porcentaje));{
//       alert("Usted esta agregando $" + Math.round(montoConPorcentaje) + " a su monto total");
//         };

       
//   let montoFinal = suma(totalApagar,montoConPorcentaje);{
//       alert("Estamos a un paso de finalizar esta compra 💰, el monto total a pagar es : $" + Math.round(montoFinal) + " Gracias por su Compra!");
//   };

//   alert( `👏Excelente👏, llegaste al final del primer Proyecto 🥇🥇🥇
//              Te muestro tus datos ingresados:

//              Nombre 👑: ${ nombre } ${ apellido }
//              Edad: ${edad}
//              Nacionalidad: ${país} 
//              Pregunta Respondida: ${pregunta1}
//              Numero consultado ("Primo o No primo"): ${numeroIngresado}
//              El numero consultado Par o Impar fue: ${numeroIngresado1}
//              El numero consultado Par o Impar fue: ${numeroIngresado1}
//              Has comprado : ${cantidadArticulo} artículos
//              El monto Donado : $ ${montoConPorcentaje}
//              Tu pago Total :$ ${montoFinal}

//              Gracias por visitar mi pagina `);

//      alert( ` 
//               Muy bien 👌🏻 ${nombre} ${ apellido }.
              
//               A partir de ahora comienza el segundo proyecto JS,
//                seguimos en la simulación de una tienda virtual .`);

//       alert( `          En esta oportunidad vamos a buscar productos de una base de datos, para consultar su precio, 
//                   modelo, marca etc de un producto, en la siguiente ventana escriba el producto a consultar
//                   nuestra tienda es de ropa.`);

//       alert( `          estas son las opciones a consultar
//                   * camisa
//                   * pantalón   
//                   * gorra.
//                   * zapato
//                   * medias `);

// const productos = [
//       { id: 1, nombreProducto: "camisa", precio: 1000 },
//       { id: 2, nombreProducto: "pantalon", precio: 700 },
//       { id: 3, nombreProducto: "gorra", precio: 350 },
//       { id: 4, nombreProducto: "zapato", precio: 2800 },
//       { id: 5, nombreProducto: "medias", precio: 1730 },
     
//     ];
    
//     let nombreProducto = prompt("Ingrese el nombre del producto a consultar");
//     let producto;
    
//     for (const item of productos) {
//       if (item.nombreProducto === nombreProducto) {
//         producto = item;
//       }
//     }
    
//     if (producto) {
//       let mensaje = `
//         ID: ${producto.id}
//         Nombre: ${producto.nombreProducto}
//         $${producto.precio}
//       `;
    
//       alert(mensaje);
//     } else {
//       alert("El producto no se ha encontrado en la lista");
//     }

//     alert( ` muy bien continuemos`);

//     let nombreVerificar = prompt("Ingrese el nombre del producto a verificar");

// if (nombreProducto.includes(nombreProducto)) {
//   alert("El nombre buscado se encuentra en la lista");
// } else {
//   alert("El nombre buscado no se encuentra en la lista");
// };
// alert( ` muy bien continuemos, te volvere a pedir tus datos`);

// function Persona(nombre, edad, profesion) {
//       this.nombre = prompt("ingresa un nombre");
//       this.edad = prompt("ingresa una edad");
//       this.profesion = prompt("ingresa una profesion");
//       this.saludar = function() {
//         alert(`Bienvenido, ${this.nombre} ahora sabemos que tienes ${this.edad} años, y eres ${this.profesion} `);
//       };
//     }
    
   
//     const persona1 = new Persona(prompt("ingresa un apellido"));
//     persona1.saludar();

// alert (`Muy bien, ahora con el método Map tendremos varios ejemplos`)
    
//     const numeros = [
//     1, 2, 3, 4, 5
//     ];

//     const numerosDobles = numeros.map(numero => numero * 2 );
    
//     numerosDobles.forEach(numeroDoble => {
//       alert(`Número doble: ${numeroDoble}`);
//     });

//     alert (`seguimos, con el método Map y otro ejemplo`)

//     const frutas = ["Manzana", "Banana", "Naranja", "Uva"];

// const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());

// frutasMayusculas.forEach(frutaMayuscula => {
//   alert(`Fruta en mayúsculas: ${frutaMayuscula}`);
// });
// Swal.fire(
//   'Bienvenido!',
//   'A continuacion envianos tus datos!',
//   'success'
// )
const cursos = document.getElementById('productos');




//Creamos el Array de Objetos para los Servicios
const servicios = [
  { id: 1, Presentacion: '100gr', Fiambre: 'Mortadela', precio: 420 },
  { id: 2, Presentacion: '100gr', Fiambre: 'Salame', precio: 360 },
  { id: 3, Presentacion: '100gr', Fiambre: 'Queso de Maquina', precio: 320 },
];

let boton = '';
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('DOMContentLoaded',() => {
    servicios.forEach((servicio) => {
      mostrarServicios(servicio);
    });
  },
  false
);

function mostrarServicios(servicio) {
  const serviciosDivContainer = document.createElement('DIV');
  serviciosDivContainer.innerHTML = `
  <p>Id: ${servicio.id}</p>
  <h2>Presentacion: ${servicio.Presentacion}</h2>
  <h3>Fiambre: ${servicio.Fiambre}</h3>
  <b>$${servicio.precio}</b>
  <button type="button" data-servicioId="${servicio.id}" id="boton${servicio.id}">Agregar al Carrito</button>
  `;
  serviciosDivContainer.classList.add('caja');

  productos.appendChild(serviciosDivContainer);

  boton = document.getElementById(`boton${servicio.id}`);
  boton.addEventListener('click', agregar);
}

//Funcion agregar Servicios al Carrito
function agregar(e) {
  const servicioSeleccionado = servicios.filter((servicio) => servicio.id === parseInt(e.target.attributes['data-servicioId'].value))[0];
  //console.(servicioSeleccionado);

  //Verificar si el Servicio ya esta en el carrito
  const servicioEnCarrito = carrito.find(
    (item) => item.id === servicioSeleccionado.id
  );

  if (servicioEnCarrito) {
    //Si ya esta en el carrito, incrementa la cantidad en 1
    servicioEnCarrito.cantidad++;
  } else {
    //Si no está en el Carrito, lo agrega con una cantidad inicial de 1
    servicioSeleccionado.cantidad = 1;
    carrito.push(servicioSeleccionado);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));

  mostrarCarrito(true, carrito);
  calcularTotal();
}
// if(Notification.permission == 'granted') {
//   new Notification('Notificación', {
//       icon: '../img/instagram.png',
//       body: 'Avanzando con la 3ra Pre-entrega JS'
//   })
// }


//funcion para mostrar el carrito con los servicios seleccionados
function mostrarCarrito(refresh = false, carritoActualizado) {
  const carritoContainerDiv = document.querySelector('.carrito-container');
  const carritoList = document.querySelector('.carrito-list');

  if (refresh) {
    console.log(carritoList.lastChild);
    let elementAEliminar = carritoList.lastChild;
    while (elementAEliminar) {
      carritoList.removeChild(elementAEliminar);
      elementAEliminar = carritoList.lastChild;
    }
    carritoContainerDiv.classList.remove('carrito-container-active');
  }

  carritoActualizado.forEach((servicio) => {
    const carritoItemList = document.createElement('LI');
    carritoItemList.innerHTML += `
    <p>Id: ${servicio.id}</p>
    <p>Presentacion: ${servicio.Presentacion}</p>
    <p>Fiambre: ${servicio.Fiambre}</p>
    <p>Precio:$${servicio.precio * servicio.cantidad}</p>
    <p>Cantidad: ${servicio.cantidad}</p>
    <button type="button" class="eliminar-btn" data-servicioId="${
      servicio.id
    }" id="btn-eliminar${servicio.id}">Eliminar</button>
    
    `;

    carritoContainerDiv.classList.add('carrito-container-active');
    carritoList.appendChild(carritoItemList);
    carritoContainerDiv.appendChild(carritoList);
    document.body.appendChild(carritoContainerDiv);
    console.log(carrito.length);

    if (carrito.length === 0) {
      carritoContainerDiv.classList.remove('carrito-container-active');
      document.body.removeChild(carritoContainerDiv);
      return;
    }
    carritoItemList.addEventListener('click', eliminarDelCarrito); //Aca se crea el evento click cada vez que se crea el boton eliminar, se le pasa el evento por parametro para poder tener en tiempo real a lo que se le dio click
  });
}

//Funcion Eliminar S>ervicio del Carrito
const eliminarDelCarrito = (e) => {
  if (e.target.classList.contains('eliminar-btn')) {
    const carritoActualizado = carrito.filter((item) => item.id !== parseInt(e.target.attributes['data-servicioId'].value));
    carrito = [...carritoActualizado];

    localStorage.setItem('carrito', JSON.stringify([...carrito]));
  }

  mostrarCarrito(true, carrito);
  calcularTotal();
};

//Funcion Calcular Total
function calcularTotal() {
  precioTotal.innerHTML = '';
  let total = 0;
  carrito.forEach((servicio) => {
    total += servicio.precio * servicio.cantidad;
  });
  let totalElement = document.createElement('div');
  totalElement.innerHTML = ` <h4> Total: $${total}</h4>`;

  precioTotal.appendChild(totalElement);
}

mostrarCarrito(true, carrito);


//  formulario
 
 const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

//  Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    
    datos[e.target.id] = e.target.value;

   }



     
