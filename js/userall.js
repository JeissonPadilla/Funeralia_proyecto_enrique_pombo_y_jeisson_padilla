miStorage = window.localStorage;
var usuarioactivo =miStorage.getItem('activo');
document.getElementById('login').innerHTML='<b> BIENVENIDO '+usuarioactivo+' </b>';

var clientes=[]

function mostrar(){
    var txtname=document.getElementById('name').value;
    var txtlast=document.getElementById('last').value;
    var txtstate=document.getElementById('state').value;
    var txtcity=document.getElementById('city').value;
    var txtemail=document.getElementById('email').value;
    var txtphone=document.getElementById('phone').value;
    var txtdireccion=document.getElementById('direccion').value;
    var txtbarrio=document.getElementById('barrio').value;
    var estrato = document.getElementById("estrato").value
    var codigo_postal = document.getElementById("cod_postal").value

clientes.push({ Nombre: name, Apellidos: last, Departamento: state, Ciudad: city, Correo: email, Telefono: phone, Estrato: estrato, cogidopostal:codigo_postal});
alert("cliente agregado completamente");


clientesjson=JSON.stringify(clientes);
listaclientes=JSON.parse(clientesjson);
miStorage.setItem('clientes', clientesjson);

console.log(clientes);


miStorage.mname = txtname; 
var sname =localStorage.getItem('mname');
document.getElementById('vernombre').innerHTML='<b>'+sname+' </b>';

miStorage.mlast = txtlast; 
var slast =localStorage.getItem('mlast');
document.getElementById('verapellido').innerHTML='<b>'+slast+' </b>';

miStorage.mstate = txtstate; 
var sstate =localStorage.getItem('mstate');
document.getElementById('verdepartamento').innerHTML='<b>'+sstate+' </b>';

miStorage.mcity = txtcity; 
var scity =localStorage.getItem('mcity');
document.getElementById('verciudad').innerHTML='<b>'+scity+' </b>';

miStorage.memail = txtemail; 
var semail =localStorage.getItem('memail');
document.getElementById('veremail').innerHTML='<b>'+semail+' </b>';

miStorage.mphone = txtphone; 
var sphone =localStorage.getItem('mphone');
document.getElementById('verphone').innerHTML='<b>'+sphone+' </b>';

miStorage.mdireccion = txtdireccion; 
var sdireccion =localStorage.getItem('mdireccion');
document.getElementById('verdireccion').innerHTML='<b>'+sdireccion+' </b>';

miStorage.mbarrio = txtbarrio; 
var sbarrio =localStorage.getItem('mbarrio');
document.getElementById('verbarrio').innerHTML='<b>'+sbarrio+' </b>';

miStorage.mestrato = estrato; 
var sestrato =localStorage.getItem('mestrato');
document.getElementById('vestrato').innerHTML='<b>'+sestrato+' </b>';

miStorage.mcodigo_postal = codigo_postal; 
var scodigo_postal =localStorage.getItem('mcodigo_postal');
document.getElementById('vcodigo').innerHTML='<b>'+scodigo_postal+' </b>';

}