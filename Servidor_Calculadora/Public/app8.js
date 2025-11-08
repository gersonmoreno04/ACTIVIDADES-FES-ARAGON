//MORENO ANAYA GERSON
var primerNumero;

function agregarPantalla(valor){ //INICIALIZAMOS LA PANTALLA
    document.getElementById('pantalla').value += valor;
}

function limpiarPantalla(){ //FUNCION PARA LIMPIAR PANTALLA
    document.getElementById('pantalla').value = "";
    primerNumero = null;
}


function calcular() {  //FUNCIONAMIENTO DE LA CALCULADORA.
    var pantalla = document.getElementById('pantalla');
    if (primerNumero == null) {//VERIFICAR SI YA HAY UN NUMERO EN LA PRIMERA VARIABLE
        primerNumero = pantalla.value;//LIMPIAMOS PANTALLA
        pantalla.value = "";

    } else {
        var segundoNumero = pantalla.value;
        if (parseFloat(primerNumero) > parseFloat(segundoNumero)) { //COMPARAMOS LOS DOS NUMEROS
            pantalla.value = 'Mayor que';
        } else if (parseFloat(primerNumero) < parseFloat(segundoNumero)) {
            pantalla.value = 'Menor que';
        } else {
            pantalla.value = 'Igual';
        }
        primerNumero = null;//REINCIAMOS LA PANTALLA PARA HACER OTRO CALCULO
    }
}