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

    console.log('eres ' + diferencia + ' años mayor que yo')
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

let numero = 2;
if(numero % 2 == 0) {
    console.log(`${numero} es un número par`);
} else {
    console.log(`${numero} es un número impar`);

}

//ejercicios nivel_2

//1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
/*- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
*/
let A = 80-100;
let B = 70-89;
let C = 60-69;
let D = 50-59;
let F = 0-49;
nota = A, B, C, D, F 
   ? console.log(`ESTUDIANTE APROBADO CON: ${nota}`)
   : console.log("ESTUDIANTE REPROBADO")

/*2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
Si la entrada del usuario es :
- Septiembre, Octubre o Noviembre, la temporada es Otoño.
- Diciembre, Enero o Febrero, la temporada es Invierno.
- Marzo, Abril o Mayo, la temporada es Primavera
- Junio, Julio o Agosto, la temporada es Verano*/

let temporada = "temporada";

switch ("temporada") {    
    case "diciembre": 
      console.log("mes diciembre la temporada es verano");
      console.warn(`${mes}`);
      break;
    case "enero":
      console.log("mes enero la temporada es verano");
      console.warn(`${mes}`);
      break;
    case "febrero":
      console.log("mes febrero la temporada es verano");
      console.warn(`${mes}`);
      break;
    case "marzo":
      console.log("la temporada es otoño");
      break;
    case "abril":
      console.log("la temporada es otoño");
      break;
    case "mayo":
      console.log("la temporada es otoño");
      break;
    case "junio":
      console.log("la temporada es invierno");
      break;
    case "julio":
      console.log("la temporada es invierno");
      break;
    case "agosto":
      console.log("la temporada es invierno");
      break;
    case "septiembre":
      console.log("la temporada es primavera");
      break;
    case "octubre":
      console.log("la temporada es primavera");
      break;
    case "noviembre":
      console.log("la temporada es primavera");
      break;
    default:
      console.log("temporada equivocada.");
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

switch (dia) {
    case "lunes":
     console.log("lunes es un dia laborable.");
     break;  
    case "martes":
     console.log("martes es un dia laborable.");     
     break;
    case "miercoles":
     console.log("miercoles es un dia laborable.");     
     break;
    case "jueves":
     console.log("jueves es un dia laborable.");     
     break;
    case "viernes":
     console.log("viernes es un dia laborable.");     
     break;
    case "sabado":
     console.log("sabado es fin de semana");     
     break;
    case "domingo":
     console.log("domingo es fin de semana");     
     break;
    default:
     console.error("No ingresaste un nombre de la semana. Vuelva a intentarlo..")
}

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

//2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

*/