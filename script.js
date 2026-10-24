/* console.log("HOLA MUNDO 1");
console.log("HOLA MUNDO 2");

// const nombre = prompt("Ingrese su nombre: ");
// console.log(nombre);
// alert(nombre);
const numero1 = Number(prompt("Ingresar un numero"));
const numero2 = Number(prompt("Ingresar un numero"));
suma = numero1 + numero2;
alert(suma);
 */
/* throw new Error("Error de prueba") */
// const precio_entrada = 40000;
// const cantidad_entrada = Number(prompt("Ingrese la cantidad de entradas"));
// const precio_combo = Number(prompt("Ingrese el precio del combo"));
// const cantidad_combo = Number(prompt("Ingrese la cantidad de combos"));
// A=[];
// gasto_entrada = precio_entrada * cantidad_entrada;
// gasto_comida = precio_combo * cantidad_combo;
// gasto_total = gasto_entrada + gasto_comida;
// A.push()
// console.log("El gasto en entradas es: ", A[0]);
// console.log("El gasto en combos es: ", gasto_comida);
// console.log("El gasto total es: ", gasto_total);
let producto = [];
function agregar_producto(item) {
  producto.push(item);
}
function eliminar_producto(item) {
  let productos_filtrados = producto.filter((producto) => {
    return item !== producto;
  });
  producto = productos_filtrados;
}
function lista_Producto() {
  producto.forEach((item) => {
    console.log(item);
  });
}
