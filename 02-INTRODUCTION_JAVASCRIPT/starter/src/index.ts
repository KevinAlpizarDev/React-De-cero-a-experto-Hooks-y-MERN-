import {heroes, Heroes, owners} from "./data/heroes.js";

// console.log(heroes);
// const geHeroById = (id: number) => {
//     return heroes.find((heroe)=> {
//       if (heroe.id === id) {
//         return true
//       }else{
//         return false
//       }
//     })
// }
const geHeroById = (id: number) => heroes.find((heroe)=>   heroe.id === id   );

// const getHeroesByOwner = (owner: string): Heroes[] => {
//     return heroes.filter((hero) => hero.owner === owner);
//   };

//   console.log(owners);
  
//   console.log(getHeroesByOwner("DC"));
  
// console.log(geHeroById(3));
// console.log(geHeroById(3)?.name);


// //23.Promesas
// const promesa = new Promise((resolve, reject)=> {

// setTimeout(() => {
// ;
// //TAREA
//  const heroe = geHeroById(3)
// // console.log(heroe);
// resolve(heroe)
// // reject(heroe)
// // reject("No se pudo")
// }, 200);
// })

// // promesa.then((heroe) => console.log("Then de la promesa:", heroe));
// promesa.then((heroe) => console.log(heroe)).catch(error => console.log(error));

//TAREA
//QUE PASARIA SI NECESITO: crear una promesa y a esa promesa mandarle el argumento del heroe que yo necesito buscar



// const getHeroesByIdAsync = (id: number) => {


//   return new Promise((resolve, reject)=> {
//         setTimeout(() => {
        
    
//          const heroe = geHeroById(id)
       
//         resolve(heroe)
     
//         }, 200);
//         })
   
// }

// getHeroesByIdAsync(3).then((heroe)=> console.log("Heroe", heroe))


///TAREAAA
//MANEJO DE EXCEPCION



// const getHeroesByIdAsync = (id: number) => {

//     return new Promise((resolve, reject)=> {
//           setTimeout(() => {
//            const heroe = geHeroById(id)
//     heroe === undefined ? reject("Not Found") : resolve(heroe)
//           }, 200);
//           })
     
//   }

//   getHeroesByIdAsync(1)
// //.then((heroe)=> console.log("Heroe", heroe))
// //   .catch(err => console.warn(err)) // O mucho mejor 
// .then(console.log)
// .catch( console.warn) 


