var i=1
datos=[]
var geshiro = function(){
    
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
    var suma=i++
    
    
    
    if (txtstate == "" || txtlast == "" || txtname == "" || txtcity == "" || txtemail == "" || txtphone == "" || txtdireccion == "" || txtbarrio == ""
    || estrato== "" || codigo_postal == "" ){
        alert("verfique que los campos no esten vacios")
    }
    else{
    var tabla = document.getElementById("mitable");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell0 = nuevaFila.insertCell(0);
    cell0.innerHTML = suma;

    cell1 = nuevaFila.insertCell(1);
    cell1.innerHTML = txtname;

    cell2 = nuevaFila.insertCell(2);
    cell2.innerHTML = txtlast;

    cell3 = nuevaFila.insertCell(3);
    cell3.innerHTML = txtstate;

    cell4 = nuevaFila.insertCell(4);
    cell4.innerHTML = txtcity;

    cell5 = nuevaFila.insertCell(5);
    cell5.innerHTML = txtemail;

    cell6 = nuevaFila.insertCell(6);
    cell6.innerHTML = txtphone;

    cell7 = nuevaFila.insertCell(7);
    cell7.innerHTML = txtdireccion;

    cell8 = nuevaFila.insertCell(8);
    cell8.innerHTML = txtbarrio;

    cell9 = nuevaFila.insertCell(9);
    cell9.innerHTML = estrato;

    cell10 = nuevaFila.insertCell(10);
    cell10.innerHTML = codigo_postal;


    cell11 = nuevaFila.insertCell(11);
    cell11.innerHTML =   `<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;

    document.getElementById("miForm").reset();

    }
    datos.push({id:suma, nombre:txtname, apellido:txtlast, departamento:txtstate, ciudad:city, email:txtemail, telefono:txtphone, direccion:txtdireccion, barrio:txtbarrio, Estrato:estrato, c_postal:codigo_postal })
    datosjson=JSON.stringify(datos);
    listadatos=JSON.parse(datosjson);
    miStorage.setItem('datos', datosjson);
    
    console.log(datos);



    
  
}

function onDelete(td){

    row = td.parentElement.parentElement;
    document.getElementById("mitable").deleteRow(row.rowIndex);

    }