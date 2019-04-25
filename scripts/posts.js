function vermas(boton, parrafo){
	var b = document.getElementById(boton);
	var p = document.getElementById(parrafo);
	if(p.style.display == 'none'){
		p.style.display = 'block';
		b.innerHTML = "Ver menos";
	}else{
		p.style.display = 'none';
		b.innerHTML = "Ver más";
	}
}

function postear(){
	var  seccion = $("section");
	if(localStorage.getItem('root')){
		$('#post').hide();
		seccion.append("<form id = 'logear' onsubmit = 'return false;'><label for = 'title'><b>Titulo: </b></label><input type = 'text' id = 'title'/><label for = 'content'><b>Descripción: </b></label><textarea id = 'content'></textarea><input type = 'submit' class = 'botonsito' value = 'Postear'/></form>");
		document.querySelector('#logear').addEventListener('submit', function(){
			var title = document.querySelector('#title').value;
			var content = document.querySelector('#content').value;
			var fecha = new Date();
			fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
			var post = {
				titulo: title,
				contenido: content,
				publicacion: fecha,
				autor: localStorage.getItem('root').username
			};
			seccion.prepend('<article class = "articles"><h2>'+post.titulo+'</h2><p class = "fecha">Publicado el dia:'+post.publicacion+'</p><p class = "pp">'+post.contenido+'</p></article>');
			$('#logear').hide();
		});
	}else{
		$('#warning').css("display","block");
		$('#warning').fadeToggle('slow', function(){
			$('#warning').css("display","none");
		});
	}
};

if(localStorage.getItem('root')){
	$("#about-fail").attr("href","html/about-me.html");
}else{
	$("#about-fail").attr("href","html/failed.html");
}

window.addEventListener('load',function(){
	var publicaciones = document.getElementsByClassName("fecha");
	var fecha = new Date();
	fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
	for(let i in publicaciones){
		publicaciones[i].innerHTML += fecha;
	}
	var tema = $("#theme-selector");

	$("#logout").click(function(){
		localStorage.removeItem("root");
		document.location.href = "../index.html"
	})

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
	$("#logout").click(function(){
		var user = JSON.parse(localStorage.getItem('root'));
		localStorage.removeItem("root");
		var fecha = new Date();
		fecha = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
		user = {username: user.username, contraseña: user.contraseña, correo: user.correo, ulti:fecha};
		localStorage.setItem(user.username, JSON.stringify(user));
		document.location.href = "../index.html"
	});

});