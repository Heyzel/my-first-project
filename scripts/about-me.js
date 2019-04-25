$(document).ready(function(){
	if(!(localStorage.getItem('root'))){
		document.location.href = "failed.html"
	}
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
	var user = JSON.parse(localStorage.getItem("root"));
	if(!user.ulti){
		user = {username: user.username, contraseña: user.contraseña, correo: user.correo, ulti: "-"};
	}
	$("#misdatos").append("<p>Nombre de usuario: "+user.username+"<br/>Correo: "+user.correo+"<br/>Ultima sesion: "+user.ulti+"</p>");
	$("#acordeonsito").accordion({collapsible: true});

	$("#changepass").submit(function(){
		var pass = $("#pass").val();
		var rpass = $("#repass").val();
		if(pass == "" || pass == null || rpass == "" || rpass == null){
			alert("Complete todos los campos");
		}else if(pass == rpass){
			user = {username: user.username, contraseña: pass, correo: user.correo, ulti: "-"};
			localStorage.setItem("root", JSON.stringify(user));
			localStorage.setItem(user.username, JSON.stringify(user));
			alert("Contraseña actualizada exitosamente.");
			location.reload();
		}else{
			alert("Las contraseñas no coinciden");
		}
	});
	$("#changemail").submit(function(){
		var email = $("#correo").val();
		if(email == "" || email == null || email == undefined){
			alert("No puede dejar el campo vacío");
		}else{
			user = {username: user.username, contraseña: user.contraseña, correo: email, ulti: "-"};
			localStorage.setItem("root", JSON.stringify(user));
			localStorage.setItem(user.username, JSON.stringify(user));
			alert("Correo eléctronico cambiado exitosamente");
			location.reload();
		}
	});
	$("#changename").submit(function(){
		var nombre = $("#nombre").val();
		if(nombre = "" || nombre == null || nombre == undefined){
			alert("No puede dejar el campo vacío");
		}else{
			user = {username: nombre, contraseña: user.contraseña, correo: user.correo, ulti: "-"};
			localStorage.setItem("root", JSON.stringify(user));
			localStorage.setItem(user.username, JSON.stringify(user));
			alert("Nombre de usuario modificado exitosamente");
			location.reload();
		}
	});
	$("#logout").click(function(){
		localStorage.removeItem("root");
		var fecha = new Date();
		fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
		user = {username: user.username, contraseña: user.contraseña, correo: user.correo, ulti:fecha};
		localStorage.setItem(user.username, JSON.stringify(user));
		document.location.href = "../index.html"
	});
});