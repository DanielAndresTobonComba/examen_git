import {calcular} from "./calcular.js"
import { añadirOptions } from "./añadir-options.js"


async function iniciarPrograma(){
    const url = `https://cdn.dinero.today/api/boa.json`
    const respuesta = await fetch(url)
    const valorOrigen = document.getElementById("cant-orig").value
    const valorDestino = document.getElementById("cant-dest").value
    const divOrig = document.getElementById("div-orig");
    const divDest = document.getElementById("div-dest")

    // if (Number.isNaN(valorOrigen) || valorOrigen == "" || valorOrigen == 0){
    //     valorDesitno.value = `0`
    // }

    if(!respuesta.ok)
        throw new Error("Error de carga de la pagina")
    if(divDest.value!=="none"||divOrig!=="none"){
        calcular(valorOrigen.textcontent,divDest.value,divOrig.value)
    }
    divDest.addEventListener("change",()=>{

        console.log("està cmabiando")
        if(valorOrigen >0){
            calcular(valorOrigen,divDest.value,divOrig.value)
        }

    })
    divOrig.addEventListener("change",()=>{
        console.log("està cmabiando")
        if(valorOrigen >0){
            calcular(valorOrigen,divDest.value,divOrig.value)
        }
    })
}

// fetch("data/data.csv")
//   .then(response => response.text())
//   .then(csvData => {
//    console.log(csvData)
//   })
//   .catch(error => console.error('Error al obtener el archivo CSV:', error));

// let lst = [12 , "asdsd"]

añadirOptions()
iniciarPrograma()

