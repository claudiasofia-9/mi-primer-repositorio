/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   //  función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativoLa.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   function esPositivo(num) {
   if(num === 'string' || str.lenght<2 ) console.log(positivo);
   else console.log(negativo);
};
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
function simboloExclamacion(str) {
   if ('hello world') console.log("hola world!");
};
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let concatenando = "soy" + "henry";
   document.write(concatenando);
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let saludo= "Hola"
   nombre = "Martin!"
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return (alto + ancho *2);
   return alto + ancho *2;
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let lado;
   lado = paresInt(prompt("ingresa medida de lado del cuadrado"));
   let area;
   area = lado * lado;
   document.write("El area del cuadrado es: " + area);
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let a = 7;
   let b = 8;
   let c = 6;
   let s = (a + b + c) / 2.0;
   let area = Match.sqrt(s * (s - a) * (s - b) * (s - c));
   console.log.apply('El area del triangulo: ${area}');
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let resultado = euro * 1.2;
   console.log(resultado);
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
  if (letra.lenght > 1) {
   return "Dato incorrecto";
  } if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'u' ) { 
   return "Es vocal";
  } else {
  }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
