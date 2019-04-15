'use strict'

window.addEventListener('load', function(){
	var usuario = JSON.parse(localStorage.getItem('Lastsession'));
	var cabecera = document.querySelector('#Lusuario');
	var info = document.querySelector('#info-usuario');
	if (usuario.bool){
		info.innerHTML = `Nombre de usuario: ${usuario.username}
						<br/>
						Correo: ${usuario.correo}`;
		cabecera.innerHTML = "Sesión iniciada<br/>"+usuario.username;
	}
	if (usuario.imagen){
		var img = document.querySelector(".imagen-usuario");
		img.src = "../imagenes/"+usuario.imagen;
	}

	var salir = document.querySelector('#logout');
	salir.addEventListener('click', function(){
		var fecha = new Date();
		fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" - "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
		usuario = {username: usuario.username,
			contraseña: usuario.contraseña,
			correo: usuario.correo,
			imagen: usuario.imagen,
			ultimaSesion: fecha,
			bool: false};
		localStorage.setItem(usuario.username, JSON.stringify(usuario));
		localStorage.removeItem('Lastsession');
		document.location.href = "../index.html";
	});
});