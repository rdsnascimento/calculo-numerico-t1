function calculo1(numero){ // x^3 -9x + 5
	return (Math.pow(numero,3) - 9 * numero + 5);
}

function calculo2(numero){ // x^3 -9x + 3
	return (Math.pow(numero,3) - 9 * numero + 3);
}

function calculo3(numero){ // e^x - 3x
	return (Math.exp(numero) - (3 * numero));
}

function calculo4(numero){ // e^x - 3x
	return (Math.exp(numero) - (3 * numero));
}

function calculo5(numero){ // e^x - 3x 
	return (Math.exp(numero) - (3 * numero));
}

function calculo6(numero){ //  e^x - 3x
	return (Math.exp(numero) - (3 * numero));
}

function calculo7(numero){ //  2,75^3 +18^2 -21^x-12;
	return (2.75 * Math.pow(numero,3) + 18 * Math.pow(numero,2) - 21 * numero - 12 );
}

function calculo8(numero){ // 2,75^3 +18^2 -21^x-12;
	return (2.75 * Math.pow(numero,3) + 18 * Math.pow(numero,2) - 21 * numero - 12 );
}

function bisseccao(){
	var k, fx, fa, texto, j;
	var a = parseFloat($("#a").val());
	var b = parseFloat($("#b").val());
	var e = parseFloat($("#precisao").val());
	var iteracao = parseInt($("#iteracao").val()); //input precisao
	
	texto = '';
	k = 1;

	function bisseccao_calculo(){
		x = (a + b) / 2;
		if($("#menu").val() == 1){ 
			fa = calculo1(a);
			fx = calculo1(x);
		} else if ($("#menu").val() == 2){
			fa = calculo2(a);
			fx = calculo2(x);
		} else if ($("#menu").val() == 3){
			fa = calculo3(a);
			fx = calculo3(x);
		} else if ($("#menu").val() == 4){
			fa = calculo4(a);
			fx = calculo4(x);
		} else if ($("#menu").val() == 5){
			fa = calculo5(a);
			fx = calculo5(x);
		} else if ($("#menu").val() == 6){
			fa = calculo6(a);
			fx = calculo6(x);
		} else if ($("#menu").val() == 7){
			fa = calculo7(a);
			fx = calculo7(x);
		} else if ($("#menu").val() == 8){
			fa = calculo7(a);
			fx = calculo7(x);
		} else if ($("#menu").val() == 9){
			fa = calculo8(a);
			fx = calculo8(x);
		} else if ($("#menu").val() == 10){
			fa = calculo8(a);
			fx = calculo8(x);
		}
		texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ a.toFixed(8) +"</td><td>"+ b.toFixed(8) +"</td><td>"+ x.toFixed(8) +"</td><td>"+ fx.toFixed(8) +"</td></tr>");
		if((fa*fx) > 0){
			a = x;
		}
		else{
			b = x;
		}
		k++;
	}

	//verifica se eh precisao ou iteracao
	if($("#check_precisao").is(":checked")){ //eh precisao
		do{
			bisseccao_calculo();
		} 
		while(Math.abs(fx) > e);
	} else { //eh iteracao
		for(j = 0; j < iteracao; j++){
			bisseccao_calculo();
		}
	}

	//mostra o resultado
	$("#tabela").css("display", "inline");
	$("#result").html(texto);
	
	return false;
}


function falsa_posicao(){
	var k, fx, fa, fb, texto, j;
	var a = parseFloat($("#a").val());
	var b = parseFloat($("#b").val());
	var e = parseFloat($("#precisao").val());
	var iteracao = parseInt($("#iteracao").val()); //input precisao
	texto = '';
	k = 1;

	function falsa_posicao_calculo(){
		if($("#menu").val() == 1){ 
			fa = calculo1(a);
			fb = calculo1(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo1(x);
		} else if ($("#menu").val() == 2){
			fa = calculo2(a);
			fb = calculo2(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo2(x);
		} else if ($("#menu").val() == 3){
			fa = calculo3(a);
			fb = calculo3(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo3(x);
		} else if ($("#menu").val() == 4){
			fa = calculo4(a);
			fb = calculo4(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo4(x);
		} else if ($("#menu").val() == 5){
			fa = calculo5(a);
			fb = calculo5(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo5(x);
		} else if ($("#menu").val() == 6){
			fa = calculo6(a);
			fb = calculo6(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo6(x);
		} else if ($("#menu").val() == 7){
			fa = calculo7(a);
			fb = calculo7(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo7(x);
		} else if ($("#menu").val() == 8){
			fa = calculo7(a);
			fb = calculo7(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo7(x);
		} else if ($("#menu").val() == 9){
			fa = calculo8(a);
			fb = calculo8(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo8(x);
		} else if ($("#menu").val() == 10){
			fa = calculo8(a);
			fb = calculo8(b);
			x = (a*fb - b*fa) / (fb - fa);
			fx = calculo8(x);
		}
		texto  += ("<tr><th scope='row'>"+ k +"</th><td>"+ a.toFixed(8) +"</td><td>"+ b.toFixed(8) +"</td><td>"+ x.toFixed(8) +"</td><td>"+ fx.toFixed(8) +"</td></tr>");
		if((fa*fx) > 0){
			a = x;
		}
		else{
			b = x;
		}
		k++;
	}

	//verifica se eh precisao ou iteracao
	if($("#check_precisao").is(":checked")){ //se for precisao
		do{
			falsa_posicao_calculo();		
		}
		while(Math.abs(fx) > e);
	} else { //se for iteracao
		for(j = 0; j < iteracao; j++){
			falsa_posicao_calculo();
		}
	}

	//mostra resultado
	$("#tabela").css("display", "inline");
	$("#result").html(texto);
	
	return false;
}

function main(){
	if(!($("#menu").val())){
		$("#menu").focus();
	} else {
		if(!($("#a").val())){
			$("#a").focus();
		} else if (!($("#b").val())){
			$("#b").focus();
		} else {
			if($("#check_bisseccao").is(":checked")){ //se for bisseccao
				bisseccao();
			} else { //se for falsa posicao
				falsa_posicao();
			}
		}
	}
}