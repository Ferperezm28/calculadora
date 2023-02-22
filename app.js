//obtener identificador del html
let boton = document.getElementById('sumar');

let botton = document.getElementById('restar');
let button = document.getElementById('multiplicar');
let buton = document.getElementById('dividir');

// obtener identificador de respuesta del html
let respuesta = document.getElementById('respuesta');

// evento - hacer clic en el boton
boton.addEventListener('click', hacersuma);
botton.addEventListener('click', hacerresta);
button.addEventListener('click', hacermultiplicacion);
buton.addEventListener('click', hacerdivision);

//funcion de sumar
function hacersuma(){
    //obtener los numeros 1 y 2, convertir el valor en un numero decimal
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    //Sumar
    let n3 =n1+n2;
    //Formato de respuesta
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

//funcion de restar
function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1-n2;
    
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

//funcion de multiplicar
function hacermultiplicacion(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1*n2;
    
    respuesta.innerHTML=`El resultado de la multiplicacion es: ${n3}`;
}

//funcion de dividir
function hacerdivision(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=n1/n2;
    
    respuesta.innerHTML=`El resultado de la division es: ${n3}`;
}

