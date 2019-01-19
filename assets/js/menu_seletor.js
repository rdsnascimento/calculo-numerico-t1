$(document).ready( function(){	
	function valores_default(valor){ //seta os valores quando eh selecionado uma opcao no menu
		var a, b, e, iteracao;
		if(valor == 1){ //f(x) = x^3 - 9x + 5 
			a = 0.5;
			b = 1;
			e = 0.01; //precisao
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(e); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', false); //input iteracao
			$("#iteracao").prop('disabled', true); //input iteracao
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$('#check_bisseccao').prop('checked', true); //check para bissecao
			$("#precisao_iteracao").text("Precisão"); //check para precisao
			$('#check_precisao').prop('checked', true); //check para precisao

		} else if(valor == 2){ //f(x) = x^3 -9x + 3

			a = 0;
			b = 1;
			e = 0.0005; //precisao
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(e); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', false); //input iteracao
			$("#iteracao").prop('disabled', true); //input iteracao
			$("#tipo_metodo").text("Falsa Posição"); //falsa posicao
			$('#check_bisseccao').prop('checked', false); //check para falsa posicao
			$("#precisao_iteracao").text("Precisão"); //check para precisao
			$('#check_precisao').prop('checked', true); //check para precisao

		} else if(valor == 3){ // f(x) = e^x - 3x
			
			a = 0;
			b = 1;
			iteracao = 17;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Falsa Posição"); //falsa posicao
			$('#check_bisseccao').prop('checked', false); //check para falsa posicao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		} else if(valor == 4){
			
			a = 1;
			b = 2;
			iteracao = 28;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Falsa Posição"); //falsa posicao
			$('#check_bisseccao').prop('checked', false); //check para falsa posicao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		} else if(valor == 5){
			
			a = 0;
			b = 1;
			iteracao = 30;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$('#check_bisseccao').prop('checked', true); //check para bissecao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		} else if(valor == 6){
			
			a = 1;
			b = 2;
			iteracao = 18;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$('#check_bisseccao').prop('checked', true); //check para bissecao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		} else if(valor == 7){
			
			a = -1;
			b = 0;
			e = 0.01; //precisao
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(e); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', false); //input iteracao
			$("#iteracao").prop('disabled', true); //input iteracao
			$("#tipo_metodo").text("Falsa Posição"); //falsa posicao
			$('#check_bisseccao').prop('checked', false); //check para falsa posicao
			$("#precisao_iteracao").text("Precisão"); //check para precisao
			$('#check_precisao').prop('checked', true); //check para precisao

		} else if(valor == 8){

			a = -1;
			b = 0;
			iteracao = 20;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Falsa Posição"); //falsa posicao
			$('#check_bisseccao').prop('checked', false); //check para falsa posicao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		} else if(valor == 9){
			
			a = -1;
			b = 0;
			e = 0.01; //precisao
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(e); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', false); //input iteracao
			$("#iteracao").prop('disabled', true); //input iteracao
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$('#check_bisseccao').prop('checked', true); //check para bissecao
			$("#precisao_iteracao").text("Precisão"); //check para precisao
			$('#check_precisao').prop('checked', true); //check para precisao

		} else if(valor == 10){

			a = -1;
			b = 0;
			iteracao = 20;
			$("#a").val(a); //a
			$("#b").val(b); //b
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(iteracao); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$('#check_bisseccao').prop('checked', true); //check para bissecao
			$("#precisao_iteracao").text("Iteração"); //check para iteração
			$('#check_precisao').prop('checked', false); //check para precisao

		}
	}

	/* recebe a escolha do menu de exercícios */
	$("#menu").change(function () {
		$("#entradas").prop('disabled', false);
		$("#result").html('');
		$("#tabela").css("display", "none");
		valores_default($(this).val());
	});

	$("#check_bisseccao").click(function() {
		if($(this).is(":checked")){
			$("#tipo_metodo").text("Bissecção"); //bissecao
			$("#result").html('');
			$("#tabela").css("display", "none");
		} else {
			$("#tipo_metodo").text("Falsa Posição"); //bissecao
			$("#result").html('');
			$("#tabela").css("display", "none");
		}
	});

	$("#check_precisao").click(function() {
		if($(this).is(":checked")){
			$("#precisao_iteracao").text("Precisão"); //precisao
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', false); //input iteracao
			$("#iteracao").prop('disabled', true); //input iteracao
			$("#result").html('');
			$("#tabela").css("display", "none");
		} else {
			$("#precisao_iteracao").text("Iteração"); //iteração
			$("#precisao").val(''); //input precisao
			$("#iteracao").val(''); //input precisao
			$("#precisao").prop('disabled', true); //input iteracao
			$("#iteracao").prop('disabled', false); //input iteracao
			$("#result").html('');
			$("#tabela").css("display", "none");
		}
	});
});

function limpar(){
	$("#entradas").prop('disabled', true);
	$("#result").html('');
	$("#tabela").css("display", "none");
	$("#a").val(''); //a
	$("#b").val(''); //b
	$("#precisao").val(''); //input precisao
	$("#iteracao").val(''); //input precisao
	$("#precisao").prop('disabled', true); //input iteracao
	$("#iteracao").prop('disabled', true); //input iteracao
	$("#tipo_metodo").text("Bissecção"); //bissecao
	$('#check_bisseccao').prop('checked', false); //check para bissecao
	$("#precisao_iteracao").text("Precisão"); //check para precisao
	$('#check_precisao').prop('checked', false); //check para precisao
	$("#menu").val(0);
}
