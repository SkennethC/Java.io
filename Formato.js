
var edad = 18;

if(edad == 18){
    alert("Tu puedes ingresar a esta pagina");
}else{
    alert("Este contenido no es permitido para menores");
}
 
    function VerificarMenu(){
        var valor = document.getElementById("menu").value;
         switch(valor){
            case "1":
                document.getElementById("mensaje").innerHTML = "Elegiste opcion 1";
                break;
          case "2":
               document.getElementById("mensaje").innerHTML = "Elegiste opcion 2";
                    break;
            case "3":
                     document.getElementById("mensaje").innerHTML = "Elegiste opcion 3";
                        break;
         }
    }
    function TryCatch(){
        const valor =null
      try{
        valor()
}catch(error) {
document.getElementById("Resultado").innerHTML = "Valor no puede ser nulo"
}  
    }
function CicloFor(){

    for(var i= 1; i<=10; i++){
        document.getElementById("Ciclo").innerHTML = i;
    }
}
function CicloWhile(){
    var numero = 1;
    while(numero <= 20){
        document.getElementById("While").innerHTML = numero;
        numero++;
    }
}
function DoWhile(){


    var i = 0;
    var cant = parseInt(prompt("Ingrese la cantidad"));
   do{
    alert("Valor i:" +i);
    document.getElementById("Do").innerHTML = "Imprima i:" +i;
    i++
   }while(i <=cant);
}
function Suma(){
    var cant = parseInt(prompt("Ingrese primer digito en sumar"));
    var cant2 = parseInt(prompt("Ingrese segundo digito en sumar"));

    document.getElementById("ResultadoOperaciones").innerHTML = cant + cant2;
}
function Resta(){
    var cant = parseInt(prompt("Ingrese primer digito en restar"));
    var cant2 = parseInt(prompt("Ingrese segundo digito en restar"));

    document.getElementById("ResultadoOperaciones").innerHTML = cant - cant2;
}
function Multiplcar(){
    var cant = parseInt(prompt("Ingrese primer digito en multiplicar"));
    var cant2 = parseInt(prompt("Ingrese segundo digito en multiplicar"));

    document.getElementById("ResultadoOperaciones").innerHTML = cant * cant2;
}
function Dividir(){
    var cant = parseInt(prompt("Ingrese primer digito en dividir"));
    var cant2 = parseInt(prompt("Ingrese segundo digito en dividir"));

    document.getElementById("ResultadoOperaciones").innerHTML = cant / cant2;
}
function OperadoresLogicos(){
    var cant = parseInt(prompt("Ingrese un valor numerico"));
    var cant2 = parseInt(prompt("Ingrese otro valor numerico"));

    if(cant == cant2 || cant %2 && cant2%2){
        document.getElementById("Logicos").innerHTML = "Valores iguales y pares";
    }else{
        document.getElementById("Logicos").innerHTML = "Valores diferentes e impares"; 
    }
}
function ObjetoNumbers(){
let x = parseInt(prompt("Ingrese un valor numerico"));
let y = parseInt(prompt("Ingrese otro valor numerico"));
document.getElementById("Number").innerHTML = x.toString() + "<br>" + (y).toString() +  "<br>" +(x+y).toString();
}
function Math(){
    var num = parseInt(prompt("Ingrese un valor"));
    var pot = parseInt(prompt("Ingrese la potencia valor"));
   
    document.getElementById("Mate").innerHTML = num *2;
}
function MostrarFecha(){
    const añoActual = new Date();
    document.getElementById("Fecha").innerHTML =  añoActual;
}
function Arrary(){
    const cars = ["Mercedes", "Audi", "BMW"];
document.getElementById("arreglos").innerHTML = cars;
}
function ArrayT(){
    const numbers = new Int32Array(5);
    
    // Asignamos valores al arreglo
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;
    
    // Mostramos los valores del arreglo en la página HTML
  
     document.getElementById("output").innerHTML = "Valores del arreglo: " + numbers;
   
}