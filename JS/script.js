
/*
document.getElementById("calcular-descuento").onclick = function() {
  let tratamientoSeleccionado = document.getElementById("tratamiento").value;
  let precioTotal = parseFloat(document.getElementById("precio").value);
  let precioConDescuento = 0;
  
  var mensajeAviso = "";

  if (precioTotal >= 5000) {
    precioConDescuento = precioTotal - (precioTotal * 0.2); // 20% de descuento
    mensajeAviso = "Se aplicó un descuento del 20%.";
  } else {
    precioConDescuento = precioTotal; // Sin descuento
    mensajeAviso = "No se aplicó ningún descuento.";
  }

  document.getElementById("precio-total").value = "$" + precioConDescuento.toFixed(2);

  var avisoElement = document.getElementById("aviso");
  avisoElement.innerText = mensajeAviso;

  console.log("El descuento se ha calculado correctamente");
}; */

function calcularDescuento() {
  let tratamientoSeleccionado = document.getElementById("tratamiento").value;
  let cant = parseFloat(document.getElementById("cant").value);
  let preciototal = 0
  let precioConDescuento = 0;

  if (cant >= 2) {
    precioTotal = (tratamientoSeleccionado * cant)
    precioConDescuento = precioTotal - (precioTotal * 0.2)
    document.getElementById("precio-total").value = precioConDescuento 
  }
  else {
    precioTotal = (tratamientoSeleccionado * cant)
    document.getElementById("precio-total").value = precioTotal 
  }
} 




