/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var elevadoAlCuadrado = Math.pow(num, 2)
   return elevadoAlCuadrado
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var elevadoAlCubo = Math.pow(num, 3)
   return elevadoAlCubo
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   var elevadoAlExponente = Math.pow(num, exponent)
   return elevadoAlExponente
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var numeroRedondeado = Math.round(num)
   return numeroRedondeado
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var numeroRedondeadoHaciaArriba = Math.ceil(num)
   return numeroRedondeadoHaciaArriba
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   // function numeroAleatorioDecimales(min, max) {
   //    var num = Math.random() * (max - min);
   //    return num + min;
   // }

   return Math.random() * (1 - 0) + 0
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
