//MORENO ANAYA GERSON 
//COMPARAR 3 NUMEROS 
console.log("Compara 3 numeros");
let a=parseInt(prompt("Ingresa el A: "));
let b=parseInt(prompt("Ingresa el B: "));
let c=parseInt(prompt("Ingresa el c: "));
console.log("A:"+a+", B:"+b+", C:"+c);

if(a == b && a==c){
    console.log("Todos los numeros son iguales");
}
else{
    if(a==b && a!=c){
        console.log("a y b son iguales");
    }
    if(a==c && a!=b){
        console.log("a y c son iguales");
    }
    if(c==b && c!=a){
        console.log("b y c son iguales");
    }
    if(a > b && b > c){
        console.log("El mayor es a");
    }
    else{
        if(b > a && b > c){
            console.log("El mayor es B");
        }
        else{
            console.log("El mayor es C");
        }
    }
    if(a<b && a<c){
        console.log("El menor es A");
    }
    else{
        if(b < a && b < c){
            console.log("El menor es B");
        }
        else{
            console.log("El menor es C");
        }
    }
    if( (a>b && a<c) || (a<b && a>c)){
        console.log("El de en medio es A");
    }
    else{
        if( (b>a && b<c) || (b<a && b>c)){
            console.log("El de en medio es B");
        } else{
            console.log("El de enmedio es C");
        }
    }
}