//pidiento una carta de la baraja

/**
 * 
 * @param {Array <String>} mazo arreglo string
 * @returns {String} retorna la carta que saca del mazo
 */

export const pedirCarta=(mazo)=>{

    if(!mazo || mazo.length===0){
       throw new Error ("No hay más cartas en el mazo");
    }
    return mazo.pop(); 
  }