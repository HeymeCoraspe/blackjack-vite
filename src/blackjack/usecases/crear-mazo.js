import _ from "underscore"

//creando el nuevo mazo
 export const crearMazo= (tiposDeCarta, tiposEspeciales)=>{
    mazo=[];
    
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
  