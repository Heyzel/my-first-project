$(document).ready(function(){
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
});

window.addEventListener('load', function(){
	var logear = document.querySelector('#flogear');
	logear.addEventListener('submit', function(){
		var flag = false;
		var spam = document.querySelector('#fwarning');
		var spam2 = document.querySelector('#fwarning2');
		var user = document.querySelector('#fusuario').value;
		var contra = document.querySelector('#fcontraseña').value;
		var usuario = JSON.parse(localStorage.getItem(user));
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
			usuario = {username: user, contraseña: contra, correo: usuario.correo, ulti: usuario.ulti};
			localStorage.setItem('root', JSON.stringify(usuario));
			document.location.href = "about-me.html";
		}
	});
});
