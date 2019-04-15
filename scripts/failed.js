'use strict'

var usuario = JSON.parse(localStorage.getItem('default'));
var user;
var contra;
var flag = false;
window.addEventListener('load', function(){
	var logear = document.querySelector('#flogear');
	logear.addEventListener('submit', function(){
		var flag = false;
		var spam = document.querySelector('#fwarning');
		var spam2 = document.querySelector('#fwarning2');
		user = document.querySelector('#fusuario').value;
		contra = document.querySelector('#fcontraseña').value;
		usuario = JSON.parse(localStorage.getItem(user));
		if(usuario == undefined){
			spam.style.display = "block";
		}
		if(usuario.username == user && usuario.contraseña != contra){
			spam2.style.display = "block";
		}
		if(usuario.username == user && usuario.contraseña == contra){
			flag = true;
		}
		if(flag){
			usuario = {username: user, contraseña: contra, correo: usuario.correo, imagen:"" ,bool: true};
			localStorage.setItem('Lastsession', JSON.stringify(usuario));
			document.location.href = "about-me.html";
		}
	});
});
