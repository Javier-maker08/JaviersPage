function datos(e){
  e.preventDefault();

  var user = ['gato@correo.com' , 'perro@correo.com' ,
   'tomate@correo.com'];
   var password = ['A1234' , 'B1234' , 'C1234'];

   var correo = document.querySelector("#correo").value;
   var pass = document.querySelector("#password").value;
   var mensaje = document.querySelector("#mensaje");

   for (var i = 0; i < 2; i++) {
     if (correo === user[i]) {

       if (pass === password[i]) {
         mensaje.textContent = "Bienvenido!";
       }else {
         mensaje.textContent = "Contraseña incorrecta, vuelve a intentarlo";
       }

     }
   }

}
var boton = document.querySelector("#iniciar");
boton.addEventListener("click", datos);
