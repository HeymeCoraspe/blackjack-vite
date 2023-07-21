import _ from "underscore"

/** comentarios para que cuando se llame a crearMazo se sepa que datos tiene que traer
 * Crear nuevo mazo
 * @param {Array <String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"],
 * @param {Array <String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"];
 * @returns {Array <String>} //nuevo mazo
 */

//creando el nuevo mazo
 export const crearMazo= (tiposDeCarta, tiposEspeciales)=>{

    if(!tiposDeCarta || tiposDeCarta.length===0) throw Error("tiposDeCartas es obligatorio como array string");
    if(!tiposEspeciales || tiposEspeciales.length===0) throw Error("tiposEspeciales es obligatorio como array string");

    let mazo=[];
    
    for(let i=2; i<=10; i++){
        for (let tipo of tiposDeCarta){
            mazo.push(i+tipo);
        }        
    }
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            mazo.push(esp+tipo);  
        }
    }
    return _.shuffle(mazo); //librería underscore: _.shuffle devuelve el arreglo desordenado
  }
  