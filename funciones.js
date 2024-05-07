const btnEnvia = document.querySelector('.enviaDatos');
const  nombre = document.getElementById('nombre');
const  apell = document.getElementById('apellido');
const  edad = document.getElementById('edad')

btnEnvia.addEventListener("click",()=>{
      const miNombre = nombre.value;
      const miApellido = apell.value;
      const miEdad = edad.value;
      
      saludar(miNombre, miApellido, miEdad);
});

const saludar = (nombr,apell,edad) =>{
  let mensaje = `Hola mi nombre es ${nombr} ${apell} y mi edad ${edad}`;
  const res = document.getElementById('respuesta');
  res.innerHTML = mensaje;
}


const envia = document.querySelector('.enviar');
const  n1 = document.getElementById('numero1');
const  n2 = document.getElementById('numero2');
const  n3 = document.getElementById('numero3')

envia.addEventListener("click",()=>{
   const numero1 = n1.value;
    const numero2 = n2.value;
    const numero3 = n3.value;
    
    sumarCubos(numero1, numero2, numero3);
   // console.log('g');
});

const sumarCubos = (nu1,nu2,nu3) =>{
    let cuboNumero1 = nu1 ** 3;
    let cuboNumero2 = nu2 ** 3;
    let cuboNumero3= nu3 ** 3;

    let mensaje = cuboNumero1 + cuboNumero2 + cuboNumero3 ;
    const resp = document.getElementById('respuesta2');
    resp.innerHTML = `${cuboNumero1} + ${cuboNumero2} + ${cuboNumero3} =  ${mensaje}`;
}

/*
3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
*/

const datos = (valor) => {
   const tipo = typeof valor;
   return tipo;   
}

console.log(datos('estar'));
console.log(datos(2));        
console.log(datos(true));     
console.log(datos(null));     
console.log(datos(undefined));
console.log(datos({}));       
console.log(datos([]));
console.log(datos(function(){}));


/*
4- Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parámetros rest)
*/

function sumar(...numeros) {
   return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
 }
 
 console.log(sumar(5,8,3,1));         
 console.log(sumar(11, 1, 14, 2)); 
 console.log(sumar(2, 4, 6, 8, 10)); 
 console.log(sumar(3));
 console.log(sumar());  

/*
5- Crear una función que reciba un array de valores y filtre los valores que no son string
*/

const numeros = [2,3,'cuatro',5,'seis',7,'ocho'];

const nuevoArray = numeros.filter( numero =>  typeof numero === 'number' );
console.log(nuevoArray);

/*
6- Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
*/

const arrayNumeros = [2,3,4,11,6,87,8,44,22];

function minMax(){

    let menorNumero = arrayNumeros[0];
    let mayorNumero = arrayNumeros[0];
    
  
   // const nMax = arrayNumeros.filter((numeroMax)=> numeroMax >)
   for(a=1; a < arrayNumeros.length; a++){
    if (arrayNumeros[a] < menorNumero) {
        menorNumero = arrayNumeros[a];
      }
      if (arrayNumeros[a] > mayorNumero) {
        mayorNumero = arrayNumeros[a];
      }
   }

   let valorMaxMin = [menorNumero,mayorNumero];

   console.log(valorMaxMin);
  
}

minMax();


/*
7 Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
*/

const numEnteros = [2,3,1,8,6,3,5,4,0];

function TelefonNumber(){
     numEnteros.splice(0,0,'(');
     numEnteros.splice(4,0,')');
     numEnteros.splice(5,0,' ');
     numEnteros.splice(9,0,'-');
     return numEnteros.join(''); 
}
console.log(TelefonNumber()); 

/*
8- Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
*/
const arregloNumber = [
    [2,7,6,5,9],
    [22,11,5,77,37],
    [21,58,30,18,5,90]
]
let [arreglo1,arreglo2,arreglo3] = arregloNumber;

function buscarMayoInMatriz(){
    let ar1 = arreglo1[0];
    let ar2 = arreglo2[0];
    let ar3 = arreglo3[0];
    


    for(o=1; o < arreglo1.length; o++){
          if (arreglo1[o] > ar1) {
               ar1 = arreglo1[o];
          }
       }

    for(r=1; r < arreglo2.length; r++){
        if (arreglo2[r] > ar2) {
             ar2 = arreglo2[r];
        }
     }

     for(n=1; n < arreglo3.length; n++){
        if (arreglo3[n] > ar3) {
             ar3 = arreglo3[n];
        }
     }

     let arreglo4 = [ar1,ar2,ar3];
       console.log(arreglo4);     
}

buscarMayoInMatriz()

/*
9- Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
*/

function firstLastIndex(texto1){
  const indice = texto1.charAt(0); 
  const last = texto1[texto1.length - 1];
  
  const indiceLast = `El indice 0 es ${indice} y el indice del final es ${last}`;
  console.log(indiceLast);
}

firstLastIndex("Cornucopia")

/*
10- Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
*/

function convierteaMatriz(objPeronas) {
   return Object.entries(objPeronas);
 }
 
 // Ejemplo de uso:
 const miObjeto = { pedro: 15, luis: 12, ana: 16 };
 const matriz = convierteaMatriz(miObjeto);
 console.log(matriz);
 

 /*
11- Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
*/

function sumarPresupuestos(trabajadores){
    const total = trabajadores.reduce((ac,trabajador)=>
           ac + trabajador.presupuesto ,0);
     return total;
     //console.log(trabajadores[0]);
}

const empleados = [
   { nombre: 'Juan', presupuesto : 1500},
   { nombre: 'Ana', presupuesto : 1900},
   { nombre: 'Diego', presupuesto : 2500},
   { nombre: 'Arturo', presupuesto : 1380}
];

let obtenerTotall = sumarPresupuestos(empleados);
console.log(`El presupuesto total es : ${obtenerTotall}`);

/*
12- Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

*/

function convertirObjeto(alumnos){
    //console.log(alumnos);
    const listAlumnos = alumnos.map((alumno)=> alumno.nombre);
    return listAlumnos;
}

const estudiantes = [
   {nombre:'Mariela'},
   {nombre:'Andrea'},
   {nombre:'Carlos'},
   {nombre:'Franco'}
]

const arreyNombres = convertirObjeto(estudiantes);
console.log(arreyNombres);

/*
13- Escriba una función que convierta un objeto en una matriz de claves y valores.
*/

function transformArray(valores){
    let separarArrey = Object.entries(valores);
    return separarArrey;
}

let valores = [
   {vegetales: 'Apio'},
   {frutas: 'Manzana'},
   {ropa: 'Polera'},
   {calzado:'Nike'}
]

const newArreglos = transformArray(valores);
console.log(newArreglos);

/*
14- Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
*/

function plusCuadrado(n) {
   let suma = 0;
   for (i = 1; i <= n; i++) {
     suma += i * i;
   }
   return suma;
 }

 const p = 5;
 const nCuadrados = plusCuadrado(p);
 console.log("La suma de los cuadrados hasta", p, "es:", nCuadrados);


/* 
15- Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
*/

function multiplicaValor(num){
    let result = 0;
    for(x=0;x< num.length; x++){
       result += num[x] * num.length;
    }
    return result;
}

let numerosx = [2,5,7,8,4];

let resultado = multiplicaValor(numerosx);
console.log(`La suma de sus valores es: ${resultado}`);

/* 
16- Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
*/

function crearArreyNum(numerox){
   let newArrayNumber = [];
  for(u = numerox; u >= 0; u--){
       newArrayNumber.push(u);
  }
  return(newArrayNumber);
}

let numeroN = 15;

const arreyNum = crearArreyNum(numeroN);
console.log(arreyNum);

/*
17- Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
*/

function findMayorMenor(packNumber){
  // console.log(packNumber);
  let nMayor = 0;
  let nMenor = 0;
   for(x=0; x<packNumber.length; x++)
   {
       if(packNumber[x] > nMayor){
          nMayor = packNumber[x];
       }
       
        if(packNumber[x] < nMenor){
          nMenor = packNumber[x];
        }
       
   }
   return [nMenor,nMayor] ;
}

const packNumber = [22,4,8,77,65,-12,2,-5];

let mayoYMenor = findMayorMenor(packNumber);
let total = mayoYMenor[0] + mayoYMenor[1]; 

console.log(`El numero menor es: ${mayoYMenor[0]} y el mayor es: ${mayoYMenor[1]} la suma es: ${total}`);

/*
18-Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
*/

function filtrarnumeros(listas) {
   return listas.filter(lista => Number.isInteger(Number(lista)));
 }
 
 const listaNumeros = ['1', 'dos', '3', '11', '5', '6', 'siete','8','12','nueve'];
 const enteros = filtrarnumeros(listaNumeros);
 console.log("Arrey de enteros:", enteros);

 /*
 19- Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
 */

 function repetirElemento(elemento,veces){
     let respuesta = [];
    
     for (let i = 0; i < veces; i++) {
      respuesta.push(elemento);
    }
    return respuesta;
 }

 const elementRepeat = repetirElemento('Hierro', 5);
 console.log(elementRepeat);

 /* 
 20- Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
 */

 String.prototype.vreplace = function(vocalNueva) {
  return this.replace(/[aeiou]/gi, vocalNueva);
};

const texto = "cadena de caracteres";
const cadenaCambiada = texto.vreplace('e');
console.log(cadenaCambiada);

/*
21- Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
*/

function encontrarNemo(frase) {
   const divedeWord = frase.split(' ');
   const posicion = divedeWord.indexOf('Nemo');
 
   if (posicion !== -1) {
     return `Nemo esta en la palabra ${posicion + 1}!`;
   } else {
     return "¡No encontrado!";
   }
 }
 
 const cadena = "Buscando en todo este ancho mar a Nemo y sin encontrar";
 const resultadoBusqueda = encontrarNemo(cadena);
 console.log(resultadoBusqueda);

 /*
 22- Cree una función que capitalice la última letra de cada palabra.
 */

function capitalizaUltima(laFrase){

   let arrayPalabras = laFrase.split(' ');

   const palabrasCapitalizadas = arrayPalabras.map(palabra => {
      const longitud = palabra.length;
      const lastLetter = palabra.charAt(longitud - 1).toUpperCase();
      return palabra.slice(0, longitud - 1) + lastLetter;
   });
      const newCadena = palabrasCapitalizadas.join(' ');

      return newCadena;

};

 const frase = "en el mundo de las maletas";
 const respt = capitalizaUltima(frase);
 console.log(respt);