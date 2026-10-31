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
let product_list = [];
let product = "";
function agregar_producto(item) {
  if (item.trim() == "") return;
  product_list.push(item);
  console.log(product_list);
}
function eliminar_producto(item) {
  let productos_filtrados = product_list.filter((producto) => {
    return item !== producto;
  });
  product_list = productos_filtrados;
  console.log(product_list);
}
function lista_Producto(prod) {
  // console.log(product_list);
  list.innerHTML = "";
  product_list.forEach((item) => {
    // if (prod !== item) return;
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
function limpiar() {
  input.value = "";
}
const input = document.getElementById("input_product");
const button_agg = document.getElementById("btn_product");
const list = document.getElementById("product_list");
const button_delete = document.getElementById("btn_delete");

input.addEventListener("input", () => {
  product = input.value;
  // console.log(product);
});
button_agg.addEventListener("click", () => {
  agregar_producto(product);
  lista_Producto(product);
  limpiar();
});
limpiar();
button_delete.addEventListener("click", () => {
  eliminar_producto(product);
  lista_Producto();
  limpiar();
});
limpiar();
