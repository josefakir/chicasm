var URL_WS = "https://graphicsandcode.com/proyectos/api.chicasm.mx/";
function leadingZero(value) {
	if (value < 10) {
		return "0" + value.toString();
	}
	return value.toString();
}
function imageExists(image_url){

	var http = new XMLHttpRequest();

	http.open('HEAD', image_url, false);
	http.send();

	return http.status != 404;

}
$.validator.addMethod("pwcheck", function(value) {
   return /^[A-Za-z0-9\d=!\-@._*]{6,}$/.test(value) // consists of only these
       && /[a-z]/.test(value) // has a lowercase letter
       && /\d/.test(value) // has a digit
       && /[A-Z]/.test(value) // has a uppercase letter
   });

var getDates = function(startDate, endDate) {
	var dates = [],
	currentDate = startDate,
	addDays = function(days) {
		var date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	};

	while (currentDate <= endDate) {
		anio = currentDate.getFullYear();
		mes = (parseInt(currentDate.getMonth())+1);
		dia = currentDate.getDate();
		fecha = anio+'-'+leadingZero(mes)+'-'+leadingZero(dia);
		dates.push(fecha);
		currentDate = addDays.call(currentDate, 1);
	}
	return dates;
};
var app = new Framework7({
	view : {
		iosDynamicNavbar: false
	},
	root: '#app',
	theme: 'ios',
	name: 'Chicas M',
	id: 'com.graphicsandcode.test',
	panel: {
		swipe: 'left',
	},
	routes: [
	{
		path: '/perfil/',
		url: 'perfil.html',
	},
	{
		path: '/resumen/',
		url: 'resumen.html',
	},
	{
		path: '/agregarPastilla/',
		url: 'agregarPastilla.html',
	},
	{
		url: 'pastillasMensual.html',
		alias: '/pastillasMensual/',
		path: '/pastillasMensual/:fecha?/',
	},
	{
		path: '/mensual/',
		url: 'mensual.html',
	},
	{
		path: '/configuracion/',
		url: 'configuracion.html',
	},
	{
		path: '/configuracion1/',
		url: 'configuracion1.html',
	},
	{
		path: '/misTickets/',
		url: 'misTickets.html',
	},
	{
		path: '/configuracion2/',
		url: 'configuracion2.html',
	},
	{
		path: '/configuracion3/',
		url: 'configuracion3.html',
	},
	{
		path: '/configuracion4/',
		url: 'configuracion4.html',
	},
	{
		path: '/configuracion5/',
		url: 'configuracion5.html',
	},
	{
		path: '/configuracion6/',
		url: 'configuracion6.html',
	},
	{
		url: 'dia.html',
		alias: '/dia/',
		path: '/dia/:fecha?/',
	},
	{
		url: 'sexo.html',
		alias: '/sexo/',
		path: '/sexo/:fecha?/',
	},
	{
		alias: '/animo/',
		path: '/animo/:fecha?/',
		url: 'animo.html',
	},
	{
		alias: '/pastillas/',
		path: '/pastillas/:fecha?/',
		url: 'pastillas.html',
	},
	{
		alias: '/sintomas/',
		path: '/sintomas/:fecha?/',
		url: 'sintomas.html',
	},
	{
		path: '/mostrarOcultar/',
		url: 'mostrarOcultar.html',
	},

	{
		path: '/adminCuenta/',
		url: 'adminCuenta.html',
	},

	{
		path: '/duracionCicloPeriodo/',
		url: 'duracionCicloPeriodo.html',
	},

	{
		path: '/codigoAcceso/',
		url: 'codigoAcceso.html',
	},
	{
		path: '/interaccionMedicamentosa/',
		url: 'interaccionMedicamentosa.html',
	},
	{
		path: '/recordatorios/',
		url: 'recordatorios.html',
	},
	{
		path: '/recMenstruacion/',
		url: 'recMenstruacion.html',
	},
	{
		path: '/recOvulacion/',
		url: 'recOvulacion.html',
	},
	{
		path: '/recPechos/',
		url: 'recPechos.html',
	},
	{
		path: '/recPeso/',
		url: 'recPeso.html',
	},
	{
		path: '/recBBT/',
		url: 'recBBT.html',
	},
	{
		path: '/recParche/',
		url: 'recParche.html',
	},
	{
		path: '/recNuvaR/',
		url: 'recNuvaR.html',
	},
	{
		path: '/recPildora/',
		url: 'recPildora.html',
	},
	{
		path: '/recDepo/',
		url: 'recDepo.html',
	},
	{
		path: '/recContraceptiva/',
		url: 'recContraceptiva.html',
	},
	{
		path: '/recParche/',
		url: 'recParche.html',
	},
	{
		path: '/recDepo/',
		url: 'recDepo.html',
	},
	{
		path: '/recIUD/',
		url: 'recIUD.html',
	},
	{
		path: '/menu/',
		url: 'menu.html',
	},
	],
});
function registroAjax(metodo,valor,nombre_variable,fecha,id_usuario){
	var formData = new FormData();
	formData.append(nombre_variable,valor);  
	formData.append('fecha',fecha);  
	formData.append('id_usuario',id_usuario);  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		type : 'POST',
		url : URL_WS+metodo,
		data : formData,
		processData: false,
		contentType: false,
	});
}

function eliminar_parametros(fecha,id_usuario){
	var formData = new FormData();
	formData.append('fecha',fecha);  
	formData.append('id_usuario',id_usuario);  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		type : 'POST',
		url : URL_WS+'eliminar-parametros',
		data : formData,
		processData: false,
		contentType: false,
	});
}
var mainView = app.views.create('.view-main', {
	iosDynamicNavbar: false,
});
function traducir_mes(mes){
	switch(mes) {
		case '01':
		return "ENERO";
		break;
		case '02':
		return "FEBRERO";
		break;
		case '03':
		return "MARZO";
		break;
		case '04':
		return "ABRIL";
		break;
		case '05':
		return "MAYO";
		break;
		case '06':
		return "JUNIO";
		break;
		case '07':
		return "JULIO";
		break;
		case '08':
		return "AGOSTO";
		break;
		case '09':
		return "SEPTIEMBRE";
		break;
		case '10':
		return "OCTUBRE";
		break;
		case '11':
		return "NOVIEMBRE";
		break;
		case '12':
		return "DICIEMBRE";
		break;
	}
}

$(document).on('page:init', function (e) {
	switch(app.views.main.router.currentPageEl.dataset.name) {
		case 'misTickets':
			$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url: URL_WS+'tickets-enviados/'+localStorage.getItem('userid'),
			success : function(data){
				$('#ticketsenviados span').html(data.tickets_enviados);
				$('#codigosredimidos span').html(data.tickets_redimidos);
			}
		});
		break;
		case 'agregarPastilla':
		var cal1 = app.calendar.create({
			inputEl: '#fecha1'
		});
		var cal2 = app.calendar.create({
			inputEl: '#fecha2'
		});
		$( "#alarm" ).timeDropper({
			'format' : 'H:mm'
		}
		);
		break;	
		case 'pastillasMensual':
		var fecha = app.view.main.router.currentRoute.params.fecha;
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'pastilla/'+localStorage.getItem('userid'),
			success : function(data){
				$('#resumenPeriodos').html('');
				output = '';
				$.each( data, function( key, value ) {
					var fecha_inicial = value.fecha_inicial;
					var fecha_final = value.fecha_final;
					if(fecha_final === undefined || fecha_final === null){
						fecha_final = 'Indefinido';
					}
					var nombre_pastilla = value.nombre_pastilla
					output += '<div class="contInfoPastilla"><span class="horaTomaP">'+fecha_inicial+' <-> '+fecha_final+'</span><br><span class="nombreMed">'+nombre_pastilla+'</span><br><span class="nombreMed chico"></span><br><a href="" class="btn_eliminar_medicamento" data-id="'+value.id+'">ELIMINAR MEDICAMENTO</a></div>';
				});
				$('#contenidoMedicamentos').html(output);
			}
		});
		break;
		case 'resumen' :
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'estadisticas/'+localStorage.getItem('userid'),
			success : function(data){
				$('#primerCiclo').html(data.primer_ciclo+'d');
				$('#ultimos3').html(data.duracion_u3+'d');
				$('#ultimos6').html(data.duracion_u6+'d');
				$('#ultimos9').html(data.duracion_u9+'d');
				$('#ultimos12').html(data.duracion_u12+'d');
				$('#mascorto').html(data.ciclo_mas_corto+'d');
				$('#maslargo').html(data.ciclo_mas_largo+'d');
				$('#duracionmediamenstruacion').html(data.promedio_menstruacion+'d');

			}
		});

		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'resumen-ciclos/'+localStorage.getItem('userid'),
			success : function(data){
				$('#resumenPeriodos').html('');
				$.each( data, function( key, value ) {
					
					output = '<div class="itResumen"><span class="rR ciclo">'+value.fecha_inicial+' - '+value.fecha_final+'</span></div>'
					$('#resumenPeriodos').append(output);
				});
			}
		});
		break;
		case 'recordatorios' :
		if(localStorage.getItem('notifmenstruacion')=='true'){
			$( "#checkboxMenstruacion" ).prop( "checked", true );
		}
		if(localStorage.getItem('notifovulacion')=='true'){
			$( "#checkboxOvulacion" ).prop( "checked", true );
		}
		if(localStorage.getItem('notifanticonceptiva')=='true'){
			$( "#checkboxAnticonceptiva" ).prop( "checked", true );
		}
		if(localStorage.getItem('notifautoexamen')=='true'){
			$( "#checkboxAutoexamen" ).prop( "checked", true );
		}
		break;
		case 'duracionCicloPeriodo' :
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'configuracion/'+localStorage.getItem('userid'),
			success : function(data){
				ciclo_medio = data[0].ciclo_medio;
				duracion_media = data[0].duracion_media;
				pickerCiclo.setValue([ciclo_medio]);
				pickerPeriodo.setValue([duracion_media]);
			}
		});
		break;
		case 'perfil':
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'edad/'+localStorage.getItem('userid'),
			success : function(data){
				if(data!=null){
					$('#input_edad').val(data);
				}
			}
		});

		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'peso_inicial/'+localStorage.getItem('userid'),
			success : function(data){
				if(data!=null){
					$('#input_peso_inicial').val(data);
				}
			}
		});
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			url : URL_WS+'foto_perfil/'+localStorage.getItem('userid'),
			success : function(data){
				console.log(data);
				if(data!=null){
					
					$('#avatar').attr('src',data);
					$('#yaImagen').show();
				}else{
					$('#yaImagen').hide();
					$('#formCargarFotoPerfil').show();
				}
			}
		});
		break;
		case 'mensual':
		//app.navbar.show('.navbar', false);
		var calendario = $('#calendar').fullCalendar({
			locale : 'es',
			dayClick: function(date, jsEvent, view) {
				mainView.router.navigate('/dia/'+date.format()+'/');
			}
		});
		//traer predicciones
		$.ajax({
			url : URL_WS+'predicciones/'+localStorage.getItem('userid'),
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			success : function(data){
				$("td").removeClass('periodoActivo');
				$("td").removeClass('diaFertil');
				$("td").removeClass('diaOvulacion');
				periodos = data.periodos;
				fecha_ovulacion = data.fecha_ovulacion;
				$.each( periodos, function( key, value ) {
					fecha_inicial = value.fecha_inicial;
					fecha_final = value.fecha_final;
					fecha_inicial = fecha_inicial.split('-');
					fecha_final = fecha_final.split('-');
					var dates = getDates(new Date(fecha_inicial[0],fecha_inicial[1]-1,fecha_inicial[2]), new Date(fecha_final[0],fecha_final[1]-1,fecha_final[2])); 
					$.each( dates, function( key2, value2 ) {
						$("td[data-date='"+value2+"']").addClass('periodoActivo');
					});
				});
				var fecha_fecha_dia_fertil_1 = String(data.dia_fertil_1).split('-');
				var fecha_fecha_dia_fertil_2 = String(data.dia_fertil_2).split('-');
				var dates2 = getDates(new Date(fecha_fecha_dia_fertil_1[0],fecha_fecha_dia_fertil_1[1]-1,fecha_fecha_dia_fertil_1[2]), new Date(fecha_fecha_dia_fertil_2[0],fecha_fecha_dia_fertil_2[1]-1,fecha_fecha_dia_fertil_2[2])); 
				$.each( dates2, function( key3, value3 ) {
					$("td[data-date='"+value3+"']").addClass('diaFertil');
				});
				$("td[data-date='"+data.fecha_ovulacion+"']").addClass('diaOvulacion');


				var fecha_proximo_periodo = String(data.fecha_proximo_periodo).split('-');
				var fecha_proximo_periodo2 = String(data.fecha_proximo_periodo2).split('-');
				var dates3 = getDates(new Date(fecha_proximo_periodo[0],fecha_proximo_periodo[1]-1,fecha_proximo_periodo[2],0,0,0), new Date(fecha_proximo_periodo2[0],fecha_proximo_periodo2[1]-1,fecha_proximo_periodo2[2],0,0,0)); 
				$.each( dates3, function( key4, value4 ) {
					$("td[data-date='"+value4+"']").addClass('proxPeriodo');
				});
				$('#dias_siguiente_periodo').html(data.dias_para_proximo_periodo);
				if(data.probabilidades_embarazo=='alta'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span><span class="pB alto"></span>');
				}
				if(data.probabilidades_embarazo=='media'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span>');
				}
				if(data.probabilidades_embarazo=='baja'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span>');
				}
				if(data.probabilidades_embarazo=='No se puede saber'){
					$('#probabilidades_embarazo').html('');
				}
			}
		})
		break;
		case 'dia':

		$('.input_pms').click(function(e){
			metodo = 'pms';
			if($(this).is(':checked')){
				valor = 1;
			}else{
				valor = 0;
			}
			nombre_variable = 'pms';
			id_usuario = localStorage.getItem('userid');
			fecha = localStorage.getItem('fecha');
			registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
			if(valor == 0){
				$('#list_pms').removeClass('campoConDatos');
				$('.iconoLista.pms').removeClass('azul');
			}else{
				$('#list_pms').addClass('campoConDatos');
				$('.iconoLista.pms').addClass('azul');
			}
		});
		var fecha = app.view.main.router.currentRoute.params.fecha;
		$('#link_sintomas').attr('href',$('#link_sintomas').attr('href')+fecha+'/');
		$('#link_medicamentosa').attr('href',$('#link_medicamentosa').attr('href')+fecha+'/');
		localStorage.setItem('fecha',fecha);
		$.ajax({
			url : URL_WS+'registro/'+fecha+'/'+localStorage.getItem('userid'),
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			success : function(data){
				//console.log(data);
				data_periodo = data[1][0];
				data = data[0][0];
				if (data != undefined || data != null) {
					$('#txtarea_notas').html(data.nota);
					if(data.temperatura!= null){
						$('#list_temperatura').addClass('campoConDatos');
						$('.iconoLista.bbt').addClass('azul');
						temperatura = data.temperatura;
						temperatura = temperatura.split('.');
						entero = temperatura[0];
						decimal = temperatura[1];
						pickerTemperatura.setValue([entero,'.',decimal]);
					}
					if(data.flujo_menstrual!=null){
						$('#list_flujo_menstrual').addClass('campoConDatos');
						$('.iconoLista.fm').addClass('azul');
						pickerFlujoMenstrual.setValue([data.flujo_menstrual]);
					}
					if(data.flujo_cervical!=null){
						$('#list_flujo_cervical').addClass('campoConDatos');
						$('.iconoLista.fc').addClass('azul');
						pickerFlujoCervical.setValue([data.flujo_cervical]);
					}
					if(data.estrenimiento!=null || data.olor_corporal!=null || data.acne!=null || data.anemia!=null || data.aftas!=null || data.antojos!=null || data.ardor_estomago!=null || data.boca_seca!=null || data.calambres!=null || data.nauseas!=null || data.colicos!=null || data.deseo_sexual_inhibido!=null || data.desvanecimiento!=null || data.diarrea!=null || data.dolor_abdominal!=null || data.dolor_ovulacion_derecho!=null || data.dolor_ovulacion_izquierdo!=null || data.dolor_pechos!=null || data.dolor_hombro!=null || data.dolor_muscular!=null || data.dolor_cabeza!=null || data.inflamacion!=null || data.fatiga!=null || data.mareos!=null || data.piel_seca!=null || data.palpitaciones!=null || data.preeclamsia!=null || data.presion_arterial_baja!=null || data.secrecion_vaginal!=null || data.sensibilidad_en_pechos!=null || data.dolor_ovulacion!=null || data.estrenimiento!=null || data.sequedad_vaginal!=null || data.bochornos!=null){
						$('#list_sintomas').addClass('campoConDatos');
						$('.iconoLista.sint').addClass('azul');
					}
					if(
						(data.antibiotico!=null && data.antibiotico!=0) || 
						(data.antidepresivo!=null && data.antidepresivo!=0) || 
						(data.antinflamatorio!=null && data.antinflamatorio!=0) || 
						(data.estrogeno!=null && data.estrogeno!=0) || 
						(data.pastilla_hrt!=null && data.pastilla_hrt!=0) || 
						(data.pastilla_antialergica!=null && data.pastilla_antialergica!=0) || 
						(data.pastilla_dolor_cabeza!=null && data.pastilla_dolor_cabeza!=0) || 
						(data.pastilla_migrana!=null && data.pastilla_migrana!=0) || 
						(data.anticonceptivo_emergencia!=null && data.anticonceptivo_emergencia!=0) || 
						(data.anticonceptivo_hormonal!=null && data.anticonceptivo_hormonal!=0) || 
						(data.multivitaminico!=null && data.multivitaminico!=0) || 
						(data.progesterona!=null && data.progesterona!=0) || 
						(data.sin_nombre!=null && data.sin_nombre!=0) || 
						(data.somnifero!=null && data.somnifero!=0) || 
						(data.vitamina_d!=null && data.vitamina_d!=0) || 
						(data.vitaminas_prenatales!=null && data.vitaminas_prenatales!=0)){
						$('#list_pastillas').addClass('campoConDatos');
						$('.iconoLista.past').addClass('azul');
					}
					if(data.peso!=null){
						$('#list_peso').addClass('campoConDatos');
						$('.iconoLista.peso').addClass('azul');
						peso = data.peso;
						peso = peso.split('.');
						entero = peso[0];
						decimal = peso[1];
						pickerPeso.setValue([entero,'.',decimal]);
					}
					if(data.edo_animo!=null){
						$('#list_animo').addClass('campoConDatos');
						$('.iconoLista.animo').addClass('azul');
					}
					if(data.pms!=null){
						$('#list_pms').addClass('campoConDatos');
						$('.iconoLista.pms').addClass('azul');
						$('input[name="pms"]').prop("checked", true);
					}
					if((data.sx00 != null && data.sx00 !=0) || (data.sx01 != null && data.sx01 !=0) || (data.sx02 != null && data.sx02 !=0) || (data.sx03 != null && data.sx03 !=0) || (data.sx04 != null && data.sx04 !=0) || (data.sx05 != null && data.sx05 !=0) || (data.sx06 != null && data.sx06 !=0) || (data.sx07 != null && data.sx07 !=0) || (data.sx08 != null && data.sx08 !=0) || (data.sx09 != null && data.sx09 !=0) || (data.sx10 != null && data.sx10 !=0) || (data.sx11 != null && data.sx11 !=0) || (data.sx12 != null && data.sx12 !=0) || (data.sx13 != null && data.sx13 !=0) || (data.sx14 != null && data.sx14 !=0) || (data.sx15 != null && data.sx15 !=0) || (data.sx16 != null && data.sx16 !=0) || (data.sx17 != null && data.sx17 !=0) || (data.sx18 != null && data.sx18 !=0) || (data.sx19 != null && data.sx19 !=0) || (data.sx20 != null && data.sx20 !=0) || (data.sx21 != null && data.sx21 !=0) || (data.sx22 != null && data.sx22 !=0) || (data.sx23 != null && data.sx23 !=0)){
						$('#list_sexo').addClass('campoConDatos');
						$('.iconoLista.sexo').addClass('azul');
					}
					if(data.comienzo_periodo==1){
						$('#btn_comienzo_periodo').addClass('rosa');
					}
					if(data.fin_periodo==1){
						$('#btn_fin_periodo').addClass('rosa');
					}
				}

				if (data_periodo != undefined || data_periodo != null) {
					console.log(data_periodo)
					if (data_periodo.fecha_inicial != undefined || data_periodo.fecha_inicial != null) {
						//activar boton, quitar inicio de periodo
						$('#btn_fin_periodo').hide();
						$('#btn_comienzo_periodo').hide();
						$('#btn_eliminar_periodo').show();
						$('#btn_eliminar_periodo').attr('data-id-periodo',data_periodo.id);
						
					}
				}

				
			}
		});
fecha = fecha.split("-");
$('.diaDatos').html(fecha[2]);
$('.mesDatos').html(traducir_mes(fecha[1]));
break;
case 'sintomas':
$('.input_sintoma').click(function(e){
	metodo = $(this).attr('data-metodo');
	valor = $(this).val();
	nombre_variable = metodo.replace(new RegExp('-', 'g'), "_");
	id_usuario = localStorage.getItem('userid');
	fecha = localStorage.getItem('fecha');
	registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
});
var fecha = app.view.main.router.currentRoute.params.fecha; 
$.ajax({
	url : URL_WS+'registro/'+fecha+'/'+localStorage.getItem('userid'),
	headers: {
		"apikey" : localStorage.getItem('apikey')
	},
	beforeSend : function(){
		app.preloader.show();
	},
	complete : function(){
		app.preloader.hide();
	},
	success : function(data){
		data = data[0][0];
		if (data != undefined || data != null) {
			if(data.estrenimiento != null){
				$('input[name="estrenimiento"]').filter('[value="'+data.estrenimiento+'"]').prop("checked", true);
			}
			if(data.olor_corporal != null){
				$('input[name="olor_coropral"]').filter('[value="'+data.olor_corporal+'"]').prop("checked", true);
			}
			if(data.acne != null){
				$('input[name="acne"]').filter('[value="'+data.acne+'"]').prop("checked", true);
			}
			if(data.anemia != null){
				$('input[name="anemia"]').filter('[value="'+data.anemia+'"]').prop("checked", true);
			}
			if(data.aftas != null){
				$('input[name="aftas"]').filter('[value="'+data.aftas+'"]').prop("checked", true);
			}
			if(data.antojos != null){
				$('input[name="antojos"]').filter('[value="'+data.antojos+'"]').prop("checked", true);
			}
			if(data.apetito != null){
				$('input[name="apetito"]').filter('[value="'+data.apetito+'"]').prop("checked", true);
			}
			if(data.ardor_estomago != null){
				$('input[name="ardor_estomago"]').filter('[value="'+data.ardor_estomago+'"]').prop("checked", true);
			}
			if(data.boca_seca != null){
				$('input[name="boca_seca"]').filter('[value="'+data.boca_seca+'"]').prop("checked", true);
			}
			if(data.calambres != null){
				$('input[name="calambres"]').filter('[value="'+data.calambres+'"]').prop("checked", true);
			}
			if(data.nauseas != null){
				$('input[name="nauseas"]').filter('[value="'+data.nauseas+'"]').prop("checked", true);
			}
			if(data.colicos != null){
				$('input[name="colicos"]').filter('[value="'+data.colicos+'"]').prop("checked", true);
			}
			if(data.deseo_sexual_inhibido != null){
				$('input[name="deseo_sexual_inhibido"]').filter('[value="'+data.deseo_sexual_inhibido+'"]').prop("checked", true);
			}
			if(data.desvanecimiento != null){
				$('input[name="desvanecimiento"]').filter('[value="'+data.desvanecimiento+'"]').prop("checked", true);
			}
			if(data.diarrea != null){
				$('input[name="diarrea"]').filter('[value="'+data.diarrea+'"]').prop("checked", true);
			}
			if(data.dolor_abdominal != null){
				$('input[name="dolor_abdominal"]').filter('[value="'+data.dolor_abdominal+'"]').prop("checked", true);
			}
			if(data.dolor_ovulacion_derecho != null){
				$('input[name="dolor_ovulacion_derecho"]').filter('[value="'+data.dolor_ovulacion_derecho+'"]').prop("checked", true);
			}
			if(data.dolor_ovulacion_izquierdo != null){
				$('input[name="dolor_ovulacion_izquierdo"]').filter('[value="'+data.dolor_ovulacion_izquierdo+'"]').prop("checked", true);
			}
			if(data.dolor_pechos != null){
				$('input[name="dolor_pechos"]').filter('[value="'+data.dolor_pechos+'"]').prop("checked", true);
			}
			if(data.dolor_hombros != null){
				$('input[name="dolor_hombros"]').filter('[value="'+data.dolor_hombros+'"]').prop("checked", true);
			}
			if(data.dolor_muscular != null){
				$('input[name="dolor_muscular"]').filter('[value="'+data.dolor_muscular+'"]').prop("checked", true);
			}
			if(data.dolor_cabeza != null){
				$('input[name="dolor_cabeza"]').filter('[value="'+data.dolor_cabeza+'"]').prop("checked", true);
			}
			if(data.inflamacion != null){
				$('input[name="inflamacion"]').filter('[value="'+data.inflamacion+'"]').prop("checked", true);
			}
			if(data.fatiga != null){
				$('input[name="fatiga"]').filter('[value="'+data.fatiga+'"]').prop("checked", true);
			}
			if(data.mareos != null){
				$('input[name="mareos"]').filter('[value="'+data.mareos+'"]').prop("checked", true);
			}
			if(data.piel_seca != null){
				$('input[name="piel_seca"]').filter('[value="'+data.piel_seca+'"]').prop("checked", true);
			}
			if(data.palpitaciones != null){
				$('input[name="palpitaciones"]').filter('[value="'+data.palpitaciones+'"]').prop("checked", true);
			}
			if(data.preeclamsia != null){
				$('input[name="preeclamsia"]').filter('[value="'+data.preeclamsia+'"]').prop("checked", true);
			}
			if(data.presion_arterial_baja != null){
				$('input[name="presion_arterial_baja"]').filter('[value="'+data.presion_arterial_baja+'"]').prop("checked", true);
			}
			if(data.secrecion_vaginal != null){
				$('input[name="secrecion_vaginal"]').filter('[value="'+data.secrecion_vaginal+'"]').prop("checked", true);
			}
			if(data.sensibilidad_pechos != null){
				$('input[name="sensibilidad_pechos"]').filter('[value="'+data.sensibilidad_pechos+'"]').prop("checked", true);
			}
			if(data.dolor_ovulacion != null){
				$('input[name="dolor_ovulacion"]').filter('[value="'+data.dolor_ovulacion+'"]').prop("checked", true);
			}
			if(data.sequedad_vaginal != null){
				$('input[name="sequedad_vaginal"]').filter('[value="'+data.sequedad_vaginal+'"]').prop("checked", true);
			}
			if(data.bochornos != null){
				$('input[name="bochornos"]').filter('[value="'+data.bochornos+'"]').prop("checked", true);
			}
		}
	}
})
break;
case 'pastillas':
$('.input_pastilla').click(function(e){
	metodo = $(this).attr('data-metodo');
	metodo = metodo.replace(new RegExp('_', 'g'), "-");
	if($(this).is(':checked')){
		valor = 1;
	}else{
		valor = 0;
	}
	nombre_variable = $(this).attr('data-metodo');
	id_usuario = localStorage.getItem('userid');
	fecha = localStorage.getItem('fecha');
	registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
});
var fecha = app.view.main.router.currentRoute.params.fecha; 
$.ajax({
	url : URL_WS+'registro/'+fecha+'/'+localStorage.getItem('userid'),
	headers: {
		"apikey" : localStorage.getItem('apikey')
	},
	beforeSend : function(){
		app.preloader.show();
	},
	complete : function(){
		app.preloader.hide();
	},
	success : function(data){
		data = data[0][0];
		console.log(data);
		if (data != undefined || data != null) {
			if(data.antibiotico === "1"){
				console.log('antibiotico');
				$('input[name="antibiotico"]').prop("checked", true);
			}
			if(data.antinflamatorio === "1"){
				$('input[name="antinflamatorio"]').prop("checked", true);
			}
			if(data.antidepresivo === "1"){
				$('input[name="antidepresivo"]').prop("checked", true);
			}
			if(data.antiinflamatorio === "1"){
				$('input[name="antiinflamatorio"]').prop("checked", true);
			}
			if(data.estrogeno === "1"){
				$('input[name="estrogeno"]').prop("checked", true);
			}
			if(data.pastilla_hrt === "1"){
				$('input[name="pastilla_hrt"]').prop("checked", true);
			}
			if(data.pastilla_antialergica === "1"){
				$('input[name="pastilla_antialergica"]').prop("checked", true);
			}
			if(data.pastilla_dolor_cabeza === "1"){
				$('input[name="pastilla_dolor_cabeza"]').prop("checked", true);
			}
			if(data.pastilla_migrana === "1"){
				$('input[name="pastilla_migrana"]').prop("checked", true);
			}
			if(data.anticonceptivo_emergencia === "1"){
				$('input[name="anticonceptivo_emergencia"]').prop("checked", true);
			}
			if(data.anticonceptivo_hormonal === "1"){
				$('input[name="anticonceptivo_hormonal"]').prop("checked", true);
			}
			if(data.multivitaminico === "1"){
				$('input[name="multivitaminico"]').prop("checked", true);
			}
			if(data.progesterona === "1"){
				$('input[name="progesterona"]').prop("checked", true);
			}
			if(data.sin_nombre === "1"){
				$('input[name="sin_nombre"]').prop("checked", true);
			}
			if(data.somnifero === "1"){
				$('input[name="somnifero"]').prop("checked", true);
			}
			if(data.vitamina_d === "1"){
				$('input[name="vitamina_d"]').prop("checked", true);
			}
			if(data.vitaminas_prenatales === "1"){
				$('input[name="vitaminas_prenatales"]').prop("checked", true);
			}
		}
	}
});
break;
case 'animo':
$('.input_animo').click(function(e){
	metodo = 'edo-animo';
	valor = $(this).val();
	nombre_variable = 'edo_animo';
	id_usuario = localStorage.getItem('userid');
	fecha = localStorage.getItem('fecha');
	registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
});
var fecha = app.view.main.router.currentRoute.params.fecha; 
$.ajax({
	url : URL_WS+'registro/'+fecha+'/'+localStorage.getItem('userid'),
	headers: {
		"apikey" : localStorage.getItem('apikey')
	},
	beforeSend : function(){
		app.preloader.show();
	},
	complete : function(){
		app.preloader.hide();
	},
	success : function(data){
		data = data[0][0];
		if (data != undefined || data != null) {
			if(data.edo_animo != null){
				$('input[name="estado_animo"]').filter('[value="'+data.edo_animo+'"]').prop("checked", true);
			}
		}
	}
});
break;
case 'sexo':
var fecha = app.view.main.router.currentRoute.params.fecha; 
$.ajax({
	url : URL_WS+'registro/'+fecha+'/'+localStorage.getItem('userid'),
	headers: {
		"apikey" : localStorage.getItem('apikey')
	},
	beforeSend : function(){
		app.preloader.show();
	},
	complete : function(){
		app.preloader.hide();
	},
	success : function(data){
		data = data[0][0];
		if (data != undefined || data != null) {
			if(data.sx00 != null && data.sx00 !=0){
				$('#sx00').addClass('horarioChecked');
			}
			if(data.sx01 != null && data.sx01 !=0){
				$('#sx01').addClass('horarioChecked');
			}
			if(data.sx02 != null && data.sx02 !=0){
				$('#sx02').addClass('horarioChecked');
			}
			if(data.sx03 != null && data.sx03 !=0){
				$('#sx03').addClass('horarioChecked');
			}
			if(data.sx04 != null && data.sx04 !=0){
				$('#sx04').addClass('horarioChecked');
			}
			if(data.sx05 != null && data.sx05 !=0){
				$('#sx05').addClass('horarioChecked');
			}
			if(data.sx06 != null && data.sx06 !=0){
				$('#sx06').addClass('horarioChecked');
			}
			if(data.sx07 != null && data.sx07 !=0){
				$('#sx07').addClass('horarioChecked');
			}
			if(data.sx08 != null && data.sx08 !=0){
				$('#sx08').addClass('horarioChecked');
			}
			if(data.sx09 != null && data.sx09 !=0){
				$('#sx09').addClass('horarioChecked');
			}
			if(data.sx10 != null && data.sx10 !=0){
				$('#sx10').addClass('horarioChecked');
			}
			if(data.sx11 != null && data.sx11 !=0){
				$('#sx11').addClass('horarioChecked');
			}
			if(data.sx12 != null && data.sx12 !=0){
				$('#sx12').addClass('horarioChecked');
			}
			if(data.sx13 != null && data.sx13 !=0){
				$('#sx13').addClass('horarioChecked');
			}
			if(data.sx14 != null && data.sx14 !=0){
				$('#sx14').addClass('horarioChecked');
			}
			if(data.sx15 != null && data.sx15 !=0){
				$('#sx15').addClass('horarioChecked');
			}
			if(data.sx16 != null && data.sx16 !=0){
				$('#sx16').addClass('horarioChecked');
			}
			if(data.sx17 != null && data.sx17 !=0){
				$('#sx17').addClass('horarioChecked');
			}
			if(data.sx18 != null && data.sx18 !=0){
				$('#sx18').addClass('horarioChecked');
			}
			if(data.sx19 != null && data.sx19 !=0){
				$('#sx19').addClass('horarioChecked');
			}
			if(data.sx20 != null && data.sx20 !=0){
				$('#sx20').addClass('horarioChecked');
			}
			if(data.sx21 != null && data.sx21 !=0){
				$('#sx21').addClass('horarioChecked');
			}
			if(data.sx22 != null && data.sx22 !=0){
				$('#sx22').addClass('horarioChecked');
			}
			if(data.sx23 != null && data.sx23 !=0){
				$('#sx23').addClass('horarioChecked');
			}
		}
	}
});
break;
case 'codigoAcceso':
if(localStorage.hasOwnProperty('codigoAcceso')){
		// existe código??? muestra form lleno
		$('#formpin').show();
		$('#codigoAcceso1').val(localStorage.getItem('codigoAcceso'));
		$('#codigoAcceso2').val(localStorage.getItem('codigoAcceso'));
		$( ".switch" ).trigger( "click" );
	}else{
		//NO EXISTE? NO MUESTRES NADA, NADDDEEEEE, DIJE"!!!! 

	}
	break;
}


$('.cBnivel').on('click', function (e) {
	$(this).addClass('nivelChecked');
});
$('.col.horarioSexo').on('click', function (e) {
	/*
	$(this).toggleClass('horarioChecked');
	if($(this).hasClass('horarioChecked')){
		fecha = localStorage.getItem('fecha');
		id_usuario = localStorage.getItem('userid');
		metodo = $(this).attr('id');
		nombre_variable = $(this).attr('id');
		valor = '111';
		registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
	}else{
		fecha = localStorage.getItem('fecha');
		id_usuario = localStorage.getItem('userid');
		metodo = $(this).attr('id');
		nombre_variable = $(this).attr('id');
		valor = '0';
		registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
	}
	*/
	var caja = $(this);
	var dialog = app.dialog.create({
		title: 'Protección y placer',
		text: '¿Tuviste un orgasmo? , ¿Utilizaste condón?',
		content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><select class="dialog-input"><option value="11">Sí Orgasmo, Sí Condón</option><option value="10">Sí Orgasmo, No Condón</option><option value="01">No Orgasmo, Sí Condón</option><option value="00">No Orgasmo, No Condón</option></select></div></div>',
		buttons: [{text: 'Ok'}],
		onClick: function (dialog, index) {
			var variables_sexo = dialog.$el.find('.dialog-input').val();
			caja.toggleClass('horarioChecked');
			if(caja.hasClass('horarioChecked')){
				fecha = localStorage.getItem('fecha');
				id_usuario = localStorage.getItem('userid');
				metodo = caja.attr('id');
				nombre_variable = caja.attr('id');
				valor = variables_sexo;
				registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
			}else{
				fecha = localStorage.getItem('fecha');
				id_usuario = localStorage.getItem('userid');
				metodo = caja.attr('id');
				nombre_variable = caja.attr('id');
				valor = '0';
				registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
			}
		}
	}).open();
});

$('.diaMeds').on('click', function (e) {
	$(this).addClass('diaMedsChecked');
});

$('.btnInactivo').on('click', function (e) {
	$(this).addClass('btnActivo');
});

$('.diaSemana').on('click', function (e) {
	$(this).addClass('diaActivo');
});

$('.col-50.oC').on('click', function (e) {
	$('#valor_anticonceptivos').val('');
	$( ".oCactivo" ).each(function() {
		$('#valor_anticonceptivos').val($('#valor_anticonceptivos').val()+$(this).html()+'|');
	});
});
$('#btnPastillas').on('click', function (e) {  
	$('#valor_anticonceptivos').val('');
	if($(this).hasClass('oCactivo')){
		$(this).removeClass('oCactivo')
	}else{
		$('#btnNingunMetodo').removeClass('oCactivo');
		$(this).addClass('oCactivo');
	}
	$( ".oCactivo" ).each(function() {
		$('#valor_anticonceptivos').val($('#valor_anticonceptivos').val()+$(this).html()+'|');
	});
});
$('#btnCondon').on('click', function (e) {  
	$('#valor_anticonceptivos').val('');
	if($(this).hasClass('oCactivo')){
		$(this).removeClass('oCactivo')
	}else{
		$('#btnNingunMetodo').removeClass('oCactivo');
		$(this).addClass('oCactivo');
	}
	$( ".oCactivo" ).each(function() {
		$('#valor_anticonceptivos').val($('#valor_anticonceptivos').val()+$(this).html()+'|');
	});
});
$('#btnOtroMetodo').on('click', function (e) {  
	$('#valor_anticonceptivos').val('');
	if($(this).hasClass('oCactivo')){
		$(this).removeClass('oCactivo')
	}else{
		$('#btnNingunMetodo').removeClass('oCactivo');
		$(this).addClass('oCactivo');
	}
	$( ".oCactivo" ).each(function() {
		$('#valor_anticonceptivos').val($('#valor_anticonceptivos').val()+$(this).html()+'|');
	});
});
$('#btnNingunMetodo').on('click', function (e) {  
	$('#valor_anticonceptivos').val('');
	if($(this).hasClass('oCactivo')){
		$(this).removeClass('oCactivo')
	}else{
		$('.col-50.oC').removeClass('oCactivo');
		$(this).addClass('oCactivo');
	}
	$( ".oCactivo" ).each(function() {
		$('#valor_anticonceptivos').val($('#valor_anticonceptivos').val()+$(this).html()+'|');
	});
	//$(this).toggleClass('oCactivo');
});


$('#btnOvulacion').on('click', function (e) {       
	$('#opOvulacion').toggle('show');
});

$('#btnPechos').on('click', function (e) {       
	$('#opPechos').toggle('show');
});

$('#btnNuva').on('click', function (e) {       
	$('#opNuva').toggle('show');
});

$('#btnPeso').on('click', function (e) {       
	$('#opPeso').toggle('show');
});

$('#btnBBT').on('click', function (e) {       
	$('#opBBT').toggle('show');
});

$('#btnPildora').on('click', function (e) {       
	$('#opPildora').toggle('show');
});

$('#btnContraceptiva').on('click', function (e) {       
	$('#opContraceptiva').toggle('show');
});

$('#btnParche').on('click', function (e) {       
	$('#opParche').toggle('show');
});

$('#btnDepo').on('click', function (e) {       
	$('#opDepo').toggle('show');
});

$('#btnIUD').on('click', function (e) {       
	$('#opIUD').toggle('show');
});



var pickerDevice = app.picker.create({
	inputEl: '#dp',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	]
});
//var toggle = app.toggle.create({ /* parameters */ })

var pickerDevice = app.picker.create({
	inputEl: '#cmm',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	]
});


var pickerDevice = app.picker.create({
	inputEl: '#udm',
	cols: [
	{
		textAlign: 'center',
		values: ['Lunes', 'Martes', 'Miércoles','Jueves','Viernes','Sábado','Domingo']
	}
	]
});

var pickerDevice = app.picker.create({
	inputEl: '#sexo',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	]
});

var pickerDevice = app.picker.create({
	inputEl: '#diaSemanaConfi',
	cols: [
	{
		textAlign: 'center',
		values: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
	}
	]
});

var pickerCiclo = app.picker.create({
	inputEl: '#duracionCicloConfi',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	],
	on: {
		closed: function () {
			ciclo_medio = pickerCiclo.getValue();
			id_usuario = localStorage.getItem('userid');
			var formData = new FormData();
			formData.append('ciclo_medio',ciclo_medio);  
			formData.append('id_usuario',localStorage.getItem('userid'));  
			$.ajax({
				headers: {
					"apikey" : localStorage.getItem('apikey')
				},
				beforeSend : function(){
					app.preloader.show();
				},
				complete : function(){
					app.preloader.hide();
				},
				success : function(data){
					app.dialog.alert("Guardado correctamente", "Éxito");
				},
				type : 'POST',
				url : URL_WS+'config-duracion-ciclo',
				data : formData,
				processData: false,
				contentType: false,
			});
		}
	}
});

var pickerPeriodo = app.picker.create({
	inputEl: '#duracionPeriodoConfi',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	],
	on: {
		closed: function () {
			duracion_media = pickerPeriodo.getValue();
			id_usuario = localStorage.getItem('userid');
			var formData = new FormData();
			formData.append('duracion_media',duracion_media);  
			formData.append('id_usuario',localStorage.getItem('userid'));  
			$.ajax({
				headers: {
					"apikey" : localStorage.getItem('apikey')
				},
				beforeSend : function(){
					app.preloader.show();
				},
				complete : function(){
					app.preloader.hide();
				},
				success : function(data){
					app.dialog.alert("Guardado correctamente", "Éxito");
				},
				type : 'POST',
				url : URL_WS+'config-duracion-periodo',
				data : formData,
				processData: false,
				contentType: false,
			});
		}
	}
});

var pickerDevice = app.picker.create({
	inputEl: '#faseLuteaConfi',
	cols: [
	{
		textAlign: 'center',
		values: ['1d','2d','3d','4d','5d','6d','7d','8d','9d','10d','11d','12d','13d','14d','15d','16d','17d','18d','19d','20d','21d','22d','23d','24d','25d','26d','27d','28d','29d','30d']
	}
	]
});


var pickerDevice = app.picker.create({
	inputEl: '#pronostFertConfi',
	cols: [
	{
		textAlign: 'center',
		values: ['Últimos 12 meses','Últimos 9 meses','Últimos 6 meses','Últimos 3 meses',]
	}
	]
});




var pickerDevice = app.picker.create({
	inputEl: '#orgasmo',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	]
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horarioPastilla',

	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 15 20 25 30 35 40 45 50 55 ').split(' ')
	},
	]
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#fechaInicioToma',

	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre ').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#fechaFinToma',

	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre ').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiContraceptiva',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiBBT',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiPeso',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiNuva',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiPechos',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiMenst',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiOvulacion',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiPildora',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});


var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiParche',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiIUD',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#horaNotiDepo',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24').split(' ')
	},
	{
		values: (':').split(' ')
	},
	{
		values: ('00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59').split(' ')
	},
	],
});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#diasAntelacion',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	],

});

var pickerFlujoCervical = app.picker.create({
	inputEl: '#fc',
	cols: [
	{
		textAlign: 'left',
		values: ['Seco','Pegajoso','Cremoso','Clara de huevo','Inusual']
	},
	],on: {
		closed: function () {
      //AJAX
      flujo_cervical = pickerFlujoCervical.getValue();
      id_usuario = localStorage.getItem('userid');
      fecha = localStorage.getItem('fecha')
      registroAjax('flujo-cervical',flujo_cervical,'flujo_cervical',fecha,id_usuario);
  }
}

});

var pickerFlujoMenstrual = app.picker.create({
	inputEl: '#fm',
	cols: [
	{
		textAlign: 'left',
		values: ['Leve','Medio','Abundante']
	},
	],on: {
		closed: function () {
      //AJAX
      flujo_menstrual = pickerFlujoMenstrual.getValue();
      id_usuario = localStorage.getItem('userid');
      fecha = localStorage.getItem('fecha')
      registroAjax('flujo-menstrual',flujo_menstrual,'flujo_menstrual',fecha,id_usuario);
  }
}

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#colocacionNuva',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre').split(' ')
	},
	{
		values: ('2018 2019 2020 2021 2022 2023 2024 2025 2026 2027').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#colocacionParche',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre').split(' ')
	},
	{
		values: ('2018 2019 2020 2021 2022 2023 2024 2025 2026 2027').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#colocacionDepo',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre').split(' ')
	},
	{
		values: ('2018 2019 2020 2021 2022 2023 2024 2025 2026 2027').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#colocacionIUD',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	{
		values: ('Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre').split(' ')
	},
	{
		values: ('2018 2019 2020 2021 2022 2023 2024 2025 2026 2027').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#periodoAnosIUD',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#periodoMesesIUD',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#diasAntelacionPechos',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	],

});

var pickerCustomToolbar = app.picker.create({
	inputEl: '#diasAntelacionOvulacion',
	cols: [
	{
		textAlign: 'left',
		values: ('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30').split(' ')
	},
	],

});

var pickerTemperatura = app.picker.create({
	inputEl: '#bbt',
	rotateEffect: true,
	cols: [
	{
		textAlign: 'left',
		values: ('30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45').split(' ')
	},
	{
		values: ('.').split(' ')
	},
	{
		values: ('0 1 2 3 4 5 6 7 8 9').split(' ')
	},
	{
		values: ('ºC').split(' ')
	}
	],on: {
		closed: function () {
      //AJAX
      temperatura = pickerTemperatura.getValue();
      temperatura = temperatura[0]+'.'+temperatura[2];
      id_usuario = localStorage.getItem('userid');
      fecha = localStorage.getItem('fecha')
      registroAjax('temperatura',temperatura,'temperatura',fecha,id_usuario);

  }
}
});

var pickerPeso = app.picker.create({
	inputEl: '#peso',
	rotateEffect: true,
	cols: [
	{
		textAlign: 'left',
		values: ('30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100').split(' ')
	},
	{
		values: ('.').split(' ')
	},
	{
		values: ('0 1 .2 3 4 5 6 7 8 9').split(' ')
	},
	{
		values: ('Kg').split(' ')
	}
	],on: {
		closed: function () {
      //AJAX
      peso = pickerPeso.getValue();
      peso = peso[0]+'.'+peso[2];
      id_usuario = localStorage.getItem('userid');
      fecha = localStorage.getItem('fecha')
      registroAjax('peso',peso,'peso',fecha,id_usuario);
  }
}
});


})


//notificacion proxima toma de medicamento
var notificationFulltomaMed = app.notification.create({
	icon: '<img src="images/logo.png">',
	titleRightText: '00:00 pm',
	subtitle: 'Próxima toma de medicamento',
	text: 'Nombre de la pastilla',
	closeTimeout: 3000,
});

//notificacion dia ovulacion
var notificationFulldiaOvul = app.notification.create({
	icon: '<img src="images/logo.png">',
	subtitle: 'Predicción del día de Ovulación',
	text: '00-00-00',
	closeTimeout: 3000,
});

//notificacion inicio dias fertiles
var notificationFulldiasFert = app.notification.create({
	icon: '<img src="images/logo.png">',
	subtitle: 'Inicio días fértiles',
	text: '00-00-00 al 00-00-00',
	closeTimeout: 3000,
});

//notificacion sindrome premenstrual
var notificationFullSPM = app.notification.create({
	icon: '<img src="images/logo.png">',
	subtitle: 'Síndrome premestrual',
	text: '00-00-00 al 00-00-00',
	closeTimeout: 3000,
});

//notificacion permitir notificaciones
var notificationFullpermitir = app.notification.create({
	icon: '<img src="images/logo.png">',
	title: 'desea enviarle notificaciones',
	text: '<span><a href="#">Permitir</a></span> <span><a href="#">No Permitir</a></span>',
	closeTimeout: 3000,
});

//abrir notificacion proxima toma de medicamento
$('.open-full.tomaMed').on('click', function () {
	notificationFulltomaMed.open();
});


//abrir notificacion proxima toma de medicamento
$('.open-full.diaOvul').on('click', function () {
	notificationFulldiaOvul.open();
});

//abrir notificacion inicio dias fertiles
$('.open-full.diasFert').on('click', function () {
	notificationFulldiasFert.open();
});

//abrir notificacion sindrome premenstrual
$('.open-full.SPM').on('click', function () {
	notificationFullSPM.open();
});

//abrir notificacion sindrome premenstrual
$('.open-full.permitir').on('click', function () {
	notificationFullpermitir.open();
});
var pickerDevice = app.picker.create({
	inputEl: '#cmm',
	cols: [
	{
		textAlign: 'center',
		values: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
	}
	]
});



$(document).ready(function(){
	if(localStorage.getItem('auth')){
		if(localStorage.getItem('tutorial_inicial')==='1'){
			mainView.router.navigate('/mensual/');
		}else{
			mainView.router.navigate('/configuracion1/');
		}
	}
	if(localStorage.hasOwnProperty('codigoAcceso')){
		$('#pincode').show();
	}
	//$('#digito1').focus();
	$('#form_registro').validate({
		rules : {
			ipt_reg_nombre : 'required',
			ipt_reg_paterno : 'required',
			ipt_reg_materno : 'required',
			ipt_reg_correo : {
				required : true,
				email : true
			},
			ipt_reg_password : {
				required : true,
				pwcheck : true
			}
		},
		messages : {
			ipt_reg_nombre : 'Campo obligatorio',
			ipt_reg_paterno : 'Campo obligatorio',
			ipt_reg_materno : 'Campo obligatorio',
			ipt_reg_correo : {
				required : 'Campo obligatorio',
				email : 'Escriba un correo válido'
			},
			ipt_reg_password : {
				required : 'Campo obligatorio',
				pwcheck : 'Contraseña debe contener al menos 6 caracteres, una minúscula, una mayúscula y un dígito',
			}
		},
		submitHandler : function(){
			$.ajax({
				type : 'POST',
				url : URL_WS + 'register',
				headers: {
					"email" : $('#ipt_reg_correo').val(),
					"pass" : $('#ipt_reg_password').val(),
					"nombre" : $('#ipt_reg_nombre').val(),
					"paterno" : $('#ipt_reg_paterno').val(),
					"materno" : $('#ipt_reg_materno').val(),
				},beforeSend : function(){
					app.preloader.show();
				},
				complete : function(){
					app.preloader.hide();
				},
				success : function(data){
					app.popup.close('.popup-registro',true);
					app.dialog.alert("Su cuenta ha sido creada correctamente, se le redireccionará a la pantalla para iniciar sesión", "Éxito");
					$('#login_input_email').val($('#ipt_reg_correo').val());
					$('#login_input_pass').val($('#ipt_reg_password').val());
					$( "#btn_iniciar_sesion" ).trigger( "click" );
				},
				error : function(data){
					app.dialog.alert(data.responseText, "Error");
				}
			});
		}
	});
});
document.addEventListener("pause", onPause, false);

function onPause() {
    // Handle the pause event
    if(localStorage.hasOwnProperty('codigoAcceso')){
    	$('#pincode').show();
    }
}
$(document).on("click", "#btn_registro", function(e) {
	e.preventDefault();
	
	/*
	$.ajax({
		type : 'POST',
		url : URL_WS + 'register',
		headers: {
			"email" : $('#ipt_reg_correo').val(),
			"pass" : $('#ipt_reg_password').val(),
			"nombre" : $('#ipt_reg_nombre').val(),
			"paterno" : $('#ipt_reg_paterno').val(),
			"materno" : $('#ipt_reg_materno').val(),
		},beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.popup.close('.popup-registro',true);
			app.dialog.alert("Su cuenta ha sido creada correctamente, se le redireccionará a la pantalla para iniciar sesión", "Éxito");
		    $('#login_input_email').val($('#ipt_reg_correo').val());
			$('#login_input_pass').val($('#ipt_reg_password').val());
			$( "#btn_iniciar_sesion" ).trigger( "click" );
		},
		error : function(data){
			app.dialog.alert(data.responseText, "Error");
		}
	});
	*/
});


$(document).on("click", "#btn_login", function(e) {
	e.preventDefault();
	$.ajax({
		type : 'POST',
		url : URL_WS + 'register',
		headers: {
			"email" : $('#ipt_reg_correo').val(),
			"pass" : $('#ipt_reg_password').val(),
			"nombre" : $('#ipt_reg_nombre').val(),
			"paterno" : $('#ipt_reg_paterno').val(),
			"materno" : $('#ipt_reg_materno').val(),
		},beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Su cuenta ha sido creada correctamente", "Éxito");
		},
		error : function(data){
			app.dialog.alert(data.responseText, "Error");
		}
	});
});

$(document).on("click", "#btn_iniciar_sesion", function(e) { 
	e.preventDefault();
	$.ajax({
		type : 'POST',
		url : URL_WS + 'login',
		headers: {
			"email" : $('#login_input_email').val(),
			"pass" : $('#login_input_pass').val(),
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			if(data[0].auth==true){
				localStorage.setItem('auth', true);
				localStorage.setItem('apikey', data[0].apikey);
				localStorage.setItem('userid', data[0].user_id);
				localStorage.setItem('nombre', data[0].nombre);
				localStorage.setItem('paterno', data[0].paterno);
				localStorage.setItem('correo', data[0].correo);
				if(localStorage.getItem('tutorial_inicial')==='1'){
					mainView.router.navigate('/mensual/');
				}else{
					mainView.router.navigate('/configuracion1/');
				}

			}else{
				app.dialog.alert("Datos incorrectos", "Error");
			}
		},
		error : function(data){
			app.dialog.alert("error en request", "Error");
		}
	})
});

$(document).on("click", "#btn_siguiente_config1", function(e) { 
	dias_mes_a_otro = $('#cmm').val();
	if(dias_mes_a_otro==''){
		app.dialog.alert("Por favor seleccione el número de días", "Error");
	}else{
		//guardar config
		var formData = new FormData();
		formData.append('dias',dias_mes_a_otro);  
		formData.append('id_usuario',localStorage.getItem('userid'));  
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			success : function(data){
				mainView.router.navigate('/configuracion2/');
			},
			type : 'POST',
			url : URL_WS+'config-ciclo',
			data : formData,
			processData: false,
			contentType: false,
		});
	}
});

$(document).on("click", "#btn_siguiente_config2", function(e) { 
	dias_mes_a_otro = $('#dp').val();
	if(dias_mes_a_otro==''){
		app.dialog.alert("Por favor seleccione el número de días", "Error");
	}else{
		//guardar config
		//guardar config
		var formData = new FormData();
		formData.append('dias',dias_mes_a_otro);  
		formData.append('id_usuario',localStorage.getItem('userid'));  
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			success : function(data){
				mainView.router.navigate('/configuracion4/');
			},
			type : 'POST',
			url : URL_WS+'config-periodo',
			data : formData,
			processData: false,
			contentType: false,
		});
	}
});

$(document).on("click", "#btn_siguiente_config3", function(e) { 
	dias_mes_a_otro = $('#udm').val();
	if(dias_mes_a_otro==''){
		app.dialog.alert("Por favor seleccione el día de la semana", "Error");
	}else{
		mainView.router.navigate('/configuracion4/');
	}
});

$(document).on("click", "#btn_siguiente_config4", function(e) { 
	if($('.oCactivo').length==0){
		app.dialog.alert("Por favor seleccione una opción", "Error");
	}else{
		valor_anticonceptivos = $('#valor_anticonceptivos').val();
		var formData = new FormData();
		formData.append('valor_anticonceptivos',valor_anticonceptivos);  
		formData.append('id_usuario',localStorage.getItem('userid')); 
		$.ajax({
			headers: {
				"apikey" : localStorage.getItem('apikey')
			},
			beforeSend : function(){
				app.preloader.show();
			},
			complete : function(){
				app.preloader.hide();
			},
			success : function(data){
				mainView.router.navigate('/configuracion6/');
			},
			type : 'POST',
			url : URL_WS+'config-anticonceptivos',
			data : formData,
			processData: false,
			contentType: false,
		});
	}
});
$(document).on("click", "#btn_iniciar_calendario", function(e) { 
	localStorage.setItem('tutorial_inicial','1');
	mainView.router.navigate('/mensual/');
});
$(document).on("click", "#link_sintomas", function(e) { 
	e.preventDefault();
	fecha = localStorage.getItem('fecha');
	mainView.router.navigate('/sintomas/'+fecha+'/');
});

$(document).on("click", "#link_pastillas", function(e) { 
	e.preventDefault();
	fecha = localStorage.getItem('fecha');
	mainView.router.navigate('/pastillas/'+fecha+'/');
});
$(document).on("click", "#link_animo", function(e) { 
	e.preventDefault();
	fecha = localStorage.getItem('fecha');
	mainView.router.navigate('/animo/'+fecha+'/');
});
$(document).on("click", "#link_sexo", function(e) { 
	e.preventDefault();
	fecha = localStorage.getItem('fecha');
	mainView.router.navigate('/sexo/'+fecha+'/');
});
$(document).on("click", "#eliminar_parametros", function(e) { 
	e.preventDefault();
	app.dialog.confirm('¿Está seguro de que desea eliminar todos los parámetros?', function () {
		//AJAX ELIMINAR PARÁMETROS
		fecha = localStorage.getItem('fecha');
		id_usuario = localStorage.getItem('userid');
		eliminar_parametros(fecha,id_usuario);
		app.dialog.alert('Ooperación realizada correctamente');
		mainView.router.navigate('/mensual/');

	});
});
$(document).on("click", "#btn_eliminar_periodo", function(e) { 
	var id_periodo = $(this).attr('data-id-periodo');
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Eliminado correctamente", "Éxito");
			mainView.router.navigate('/mensual/');
		},
		error : function(data){
			app.dialog.alert(data.responseJSON.message, "Error");
		},
		url : URL_WS+'eliminar-periodo/'+id_periodo
	});
});

$(document).on("click", "#btn_comienzo_periodo", function(e) { 
	e.preventDefault();
	$(this).toggleClass('rosa');
	if($(this).hasClass('rosa')){
		valor = 1;
		$('#btn_fin_periodo').css('visibility','hidden');
	}else{
		valor = 0
		$('#btn_fin_periodo').css('visibility','visibble');
	}
	fecha = localStorage.getItem('fecha');
	id_usuario = localStorage.getItem('userid');

	var formData = new FormData();
	formData.append('fecha',fecha);  
	formData.append('id_usuario',localStorage.getItem('userid')); 
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Guardado correctamente", "Éxito");
		},
		error : function(data){
			app.dialog.alert(data.responseJSON.message, "Error");
		},
		type : 'POST',
		url : URL_WS+'comienzo-periodo',
		data : formData,
		processData: false,
		contentType: false,
	});
});
$(document).on("click", "#btn_fin_periodo", function(e) { 
	e.preventDefault();
	$(this).toggleClass('rosa');
	if($(this).hasClass('rosa')){
		valor = 1
		$('#btn_comienzo_periodo').css('visibility','hidden');
	}else{
		valor = 0;
		$('#btn_comienzo_periodo').css('visibility','visibble');
	}
	fecha = localStorage.getItem('fecha');
	id_usuario = localStorage.getItem('userid');

	var formData = new FormData();
	formData.append('fecha',fecha);  
	formData.append('id_usuario',localStorage.getItem('userid')); 
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Guardado correctamente", "Éxito");
		},
		error : function(data){
			app.dialog.alert(data.responseJSON.message, "Error");
		},
		type : 'POST',
		url : URL_WS+'fin-periodo',
		data : formData,
		processData: false,
		contentType: false,
	});

});
$(document).on("click", "#logout", function(e) { 
	e.preventDefault();
	localStorage.removeItem('apikey');
	localStorage.removeItem('auth');
	localStorage.removeItem('correo');
	localStorage.removeItem('fecha');
	localStorage.removeItem('nombre');
	localStorage.removeItem('paterno');
	localStorage.removeItem('userid');
	//localStorage.removeItem('codigoAcceso');
	window.location.reload();
});
$(document).on("click", "#btn_restaurar_password", function(e) { 
	e.preventDefault();
	var formData = new FormData();
	formData.append('email',$('#input_correo_restaurar').val());  
	$.ajax({
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
		},
		type : 'POST',
		url : URL_WS+'olvide-contrasena',
		data : formData,
		processData: false,
		contentType: false,
	});
});
$(document).on('keyup', '#digito1', function(){
	$('#digito2').focus();
});
$(document).on('keyup', '#digito2', function(){
	$('#digito3').focus();
});
$(document).on('keyup', '#digito3', function(){
	$('#digito4').focus();
});
$(document).on('keyup', '#digito4', function(){
	pincode = $('#digito1').val()+''+$('#digito2').val()+''+$('#digito3').val()+''+$('#digito4').val();
	if(pincode === localStorage.getItem('codigoAcceso')){
		$('#pincode').fadeOut('fast');
	}else{
		$('#digito1').val('');
		$('#digito2').val('');
		$('#digito3').val('');
		$('#digito4').val('');
		$('#digito1').focus();
		app.dialog.alert("Código incorrecto", "Error");

	}
});
$(document).on('change', '.switch', function(){
	var valor = $(this).find( ".checkswitch" ).val();
	if(valor == 0){
		valor = 1;
		$('#formpin').show();
	}else{
		valor = 0;
		$('#formpin').hide();
		localStorage.removeItem('codigoAcceso');
	}
	$(this).find( ".checkswitch" ).val(valor);
});
$(document).on('click', '#btn_guardar_codigo', function(){
	if($('#codigoAcceso1').val()===$('#codigoAcceso2').val()){
		localStorage.setItem('codigoAcceso',$('#codigoAcceso1').val());
		app.dialog.alert("Código establecido correctamente", "Éxito");
	}else{
		app.dialog.alert("Los códigos no coinciden", "Error");
	}
});
$(document).on('click', '.fc-next-button', function(){
	//traer predicciones
	$.ajax({
		url : URL_WS+'predicciones/'+localStorage.getItem('userid'),
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			$("td").removeClass('periodoActivo');
			$("td").removeClass('diaFertil');
			$("td").removeClass('diaOvulacion');
			periodos = data.periodos;
			fecha_ovulacion = data.fecha_ovulacion;
			$.each( periodos, function( key, value ) {
				fecha_inicial = value.fecha_inicial;
				fecha_final = value.fecha_final;
				fecha_inicial = fecha_inicial.split('-');
				fecha_final = fecha_final.split('-');
				var dates = getDates(new Date(fecha_inicial[0],fecha_inicial[1]-1,fecha_inicial[2]), new Date(fecha_final[0],fecha_final[1]-1,fecha_final[2])); 
				$.each( dates, function( key2, value2 ) {
					$("td[data-date='"+value2+"']").addClass('periodoActivo');
				});
			});
			var fecha_fecha_dia_fertil_1 = String(data.dia_fertil_1).split('-');
			var fecha_fecha_dia_fertil_2 = String(data.dia_fertil_2).split('-');
			var dates2 = getDates(new Date(fecha_fecha_dia_fertil_1[0],fecha_fecha_dia_fertil_1[1]-1,fecha_fecha_dia_fertil_1[2]), new Date(fecha_fecha_dia_fertil_2[0],fecha_fecha_dia_fertil_2[1]-1,fecha_fecha_dia_fertil_2[2])); 
			$.each( dates2, function( key3, value3 ) {
				$("td[data-date='"+value3+"']").addClass('diaFertil');
			});
			$("td[data-date='"+data.fecha_ovulacion+"']").addClass('diaOvulacion');


			var fecha_proximo_periodo = String(data.fecha_proximo_periodo).split('-');
			var fecha_proximo_periodo2 = String(data.fecha_proximo_periodo2).split('-');
			var dates3 = getDates(new Date(fecha_proximo_periodo[0],fecha_proximo_periodo[1]-1,fecha_proximo_periodo[2],0,0,0), new Date(fecha_proximo_periodo2[0],fecha_proximo_periodo2[1]-1,fecha_proximo_periodo2[2],0,0,0)); 
			$.each( dates3, function( key4, value4 ) {
				$("td[data-date='"+value4+"']").addClass('proxPeriodo');
			});
			$('#dias_siguiente_periodo').html(data.dias_para_proximo_periodo);
			if(data.probabilidades_embarazo=='alta'){
				$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span><span class="pB alto"></span>');
			}
			if(data.probabilidades_embarazo=='media'){
				$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span>');
			}
			if(data.probabilidades_embarazo=='baja'){
				$('#probabilidades_embarazo').html('<span class="pB bajo"></span>');
			}
			if(data.probabilidades_embarazo=='No se puede saber'){
				$('#probabilidades_embarazo').html('');
			}
		}
	})

});
$(document).on('click', '.fc-prev-button', function(){
	//traer predicciones
	$.ajax({
		url : URL_WS+'predicciones/'+localStorage.getItem('userid'),
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			$("td").removeClass('periodoActivo');
			$("td").removeClass('diaFertil');
			$("td").removeClass('diaOvulacion');
			periodos = data.periodos;
			fecha_ovulacion = data.fecha_ovulacion;
			$.each( periodos, function( key, value ) {
				fecha_inicial = value.fecha_inicial;
				fecha_final = value.fecha_final;
				fecha_inicial = fecha_inicial.split('-');
				fecha_final = fecha_final.split('-');
				var dates = getDates(new Date(fecha_inicial[0],fecha_inicial[1]-1,fecha_inicial[2]), new Date(fecha_final[0],fecha_final[1]-1,fecha_final[2])); 
				$.each( dates, function( key2, value2 ) {
					$("td[data-date='"+value2+"']").addClass('periodoActivo');
				});
			});
				//if(data.dia_fertil_1!=null )
				var fecha_fecha_dia_fertil_1 = String(data.dia_fertil_1).split('-');
				var fecha_fecha_dia_fertil_2 = String(data.dia_fertil_2).split('-');
				var dates2 = getDates(new Date(fecha_fecha_dia_fertil_1[0],fecha_fecha_dia_fertil_1[1]-1,fecha_fecha_dia_fertil_1[2]), new Date(fecha_fecha_dia_fertil_2[0],fecha_fecha_dia_fertil_2[1]-1,fecha_fecha_dia_fertil_2[2])); 
				$.each( dates2, function( key3, value3 ) {
					$("td[data-date='"+value3+"']").addClass('diaFertil');
				});
				$("td[data-date='"+data.fecha_ovulacion+"']").addClass('diaOvulacion');


				var fecha_proximo_periodo = String(data.fecha_proximo_periodo).split('-');
				var fecha_proximo_periodo2 = String(data.fecha_proximo_periodo2).split('-');
				var dates3 = getDates(new Date(fecha_proximo_periodo[0],fecha_proximo_periodo[1]-1,fecha_proximo_periodo[2],0,0,0), new Date(fecha_proximo_periodo2[0],fecha_proximo_periodo2[1]-1,fecha_proximo_periodo2[2],0,0,0)); 
				$.each( dates3, function( key4, value4 ) {
					$("td[data-date='"+value4+"']").addClass('proxPeriodo');
				});
				$('#dias_siguiente_periodo').html(data.dias_para_proximo_periodo);
				if(data.probabilidades_embarazo=='alta'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span><span class="pB alto"></span>');
				}
				if(data.probabilidades_embarazo=='media'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span><span class="pB medio"></span>');
				}
				if(data.probabilidades_embarazo=='baja'){
					$('#probabilidades_embarazo').html('<span class="pB bajo"></span>');
				}
				if(data.probabilidades_embarazo=='No se puede saber'){
					$('#probabilidades_embarazo').html('');
				}
			}
		})
});

$(document).on('click', '#btn_guardar_perfil', function(e){
	e.preventDefault();
	

	var formData = new FormData();
	var edad = $('#input_edad').val();
	formData.append('edad',edad);  
	formData.append('id_usuario',localStorage.getItem('userid'));  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		url : URL_WS+'edad',
		success : function(data){
			app.dialog.alert("Guardado correctamente", "Mensaje");
		},
		error : function(data){
			app.dialog.alert("Guardado correctamente", "Mensaje");
		},
		type : 'POST',
		data : formData,
		processData: false,
		contentType: false
	});


	var formData2 = new FormData();
	var peso_inicial = $('#input_peso_inicial').val();
	formData2.append('peso_inicial',peso_inicial);  
	formData2.append('id_usuario',localStorage.getItem('userid'));  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		url : URL_WS+'peso_inicial',
		success : function(data){
		},
		type : 'POST',
		data : formData2,
		processData: false,
		contentType: false
	});
});

$(document).on('click', '#btn_elegir_foto', function(e){
	$( "#inputfotoperfil" ).trigger( "click" );
});


$(document).on('change', '#inputfotoperfil', function(e){
	var formData = new FormData();
	formData.append('fotoperfil', $('#inputfotoperfil')[0].files[0]); 
	formData.append('id_usuario',localStorage.getItem('userid'));  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		url: URL_WS+'guardar-foto-perfil',
		type: "POST",             // Type of request to be send, called as method
		data: formData, 
		contentType: false, 
		cache: false,      
		processData:false,       
		error: function(data)   
		{
			app.dialog.alert("Hubo un error", "Mensaje");
		},
		success: function(data)   
		{
			$('#avatar').attr('src',data.url_perfil);
			app.dialog.alert("Foto de perfil cargada correctamente", "Mensaje");
		}
	});
});

$(document).on('click', '#cargartickets', function(e){
	app.dialog.alert("Recuerde subir una fotografía legible del ticket", "Mensaje",function(){
		$( "#inputcargar" ).trigger( "click" );
	});


});

$(document).on('change', '#inputcargar', function(e){
	var formData = new FormData();
	formData.append('ticket', $('#inputcargar')[0].files[0]); 
	formData.append('id_usuario',localStorage.getItem('userid'));  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		url: URL_WS+'guardar-ticket',
		type: "POST",             // Type of request to be send, called as method
		data: formData, 
		contentType: false, 
		cache: false,      
		processData:false,       
		error: function(data)   
		{
			app.dialog.alert("Hubo un error", "Mensaje");
		},
		success: function(data)   
		{
			app.dialog.alert("Ticket cargado correctamente, validaremos muy pronto", "Mensaje");
		}
	});
});

$(document.body).on('change','#checkboxMenstruacion',function(){
	if ($('#checkboxMenstruacion').is(':checked')) {
		var dialog = app.dialog.create({
			title: 'Hora de recordatorio',
			text: 'Escriba la hora en la que quiere que se le recuerde',
			content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><select class="dialog-input"><option value="1">1:00:00</option><option value="2">2:00:00</option><option value="3">3:00:00</option><option value="4">4:00:00</option><option value="5">5:00:00</option><option value="6">6:00:00</option><option value="7">7:00:00</option><option value="8">8:00:00</option><option value="9" selected>9:00:00</option><option value="10">10:00:00</option><option value="11">11:00:00</option><option value="12">12:00:00</option><option value="13">13:00:00</option><option value="14">14:00:00</option><option value="15">15:00:00</option><option value="16">16:00:00</option><option value="17">17:00:00</option><option value="18">18:00:00</option><option value="19">19:00:00</option><option value="20">20:00:00</option><option value="21">21:00:00</option><option value="22">22:00:00</option><option value="23">23:00:00</option><option value="24">24:00:00</option></select></div></div>',
			buttons: [{text: 'Ok'}],
			onClick: function (dialog, index) {
				var hora_recordatorio = dialog.$el.find('.dialog-input').val();
	        		//	activar notificacion de menstraucion
	        		var date3 = new Date();
	        		var month_int3 = date3.getMonth()+2;
	        		var year_int3 = date3.getFullYear();
	        		if(month_int3==13){
	        			month_int3=12;
	        		}
	        		$.ajax({
	        			headers: {
	        				"apikey" : localStorage.getItem('apikey')
	        			},
	        			beforeSend : function(){
	        				app.preloader.show();
	        			},
	        			complete : function(){
	        				app.preloader.hide();
	        			},
	        			url : URL_WS+'predicciones/'+localStorage.getItem('userid'),
	        			success : function(data){
	        				if(data.fecha_proximo_periodo!=null){
	        					var fecha_proximo = data.fecha_proximo_periodo;
	        					$.ajax({
	        						headers: {
	        							"apikey" : localStorage.getItem('apikey')
	        						},
	        						beforeSend : function(){
	        							app.preloader.show();
	        						},
	        						complete : function(){
	        							app.preloader.hide();
	        						},
	        						success : function(data){
	        							//alert(fecha_proximo+'T'+hora_recordatorio);
	        							fecha_proximo = fecha_proximo.split('-');
	        							var anio = parseInt(fecha_proximo[0]);
	        							var mes = parseInt(fecha_proximo[1]-1);
	        							var dia = parseInt(fecha_proximo[2]);
	        							var hora = parseInt(hora_recordatorio);
	        							var min = parseInt(0);
	        							var seg = parseInt(0);
	        							cada_cuando = data[0].ciclo_medio;
	        							localStorage.setItem("notifmenstruacion",true);
	        							cordova.plugins.notification.local.schedule({
	        								id : 1,
	        								title: 'Alerta de periodo',
	        								text: 'Su periodo debería de comenzar hoy',
	        								foreground: true,
	        								trigger: { at: new Date(anio,mes,dia,hora,min,seg) }
	        							});
	        							app.dialog.alert("Recordatorio agendado para el "+fecha_proximo+' a las '+hora_recordatorio+' hrs', "Éxito");
	        						},
	        						url : URL_WS+'configuracion/'+localStorage.getItem('userid'),
	        					});
	        				}else{
	        					app.dialog.alert("Debes haber registrado tu último periodo", "Error");
	        				}
	        			}
	        		});
	        	}
	        }).open();
	}else{
		cordova.plugins.notification.local.clear(1, function() {
			cordova.plugins.notification.local.clear(2, function() {
				app.dialog.alert("Recordatorio desactivado", "Éxito");
				localStorage.removeItem('notifmenstruacion');
			});
		});
	}
});



$(document.body).on('change','#checkboxOvulacion',function(){
	if ($('#checkboxOvulacion').is(':checked')) {
		var dialog = app.dialog.create({
			title: 'Hora de recordatorio',
			text: 'Escriba la hora en la que quiere que se le recuerde',
			content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><select class="dialog-input"><option value="1">1:00:00</option><option value="2">2:00:00</option><option value="3">3:00:00</option><option value="4">4:00:00</option><option value="5">5:00:00</option><option value="6">6:00:00</option><option value="7">7:00:00</option><option value="8">8:00:00</option><option value="9" selected>9:00:00</option><option value="10">10:00:00</option><option value="11">11:00:00</option><option value="12">12:00:00</option><option value="13">13:00:00</option><option value="14">14:00:00</option><option value="15">15:00:00</option><option value="16">16:00:00</option><option value="17">17:00:00</option><option value="18">18:00:00</option><option value="19">19:00:00</option><option value="20">20:00:00</option><option value="21">21:00:00</option><option value="22">22:00:00</option><option value="23">23:00:00</option><option value="24">24:00:00</option></select></div></div>',
			buttons: [{text: 'Ok'}],
			onClick: function (dialog, index) {
				var hora_recordatorio = dialog.$el.find('.dialog-input').val();

				$.ajax({
					headers: {
						"apikey" : localStorage.getItem('apikey')
					},
					beforeSend : function(){
						app.preloader.show();
					},
					complete : function(){
						app.preloader.hide();
					},
					url : URL_WS+'predicciones/'+localStorage.getItem('userid'),
					success : function(data){
						if(data.fecha_proximo_periodo!=null){
							var fecha_proximo = data.fecha_ovulacion;
							$.ajax({
								headers: {
									"apikey" : localStorage.getItem('apikey')
								},
								beforeSend : function(){
									app.preloader.show();
								},
								complete : function(){
									app.preloader.hide();
								},
								success : function(data){
	        							//alert(fecha_proximo+'T'+hora_recordatorio);
	        							fecha_proximo = fecha_proximo.split('-');
	        							var anio = parseInt(fecha_proximo[0]);
	        							var mes = parseInt(fecha_proximo[1]-1);
	        							var dia = parseInt(fecha_proximo[2]);
	        							var hora = parseInt(hora_recordatorio);
	        							var min = parseInt(0);
	        							var seg = parseInt(0);
	        							cada_cuando = data[0].ciclo_medio;
	        							localStorage.setItem("notifovulacion",true);
	        							cordova.plugins.notification.local.schedule({
	        								id : 3,
	        								title: 'Alerta de ovulación',
	        								text: 'Su fecha de ovulación es hoy',
	        								foreground: true,
	        								trigger: { at: new Date(anio,mes,dia,hora,min,seg) }
	        							});
	        							app.dialog.alert("Recordatorio agendado para el "+fecha_proximo+' a las '+hora_recordatorio+' hrs', "Éxito");
	        						},
	        						url : URL_WS+'configuracion/'+localStorage.getItem('userid'),
	        					});
						}else{
							app.dialog.alert("Debes haber registrado tu último periodo", "Error");
						}
					}
				});
			}
		}).open();
	}else{

		cordova.plugins.notification.local.clear(3, function() {
			app.dialog.alert("Recordatorio desactivado", "Éxito");
			localStorage.removeItem('notifovulacion');
		});

	}
});





$(document.body).on('change','#checkboxAnticonceptiva',function(){
	if ($('#checkboxAnticonceptiva').is(':checked')) {
		var dialog = app.dialog.create({
			title: 'Hora de recordatorio',
			text: 'Escriba la hora en la que quiere que se le recuerde',
			content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><select class="dialog-input"><option value="1">1:00:00</option><option value="2">2:00:00</option><option value="3">3:00:00</option><option value="4">4:00:00</option><option value="5">5:00:00</option><option value="6">6:00:00</option><option value="7">7:00:00</option><option value="8">8:00:00</option><option value="9" selected>9:00:00</option><option value="10">10:00:00</option><option value="11">11:00:00</option><option value="12">12:00:00</option><option value="13">13:00:00</option><option value="14">14:00:00</option><option value="15">15:00:00</option><option value="16">16:00:00</option><option value="17">17:00:00</option><option value="18">18:00:00</option><option value="19">19:00:00</option><option value="20">20:00:00</option><option value="21">21:00:00</option><option value="22">22:00:00</option><option value="23">23:00:00</option><option value="24">24:00:00</option></select></div></div>',
			buttons: [{text: 'Ok'}],
			onClick: function (dialog, index) {
				localStorage.setItem("notifanticonceptiva",true);
				var hora_recordatorio = dialog.$el.find('.dialog-input').val();
				var d = new Date();
				d.setHours(hora_recordatorio);
				d.setMinutes(0);
				d.setSeconds(0);
				cordova.plugins.notification.local.schedule({
					id : 4,
					title: 'Alerta de pídlora anticonceptiva',
					text: 'No se olvide de tomar su píldora',
					foreground: true,
					at : d,
					trigger: { every: 'day' }
				});
				app.dialog.alert("Recordatorio de píldoras anticonceptivas agendado con éxito ", "Éxito");
			}
		}).open();
	}else{
		cordova.plugins.notification.local.clear(4, function() {
			app.dialog.alert("Recordatorio desactivado", "Éxito");
			localStorage.removeItem('notifanticonceptiva');
		});

	}
});


$(document.body).on('change','#checkboxcheckboxAutoexamen',function(){
	if ($('#checkboxcheckboxAutoexamen').is(':checked')) {
		var dialog = app.dialog.create({
			title: 'Hora de recordatorio',
			text: 'Escriba la hora en la que quiere que se le recuerde',
			content: '<div class="dialog-input-field item-input"><div class="item-input-wrap"><select class="dialog-input"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option></select></div></div>',
			buttons: [{text: 'Ok'}],
			onClick: function (dialog, index) {
				localStorage.setItem("notifautoexamen",true);
				var hora_recordatorio = dialog.$el.find('.dialog-input').val();
				var d = new Date();
				d.setDate(hora_recordatorio);
				d.setHours(10);
				d.setMinutes(0);
				d.setSeconds(0);
				cordova.plugins.notification.local.schedule({
					id : 5,
					title: 'Alerta de autoexamen',
					text: 'No se olvide de hacer un autoexamen de pecho',
					foreground: true,
					at : d,
					trigger: { every: 'month' }
				});
				app.dialog.alert("Recordatorio de autoexamen de pecho agendado con éxito ", "Éxito");
			}
		}).open();
	}else{
		cordova.plugins.notification.local.clear(5, function() {
			app.dialog.alert("Recordatorio desactivado", "Éxito");
			localStorage.removeItem('notifautoexamen');
		});

	}
});
$(document.body).on('click','#btn_guardar_pastilla',function(e){
	e.preventDefault();
	var fecha_inicial = String($('#fecha1').val());
	var fecha_final = String($('#fecha2').val());
	if(fecha_final==''){
		fecha_final = fecha_inicial;
	}
	var hora = String($('#alarm').val());
	var nombre_medicamento = String($('#nombre_medicamento').val());
	var id_usuario = localStorage.getItem('userid');
	var formData = new FormData();
	var horas = hora.split(':')[0];
	var minutos = hora.split(':')[1];
	formData.append('fecha',fecha_inicial);  
	formData.append('fecha_final',fecha_final);  
	formData.append('nombre_pastilla',nombre_medicamento);  
	formData.append('id_usuario',id_usuario);  
	formData.append('hora_notif',hora);  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			var fecha_inicial = data.fecha_inicial;
			var fecha_final = data.fecha_final;
			var nombre_pastilla = data.nombre_pastilla
			output = '<div class="contInfoPastilla"><span class="horaTomaP">'+fecha_inicial+' <-> '+fecha_final+'</span><br><span class="nombreMed">'+nombre_pastilla+'</span><br><span class="nombreMed chico"></span><br><a href="" class="btn_eliminar_medicamento" data-id="'+data.id+'">ELIMINAR MEDICAMENTO</a></div>';
			
			fecha_inicial = fecha_inicial.split('-');
			var anio = parseInt(fecha_inicial[0]);
			var mes = parseInt(fecha_inicial[1]-1);
			var dia = parseInt(fecha_inicial[2]);
			var seg = parseInt(0);
			var d = new Date(anio,mes,dia,horas,minutos,seg);
			cordova.plugins.notification.local.schedule({
				id : data.id,
				title: 'Alerta de toma de medicamento',
				text: 'No se olvide de tomar su medicamento: '+nombre_pastilla,
				foreground: true,
				at : d,
				trigger: { every: 'day' }
			});
			mainView.router.navigate('/pastillasMensual/');
			$('#contenidoMedicamentos').append(output);
		},
		type : 'POST',
		url : URL_WS+'pastilla',
		data : formData,
		processData: false,
		contentType: false,
	});
	//mainView.router.navigate('/agregarPastilla/');
});

$(document.body).on('click','#btn_agregar_pastilla',function(){
	mainView.router.navigate('/agregarPastilla/');
});

$(document.body).on('blur','#txtarea_notas',function(){
	metodo = $(this).attr('data-metodo');
	valor = $(this).val();
	nombre_variable = metodo.replace(new RegExp('-', 'g'), "_");
	id_usuario = localStorage.getItem('userid');
	fecha = localStorage.getItem('fecha');
	registroAjax(metodo,valor,nombre_variable,fecha,id_usuario);
});
$(document.body).on('click','.btn_eliminar_medicamento',function(){
	var id_medicamento = $(this).attr('data-id');
	var formData = new FormData();
	formData.append('id_pastilla',id_medicamento);  
	$.ajax({
		headers: {
			"apikey" : localStorage.getItem('apikey')
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Eliminado correctamente", "Éxito");
			mainView.router.navigate('/mensual/');
			cordova.plugins.notification.local.clear(id_medicamento, function() {});
		},
		type : 'POST',
		url : URL_WS+'eliminar-pastilla',
		data : formData,
		processData: false,
		contentType: false,
	});
});
