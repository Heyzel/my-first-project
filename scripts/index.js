'use strict'

var usuario = {username:'default',contraseña:' ',correo:' '};
localStorage.setItem(0,JSON.stringify(usuario));
var user;
var contra;
var flag = false;
window.addEventListener('load', function(){
	document.location.href.reload();
	var logear = document.querySelector('#logear');
	logear.addEventListener('submit', function(){
		var flag = false;
		var spam = document.querySelector('#warning');
		var spam2 = document.querySelector('#warning2');
		user = document.querySelector('#usuario').value;
		contra = document.querySelector('#contraseña').value;
		usuario = JSON.parse(localStorage.getItem(user));
		if(usuario == undefined){
			spam.style.display = "block";
		}
		if(usuario.username == user && usuario.contraseña == contra){
			spam2.style.display = "block";
		}
		if(usuario.username == user && usuario.contraseña == contra){
			flag = true;
		}
		if(flag){
			usuario = {username: user, contraseña: contra, correo: usuario.correo, imagen:"" ,bool: true};
			localStorage.setItem(usuario.username, JSON.stringify(usuario));
			//location.href.reload();
		}
	});
});
