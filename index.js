// boton hamburguesa 
function Mostrar(){
    var menu = document.getElementById("menu-mobile");        
    if(menu.style.display=="block"){
        menu.style.display="none"
    }
    else{
        menu.style.display="block"
    }
    var btn_menu = document.getElementById("btn-menu"); 
    btn_menu.style.alignItems="start"
    var btn_user = document.getElementById("btn-user"); 
    btn_user.style.display="none";
    // var header = document.getElementById("header"); 
    // header.style.background="#F4E6E6"
}
function Slider(){
    var div_img = document.getElementById("img-container-main"); 
    div_img.style.backgroundImage="https://www.xtrafondos.com/descargar.php?id=3377&resolucion=5120x2880"
}
function EnviarWsp(){
    document.window.location = "https://api.whatsapp.com/send?phone=+51977818257&text=Hola%20Great%20Master,%20quiero%20informaci%C3%B3n%20sobre%20las%20pizzas%20%F0%9F%8D%95%F0%9F%98%8E.";
}
function CerrarMenuBurger(){
    var menu = document.getElementById("menu-mobile");
    menu.style.display="none";
    var btn_user = document.getElementById("btn-user");
    btn_user.style.display="flex";
}
// funciones para obtener descripcion de la pizza
function ObtenerDescripcionHawaiana(){
    var descripcion_card = document.getElementById("p-descripcionHawaiana").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/haw_700x.jpg?v=1542162816')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-hawaiana").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionAmericana(){
    var descripcion_card = document.getElementById("p-descripcionAmericana").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/ame_295x.jpg?v=1542162562')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-americana").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionPepperoni(){
    var descripcion_card = document.getElementById("p-descripcionPepperoni").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/pep_295x.jpg?v=1542162991')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-pepperoni").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionMozzarella(){
    var descripcion_card = document.getElementById("p-descripcionMozzarella").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/pes_295x.jpg?v=1542163011')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-mozzarella").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionVegetariana(){
    var descripcion_card = document.getElementById("p-descripcionVegetariana").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/tbc_700x.jpg?v=1561689834')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-vegetariana").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionClasica(){
    var descripcion_card = document.getElementById("p-descripcionClasica").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/mar_700x.jpg?v=1542162961')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-clasica").textContent;
    document.getElementById("form-precio").innerText = precio;
}
function ObtenerDescripcionSuprema(){
    var descripcion_card = document.getElementById("p-descripcionSuprema").textContent;
    document.getElementById("form-descripcion").innerText=descripcion_card;
    var imagen = document.getElementById("img-container-form");
    imagen.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0012/4862/4736/products/sup_295x.jpg?v=1605976169')";
    var formulario = document.querySelector("form");
    formulario.style.display="flex";
    // obteniendo el precio del card y mostrando en el form
    var precio = document.getElementById("precio-suprema").textContent;
    document.getElementById("form-precio").innerText = precio;
}

// boton de más en el formulario
function Aumentar(){
    var inputcantidad = document.getElementById("cantidad");
    var cantidad = inputcantidad.value;
    cantidad++
    document.getElementById("cantidad").value = cantidad;

    var precio = document.getElementById("form-precio").textContent;




    var inputcantidad = document.getElementById("cantidad");
    var cantidad = inputcantidad.value;
    document.getElementById("form-precio").innerHTML = "S/."+cantidad * 50 ;
    
    if(cantidad <= 0){
        document.getElementById("form-precio").innerHTML = "S/.0" ;
    }
    if(cantidad <= 0){
        document.getElementById("cantidad").value = 0;
    }
}
// boton de menos en el formulario
function Disminuir(){
    var inputcantidad = document.getElementById("cantidad");
    var cantidad = inputcantidad.value;
    document.getElementById("cantidad").value = cantidad -1;

    var inputcantidad = document.getElementById("cantidad");
    var cantidad = inputcantidad.value;
    document.getElementById("form-precio").innerHTML = "S/."+cantidad * 50;

    if(cantidad <= 0){
        document.getElementById("form-precio").innerHTML = "S/.0" ;
    }
    if(cantidad <= 0){
        document.getElementById("cantidad").value = "0";
    }
}
function Broma(){
    window.location = "./jajaEsBroma.html";
}
