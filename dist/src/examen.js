/**
*  Module reservas
*
* Description
*/
angular.module('indexexamen', [])
.controller('menu', function(){
	var menu=this;	
	menu.list=[
		{text:'HOME',href:'#Inicio'},
		{text:'SERVICE',href:'#Our_Service'},
		{text:'PORTAFOLIO',href:'#Portafolio'},
		{text:'CONTACTENOS',href:'#Contactenos'},
	];
})
.controller('inicio', function(){
	var inicio=this;
	inicio.fotos=[		
		{src:'./img/slider/s2.jpeg',title:'img2'},
		{src:'./img/slider/s3.jpeg',title:'img3'},
	];
})
.controller('servicio', function(){
	var servicio=this;
	servicio.json= { 
		  "titulo_principal": "Nuestros Servicios",
		  "texto_principal": "Fusce tortor risus,tempor facilisis porttitor et, pretium id elit. Mauris sit amet ex interdum, congue sem et, blandit sapien.Mauris sit amet ex interdum, congue sem et, blandit sapien.Mauris sit amet ex interdum, congue sem et, blandit sapien.", 
		  "items": [ 
		  			{ 
		  				"titulo": "Custom Design", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa-pencil" 
		  			},
		  			{ 
		  				"titulo": "Inovative Ideas", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa-lightbulb-o" 
		  			},
		  			{ 
		  				"titulo": "Love is The Anwer", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa-heart-o" 
		  			},
		  			{ 
		  				"titulo": "Resposive Layout", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa-mobile" 
		  			},
		  			{ 
		  				"titulo": "24/7 Support", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa-comment-o" 
		  			},
		  			{ 
		  				"titulo": "Feel Like A Star", 
		  				"texto": "Nulla diam erat, molestie f acilisis nibh a, porttitor aliquam urna.", 
		  				"imagen": "fa fa-star-o" 
		  			}
		  			] 
		};
	
})
.controller('portafolio', function(){
	var portafolio=this;
	portafolio.elecion="All";
	portafolio.json= { 
		  "titulo_principal": "Portafolio",
		  "texto_principal": "Fusce tortor risus,tempor facilisis porttitor et, pretium id elit. Mauris sit amet ex interdum, congue sem et, blandit sapien.Mauris sit amet ex interdum, congue sem et, blandit sapien.Mauris sit amet ex interdum, congue sem et, blandit sapien.", 
		  "catgorialist":[
		  				{"name":"All"},
		  				{"name":"Artwork"},
		  				{"name":"Graphic_design"},
		  				{"name":"Web_design"}
		  			],
		  "items": [ 
		  			{ 		  				
		  				"categoria": "Artwork", 
		  				"src": "./img/portafolio/artwork/a1.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Artwork", 
		  				"src": "./img/portafolio/artwork/a2.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Artwork", 
		  				"src": "./img/portafolio/artwork/a3.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Artwork", 
		  				"src": "./img/portafolio/artwork/a4.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Graphic_design", 
		  				"src": "./img/portafolio/graphic_design/g1.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Graphic_design", 
		  				"src": "./img/portafolio/graphic_design/g2.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Graphic_design", 
		  				"src": "./img/portafolio/graphic_design/g3.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Graphic_design", 
		  				"src": "./img/portafolio/graphic_design/g4.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Web_design", 
		  				"src": "./img/portafolio/web_design/w1.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Web_design", 
		  				"src": "./img/portafolio/web_design/w2.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Web_design", 
		  				"src": "./img/portafolio/web_design/w3.png" 
		  			},
		  			{ 		  				
		  				"categoria": "Web_design", 
		  				"src": "./img/portafolio/web_design/w4.png" 
		  			},
		  			
		  			] 
		};
		portafolio.elegir=function(){
			portafolio.elecion= portafolio.opcion;
		}

		portafolio.elegira=function(opcion){
			portafolio.elecion=opcion;	
			//console.log(opcion);
		}
	
})
.controller('Contactenos', function(){
	var contact=this;	
	contact.enviarDatos= function (datosf) {
		console.log(datosf);
    $.ajax({
            url: './dist/src/enviarDatos.php',
            type: 'POST',
            dataType: 'json',
            data: {Name: datosf.Name , Email: datosf.Email,Subject: datosf.Subject,Mensaje:datosf.Mensaje},
        })
        .done(function(data) {
            console.log(data);
            console.log("success");
            var html = '<div class="alert alert-info" role="alert">';
            	html+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
  				html+='<span aria-hidden="true">&times;</span></button>';
                html += data.respuesta;
                html += '</div>';
            $('#mensaje').html(html);
             
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
  };
	
});