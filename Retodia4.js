//ejercicios nivel_1
//1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
//Ingrese su edad: 30
//Tiene la edad suficiente para conducir.
////Ingrese su edad:15
//Te faltan 3 años para conducir.*/

   let edad = prompt("Ingrese su edad");

    edad >= 18
     ? console.log("Tiene la edad suficiente para conducir.")
     : console.log(`Te faltan 3 años para conducir.`);


/*2.Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Use prompt(“Ingrese su edad:”) para obtener la edad como entrada.
Ingrese su edad: 30
Eres 5 años mayor que yo.*/
let miEdad = prompt("ingrese mi edad");
let tuEdad = prompt("ingrese tu edad");

if(miEdad > tuEdad){
    let diferencia = miEdad - tuEdad;

    console.log('Eres ' + diferencia + ' años mayor que yo.'
    )
    
} else {
    let diferencia = tuEdad - miEdad;

    console.log('eres ' + diferencia + ' años menor que yo')
}

//3.Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
//usando si no
//operador ternario.

let a = 4;
let b = 3;
if(a > b) {
    console.log(`${a} es mayor que ${b}`)
    console.log(`${b} es menor que ${a}`)
}

//4.Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usar JavaScript?
//Ingrese un número: 2
//2 es un número par

//Ingrese un número: 9
//9 es un número impar

let numero = prompt("ingrese un número:");
if(numero % 2 == 0) {
    console.log(`${numero} es un número par`);
} else {
    console.log(`${numero} es un número impar`);

}

//ejercicios nivel_2

/*1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/
let puntaje = prompt("Ingrese la calificacion del estudiante");
alert(puntaje);
if(parseInt(puntaje) >= 80 && parseInt(puntaje) <= 100) {
  alert("CATEGORIA A")
} else if (parseInt(puntaje) >= 70 && parseInt(puntaje) <= 79) {
  alert("SEGUNDO") 
} else if (parseInt(puntaje) >= 60 && parseInt(puntaje) <= 69) { 
  alert("CATEGORIA C")
} else if (parseInt(puntaje) >= 50 && parseInt(puntaje) <= 59) { 
  alert("CATEGORIA D")
} else if (parseInt(puntaje) >= 0 && parseInt(puntaje) <= 49) { 
  alert("CATEGORIA E")
} else { 
  alert("INGRESE NUMEROS DEL 0 AL 100");
}

/*2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
Si la entrada del usuario es :
- Septiembre, Octubre o Noviembre, la temporada es Otoño.
- Diciembre, Enero o Febrero, la temporada es Invierno.
- Marzo, Abril o Mayo, la temporada es Primavera
- Junio, Julio o Agosto, la temporada es Verano*/

let estacion = prompt("Ingrese mes de la temporada");
let temporada2 = estacion.toLowerCase();

if (
        temporada2 == "septiembre" || 
        temporada2 == "octubre" ||
        temporada2 == "noviembre" 
      ) 
{
       alert("la temporada es primavera"); 
} else if ( 
         temporada2 == "diciembre" || 
         temporada2 == "enero" ||
         temporada2 == "febrero"
       ) 
{
       alert("la temporada es verano");

} else if (  
         temporada2 == "marzo" || 
         temporada2 == "abril" ||
         temporada2 == "mayo" 
       ) 
{
       alert("la temporada es otoño");

} else if (  
         temporada2 == "junio" || 
         temporada2 == "julio" ||
         temporada2 == "agosto" 
       )
{
       alert("la temporada es invierno");

} else {
       alert("Ingresa el nombre de un mes valido");
}

/*3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
¿Qué día es hoy? Sábado
El sábado es fin de semana.

¿Qué día es hoy? sábAdo
El sábado es fin de semana.

¿Qué día es hoy? Viernes
El viernes es un día laborable.

¿Qué día es hoy? ViErNes
El viernes es un día laborable.*/
let dia = prompt("¿Que dia es hoy?");

dia.toUpperCase() == "SABADO" ||
dia.toUpperCase() == "VIERNES"

? alert (dia.toUpperCase('es fin de semana'))
: alert (dia.toUpperCase('es dia laborable'))


//ejercicios nivel_3

/*1. Escribe un programa que diga el número de días en un mes.
Introduce un mes: Enero
Enero tiene 31 días.

Introduce un mes: ENERO
enero tiene 31 dias

Introduce un mes: Febrero
Febrero tiene 28 días.

Introduce un mes: FEbrero
Febrero tiene 28 días.
*/

function obtenerDiaDelMes(year,month) {
  return new Date(year, month, 0).getDate();
}
let mes = prompt("Introduce un mes: ");
 
switch (mes.toUpperCase()) { 
      case "ENERO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,1)} dias.`);
      break;
}
switch (mes.toUpperCase()) { 
      case "FEBRERO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,2)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "MARZO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,3)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "ABRIL":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,4)} dias.`);
      break;
}
      switch (mes.toUpperCase()) {
      case "MAYO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,5)} dias.`);
      break;
      }
switch (mes.toUpperCase()) {
      case "JUNIO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,6)} dias.`);
      break; 
}
switch (mes.toUpperCase()) {
      case "JULIO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,7)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "AGOSTO":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,8)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "SEPTIEMBRE":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,9)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "OCTUBRE":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,10)} dias.`);
      break;
}
switch (mes.toUpperCase()) { 
      case "NOVIEMBRE":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,11)} dias.`);
      break;
}
switch (mes.toUpperCase()) {
      case "DICIEMBRE":
      console.log(`${mes} tiene ${obtenerDiaDelMes(2023,12)} dias.`);
      break;
}

//2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

function obtenerDiaDelMes(year,month) {
      return new Date(year, month, 0).getDate();
    }
    let mes20 = prompt("Introduce un mes: ");
     
    switch (mes.toUpperCase()) { 
          case "ENERO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,1)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) { 
          case "FEBRERO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,2)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "MARZO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,3)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "ABRIL":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,4)} dias.`);
          break;
    }
          switch (mes.toUpperCase()) {
          case "MAYO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,5)} dias.`);
          break;
          }
    switch (mes.toUpperCase()) {
          case "JUNIO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,6)} dias.`);
          break; 
    }
    switch (mes.toUpperCase()) {
          case "JULIO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,7)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "AGOSTO":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,8)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "SEPTIEMBRE":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,9)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "OCTUBRE":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,10)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) { 
          case "NOVIEMBRE":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,11)} dias.`);
          break;
    }
    switch (mes.toUpperCase()) {
          case "DICIEMBRE":
          console.log(`${mes} tiene ${obtenerDiaDelMes(2020,12)} dias.`);
          break;
    }