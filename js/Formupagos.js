miStorage = window.localStorage;
var usuarioactivo =miStorage.getItem('activo');
document.getElementById('login').innerHTML='<b> BIENVENIDO '+usuarioactivo+' </b>';

var clientes=[]

function mostrar(){
    var txtname=document.getElementById('name').value;
    var txtlast=document.getElementById('last').value;
    var txtcant=document.getElementById('cant').value;
    var txtcontinente=document.getElementById('escoger').value;
    var txtpais=document.getElementById('pais').value;
    var txtcomentario=document.getElementById('comentario').value;

clientes.push({ Nombre: name, Apellidos: last,  Cantidad: cant, Continente: escoger, Pais: pais, Comentario: comentario});
alert("cliente agregado completamente");


clientesjson=JSON.stringify(clientes);
listaclientes=JSON.parse(clientesjson);
miStorage.setItem('clientes', clientesjson);

console.log(clientes);


localStorage.mname = txtname; 
var sname =localStorage.getItem('mname');
document.getElementById('vernombre').innerHTML='<b>'+sname+' </b>';

localStorage.mlast = txtlast; 
var slast =localStorage.getItem('mlast');
document.getElementById('verapellido').innerHTML='<b>'+slast+' </b>';

localStorage.mcant = txtcant; 
var scant =localStorage.getItem('mcant');
document.getElementById('vercantidad').innerHTML='<b>'+scant+' </b>';

localStorage.mescoger = txtcontinente; 
var sescoger =localStorage.getItem('mescoger');
document.getElementById('vercontinente').innerHTML='<b>'+sescoger+' </b>';

localStorage.mpais = txtpais; 
var spais =localStorage.getItem('mpais');
document.getElementById('verpais').innerHTML='<b>'+spais+' </b>';

localStorage.mcomentario = txtcomentario; 
var scomentario =localStorage.getItem('mcomentario');
document.getElementById('vercomentario').innerHTML='<b>'+scomentario+' </b>';

}