//Funcion enviar datos
var documentosRegistrados = [];
function enviardatos(){


	var cc = document.getElementById("cc").value;
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var roles = document.getElementById("roles").value;

	if (documentosRegistrados.includes(cc)) {
        alert("El número de documento ya está registrado");
        return;
    }

    documentosRegistrados.push(cc);


	document.getElementById("tablaDatos").innerHTML +=
	"<tr><td>"+ cc +"</td><td>"+ nombre +"</td><td>"+ email +"</td><td>"+ password +"</td><td>"+ roles +"</td></tr>";
}