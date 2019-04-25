'use strict'

var usuario;
window.addEventListener('load', function(){

	var tema = $("#theme-selector");

	if(localStorage.getItem("tema") == "morado"){
		tema.attr("href","../estilos/purple.css");
	}else if(localStorage.getItem("tema") == "azul"){
		tema.attr("href","../estilos/blue.css");
	}else if(localStorage.getItem("tema") == "naranja"){
		tema.attr("href","../estilos/orange.css");
	}else{
		tema.attr("href","../estilos/purple.css");
	}

	$("#purple").click(function(){
		tema.attr("href","../estilos/purple.css");
		localStorage.setItem("tema","morado");
	});
	$("#blue").click(function(){
		tema.attr("href","../estilos/blue.css");
		localStorage.setItem("tema","azul");
	});
	$("#orange").click(function(){
		tema.attr("href","../estilos/orange.css");
		localStorage.setItem("tema","naranja");
	});
	
	var formulario = document.querySelector('#reg');
	formulario.addEventListener('submit', function(event){

		var flag = true;

		var campo_usuario = document.querySelector('#Username'); // Campo de usuario
		var username = campo_usuario.value; // Valor del campo
		var userp = document.querySelector('.usu'); // Parrafo de usuario

		var campo_contraseña = document.querySelector('#pass');
		var contraseña = campo_contraseña.value;
		var contrap = document.querySelector('.contra');

		var campo_contraseña2 = document.querySelector('#repass');
		var contraseña2 = campo_contraseña2.value;

		var campo_correo = document.querySelector('#correo');
		var correo = campo_correo.value;
		var correop = document.querySelector('.mail');

		if(contraseña != contraseña2){
			flag = false;
			contrap.style.display = "block";
			campo_contraseña.addEventListener('keypress', function(){
				contrap.style.display = "none";
			});
			campo_contraseña2.addEventListener('keypress', function(){
				contrap.style.display = "none";
			});
		}
		localStorage.getItem(username);
		usuario = JSON.parse(localStorage.getItem(username));
		if(localStorage.getItem(username)){
			flag = false;
			userp.style.display = "block";
			campo_usuario.addEventListener('keypress', function(){
				userp.style.display = "none";
			});
		}
		if(localStorage.getItem(username)){
			flag = false;
			correop.style.display = "block";
			campo_correo.addEventListener('keypress', function(){
				correop.style.display = "none";
			});
		}
		if(flag){
			usuario = {username, contraseña, correo};
			localStorage.setItem(username,JSON.stringify(usuario));
			alert('Se ha registrado exitosamente');
			document.location.href = "../index.html"
		}
	});
});