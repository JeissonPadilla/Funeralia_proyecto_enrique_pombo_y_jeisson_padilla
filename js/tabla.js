miStorage = window.localStorage;
datos=[]
var i=1
var geshiro = function(){
    
       var name= document.getElementById('Dnombre').value
       var last= document.getElementById('Dapellido').value
       var cantidad= document.getElementById('Dcantidad').value
       var continente= document.getElementById('estados').value 
       var suma=i++

    

    if (continente == "europa"){
        var total = parseFloat(cantidad)*1500000 
        
    }else
    if (continente == "asia"){ 
       var total = parseFloat(cantidad)*2000000
        
    }else
    if (continente == "norteamerica"){ 
        var total = parseFloat(cantidad)*1250000
    }else
    if (continente == "suramerica"){ 
        var total = parseFloat(cantidad)*1000000

    }

     
    
    if (cantidad == "" || continente == "" || name == "" || last == ""){
        alert("verfique que los campos: nombre, apellido, cantidad y continente no esten vacios")
    }
    else{
    // document.getElementById("data_table").innerHTML += "<tr><td>"+name+ " " +last+"</td><td>"+cantidad+"</td><td>"+total+"</td></td>"
    var tabla = document.getElementById("data_table");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = suma;

    cell1 = nuevaFila.insertCell(1);
    cell1.innerHTML = name;

    cell2 = nuevaFila.insertCell(2);
    cell2.innerHTML = last;

    cell3 = nuevaFila.insertCell(3);
    cell3.innerHTML = cantidad;

    cell3 = nuevaFila.insertCell(4);
    cell3.innerHTML = continente;

    cell4 = nuevaFila.insertCell(5);
    cell4.innerHTML = total;

    cell5 = nuevaFila.insertCell(6);
    cell5.innerHTML =   `<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;

    document.getElementById("miForm").reset();

    }


datos.push({nombre:name, apellido:last, Cantidad:cantidad, Continente:continente, Total:total })
datosjson=JSON.stringify(datos);
listadatos=JSON.parse(datosjson);
miStorage.setItem('datos', datosjson);

console.log(datos);
    
  
}

function onDelete(td){

    row = td.parentElement.parentElement;
    document.getElementById("data_table").deleteRow(row.rowIndex);

    }






