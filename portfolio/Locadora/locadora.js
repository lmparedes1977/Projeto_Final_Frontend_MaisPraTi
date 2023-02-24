function validaForm() {
	
	let validaCodigo = document.forms["form-cadastro"]["codigo"].value;
	let validaData = document.forms["form-cadastro"]["data"].value;
	let validaTitulo = document.forms["form-cadastro"]["titulo"].value;
	let validaAtor = document.forms["form-cadastro"]["ator"].value;
	let validaNota = document.forms["form-cadastro"]["nota"].value;
	let validaRadio = document.forms["form-cadastro"]["radio"].value;
	let validaDiretor = document.forms["form-cadastro"]["diretor"].value;
	
	if (!validaCodigo) {
		alert("O código deve ser preenchido.");
		return false;	
	} 
	if (!validaData) {
		alert("A data deve ser preenchida.");
		return false;
	} 
	if (!validaTitulo) {
		alert("O título deve ser preenchido.");
		return false;
	} 
	if (!validaNota) {
		alert("A nota deve ser preenchida.");
		return false;
	} 
	if (!validaAtor) {
		alert("O Ator/Atriz principal deve ser preenchido.");
		return false;
	}
	if (!validaDiretor) {
		alert("O Diretor deve ser preenchido.");
		return false;
	} 
	if (!validaRadio) {
		alert("O gênero deve ser preenchido.");
		return false;
	}
		
}

function insere() {
	
	let cod = document.forms["form-cadastro"]["codigo"].value;
	let data = document.forms["form-cadastro"]["data"].value;
	let tit = document.forms["form-cadastro"]["titulo"].value;
	let ator = document.forms["form-cadastro"]["ator"].value;
	let nota = document.forms["form-cadastro"]["nota"].value;	
	let dir = document.forms["form-cadastro"]["diretor"].value;
	let rad = document.forms["form-cadastro"]["radio"].value;
	let insert = window.document.getElementById("inserir");

	insert.innerHTML = `<tr><th scope="row">${cod}</th><td>${tit}</td><td>${dir}</td><td>${data}</td><td>${rad}</td><td>${ator}</td><td>${nota}</td></tr>`	
}

