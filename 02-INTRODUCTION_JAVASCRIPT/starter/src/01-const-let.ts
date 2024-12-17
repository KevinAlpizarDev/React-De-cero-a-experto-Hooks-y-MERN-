// console.log("Hi");

// import { normalizeHash } from "@remix-run/router/dist/utils";


// let nombre = "Kevin"
// const apellido = "Alpizar"

// let valorDado = 3
// valorDado = 4


// // console.log(nombre, apellido, valorDado);

// if (true) {
//     let valorDado = 6
//     let nombre = "Raúl"
//     // console.log(valorDado, nombre);
//     console.log(valorDado);
//     console.log(nombre);
    
    
// }

// // console.log(valorDado);
// console.log(valorDado);
// console.log(nombre);



//15-template strings

// const nombre = "kevin"
// const apellido = "Alpizar"


// const nombreCompleto = nombre + " " + apellido
// const nombreCompleto2 = `Hola mundo ${nombre} ${apellido}`
// console.log(nombreCompleto );
// console.log(nombreCompleto2);



// function getSaludo(nombre: string) {
//     return `Hola ${nombre}`
// }

// console.log(`Este es un texto: ${getSaludo(nombre)}`);
 

//!6: Objetos literales

// const persona = {
// nombre: "Tony",
// apellido: "Stark",
// edad: 45,

// dirección: {
// ciudad: "New York",
// zip: 43332,
// lat: 14.3232,
// lng: 43.55554,


// }

// }


// console.log({persona:persona});
//Desde EMASCRIPT 6 
// console.table(persona);


// const persona2 = persona
// persona2.nombre =  "Peter"
// console.log(persona);

// console.log(persona2);



/////////////////////////////
// const persona2 = {...persona}

//17 arreglos



// const arreglo = new Array(100)

// arreglo.push(1)
// console.log(arreglo);

// const arreglo= [ 1,2,3,4];

// let arreglo2 = [...arreglo, 5]

// const arreglo3 = arreglo2.map(function (number) {
//     return number * 2
// })


// console.log(arreglo);
// console.log(arreglo2);
// console.log(arreglo3);

//18. funciones en JS

// const saludar = function (nombre: string) {
//     return `Hola, ${nombre}`
// }
// console.log(saludar("Kevin"));


//arrow function

// const saludar2 = (nombre: string) => {
//     return `Hola, ${nombre}`
// }
// const saludar3 = (nombre: string) => `Hola, ${nombre}`
// const saludar4 = () => `Hola mundo`
// // console.log(saludar);
// console.log(saludar2("Kevin"));

// const getUser = () => ({
//     uid: "ABC123",
//     username: "El_Papi1234"
// });

// // Llamar a la función para obtener el objeto
// const user = getUser();

// // Mostrar el objeto en la consola como tabla
// console.log(user);


// const getUsuarioActivo = (nombre: string) =>({
//     uid: "ABCD",
//     username: nombre
// }) 


// const usuarioActivo = getUsuarioActivo("Kevin")
// console.log(usuarioActivo);


// 19.desestructiracion, asignacion desestructurante
interface Persona {
    nombre: string; // Tipo string, no un valor fijo como "Tony"
    apellido: string;
    edad: number;
    clave: string;
    rango?: string; // Opcional y de tipo string
}


const persona: Persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    clave: "Ironman",
      rango: "Civil"

    }
    
    // console.log(persona.nombre);
    // console.log(persona.apellido);
    // console.log(persona.edad);
    // const {nombre, edad, clave} = persona

    // console.log(nombre);
    // console.log(edad);
    // console.log(clave);
//     const retornaPersona = (usuario: Persona) => {
//  const {nombre, edad, clave} = usuario
// console.log(nombre, edad, clave);
//     }
//     console.log(persona);
    

// Desestructuración en el argumento
// const retornaPersona = ({ nombre, edad = 45, clave, rango= "Capitán"}: Persona): void => {
//     console.log(nombre, edad, rango); // Imprime "Tony"
//     // console.log(edad);   // Imprime 45
//     // console.log(clave);  // Imprime "Ironman"
// };


// retornaPersona(persona)

//Ejercicio

// const useContext = ({ nombre, edad = 45, clave, rango = "Capitán" }: Persona) => {
//     return {
//         nombreClave: clave,
//         anios: edad,
//         latlng: {
//             lat: 14.333,
//             lng: 34.666        }
//     };
// };

// const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);
// // const {lat, lng} = latlng
// console.log(nombreClave, anios);
// console.log(lat, lng);


// 19.desestructiracion, asignacion desestructurante de arreglos

// const personajes = ["Goku", "Vegeta", "Trunks"]
// // console.log(personajes[0]);
// // console.log(personajes[1]);
// // console.log(personajes[2]);

// const [ ,  p2] = personajes
// // console.log(p2);


// const retornaArreglo = () => {

// return ["ABC", 123]

// }

// const [letra, numero] = retornaArreglo()

// console.log(letra, numero);


const useState = (valor: string): [string, ()=> void] => {
return [valor, ()=> {console.log("Hola mundo");
} ]

}

const [nombre, setNombre] = useState("Kevin")

console.log(nombre );

setNombre()
