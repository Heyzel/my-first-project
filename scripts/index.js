$(document).ready(function(){
	$('.slider').bxSlider({
		auto: true,
		autoControls: false,
		stopAutoOnClick: true,
		pager:true
	});
	var tema = $("#theme-selector");

	if(localStorage.getItem("tema") == "morado"){
		tema.attr("href","estilos/purple.css");
	}else if(localStorage.getItem("tema") == "azul"){
		tema.attr("href","estilos/blue.css");
	}else if(localStorage.getItem("tema") == "naranja"){
		tema.attr("href","estilos/orange.css");
	}else{
		tema.attr("href","estilos/purple.css");
	}

	$("#purple").click(function(){
		tema.attr("href","estilos/purple.css");
		localStorage.setItem("tema","morado");
	});
	$("#blue").click(function(){
		tema.attr("href","estilos/blue.css");
		localStorage.setItem("tema","azul");
	});
	$("#orange").click(function(){
		tema.attr("href","estilos/orange.css");
		localStorage.setItem("tema","naranja");
	});

	$("#scroll").click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 400);
		return false;
	});

	if(localStorage.getItem('root')){
		var usuario = JSON.parse(localStorage.getItem('root'));
		$('#login').hide();
		$('aside p').html("<strong>Bienvenido "+usuario.username+"</strong>")
		$('aside').append("<a href='#' id = 'salir' class = 'botonsito'>Cerrar sesión</a>");
		$('#salir').click(function(){
			var fecha = new Date();
			fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" - "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
			usuario = {username: usuario.username, contraseña: usuario.contraseña, correo: usuario.correo, ulti: fecha};
			localStorage.setItem(usuario.username, JSON.stringify(usuario));
			localStorage.removeItem('root');
			location.reload();
		});
		$("#about-fail").attr("href","html/about-me.html");
	}else{
		$("#about-fail").attr("href","html/failed.html");
	}

	document.querySelector("#logear").addEventListener('submit', function(){
		var flag = false;
		var spam = document.querySelector('#warning');
		var spam2 = document.querySelector('#warning2');
		var user = document.querySelector('#usuario').value;
		var contra = document.querySelector('#contraseña').value;
		var usuario = JSON.parse(localStorage.getItem(user));
		if(usuario == undefined || usuario == null){
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
			$('#login').hide();
			$('aside p').html("<strong>Bienvenido "+usuario.username+"</strong>")
			$('aside').append("<a href='#' id = 'salir' class = 'botonsito'>Cerrar sesión</a>");
			$('#salir').click(function(){
				var fecha = new Date();
				fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" - "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
				usuario = {username: user, contraseña: contra, correo: usuario.correo, ulti: fecha};
				localStorage.setItem(usuario.username, JSON.stringify(usuario));
				localStorage.removeItem('root');
				location.reload();
			});
		}
	});
	$("#logout").click(function(){
		var user = JSON.parse(localStorage.getItem('root'));
		localStorage.removeItem("root");
		var fecha = new Date();
		fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
		user = {username: user.username, contraseña: user.contraseña, correo: user.correo, ulti:fecha};
		localStorage.setItem(user.username, JSON.stringify(user));
		location.reload();
	});

});