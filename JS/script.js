/*document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  var tratamientoSeleccionado = document.getElementById("tratamiento").value;
  var precioTotal = parseFloat(document.getElementById("precio").value);
  var precioConDescuento = 0;
  
  if (precioTotal >= 5000) {
    precioConDescuento = precioTotal - (precioTotal * 0.2); // 20% de descuento
  } else {
    precioConDescuento = precioTotal; // Sin descuento
  }
  
  document.getElementById("precio-descuento").value = "$" + precioConDescuento.toFixed(2);
  
  console.log("El formulario se ha enviado correctamente");
});*/
/*
document.getElementById("calcular-descuento").onclick = function() {
  var tratamientoSeleccionado = document.getElementById("tratamiento").value;
  var precioTotal = parseFloat(document.getElementById("precio").value);
  var precioConDescuento = 0;

  if (precioTotal >= 5000) {
    precioConDescuento = precioTotal - (precioTotal * 0.2); // 20% de descuento
  } else {
    precioConDescuento = precioTotal; // Sin descuento
  }

  document.getElementById("precio-descuento").value = "$" + precioConDescuento.toFixed(2);

  console.log("El descuento se ha calculado correctamente");
};*/
/*
document.getElementById("calcular-descuento").onclick = function() {
  var tratamientoSeleccionado = document.getElementById("tratamiento").value;
  var precioTotal = parseFloat(document.getElementById("precio").value);
  var precioConDescuento = 0;

  if (precioTotal >= 5000) {
    precioConDescuento = precioTotal - (precioTotal * 0.2); // 20% de descuento
  } else {
    precioConDescuento = precioTotal; // Sin descuento
  }

  document.getElementById("precio-descuento").value = "$" + precioConDescuento.toFixed(2);

  // Mostrar el valor final con descuento en pantalla
  var precioDescuentoLabel = document.getElementById("precio-descuento-label");
  precioDescuentoLabel.innerText = "Precio con descuento: $" + precioConDescuento.toFixed(2);

  console.log("El descuento se ha calculado correctamente");
};*/

document.getElementById("calcular-descuento").onclick = function() {
  var tratamientoSeleccionado = document.getElementById("tratamiento").value;
  var precioTotal = parseFloat(document.getElementById("precio").value);
  var precioConDescuento = 0;
  
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
};





