/**
*  Module ListaReservas
*
* Description
*/
angular.module('ListaReservas', [])
.controller('ReservaControl', function(){
	var reservalist=this;
	reservalist.list=[
		{fecha:'4:00',estacion:'la y',estado: true,Calif:2},
		{fecha:'5:00',estacion:'la carolina',estado: true,Calif:2}];
	console.log(reservalist);
	reservalist.add=function () {
		reservalist.list.push({fecha:reservalist.Fecha,estacion:reservalist.Estacion,estado: true,Calif:reservalist.Calificacion});
		reservalist.Fecha='';
		reservalist.Estacion='';
		reservalist.Calificacion='';
	};
	reservalist.add=function () {
		var s
	};
});