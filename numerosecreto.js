//MORENO ANAYA GERSON
//ADIVINAR UN NUMERO
var num = Math.floor(Math.random()*(10-1+1)*1)//Funcion que elige un numero del 1 al 10 
//Inicio del juego 
var vida = 3;//Numero de vidad
    while(vida>0){
        var x = parseInt(prompt("Adivina un numero entre el 1 y el 10: "));
        //Condiciones para adivinar
        if(x==num){
            console.log("Ganaste, adivinaste el numero");
        }else{
            console.log("Noooo, intenta de nuevo");
            vida--;
        }
        console.log("Vidas restantes: "+vida);
    }
console.log("Fin del juego");   