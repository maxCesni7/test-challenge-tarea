// 2. Write a function that takes in a DNA string (for example 'CTAGGGTA')
//  and returns a new string with any non-canonical DNA base values removed. 
//  Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. 
//  Make the function case sensitive - meaning 'c' (lower case) should be removed 
//  from the string, but 'C' (upper case) is a good value and should remain. 
//  If the DNA string is empty, just return an empty string.

    // A = T
    // G = C

function dna(cadena){
    let cadenaArreglo = cadena.split("");
    for (let i = 0; i < cadenaArreglo.length; i++) {
        if(cadenaArreglo[i].toLowerCase()==true){
            cadenaArreglo.splice(i, 1)
        }
    }

    let solucion = "";

    for (let i = 0; i < cadenaArreglo.length; i++) {
        if(cadenaArreglo[i]=="A"){
            solucion +="T";
        }
        else if(cadenaArreglo[i]=="T"){
            solucion +="A";
        }
        else if(cadenaArreglo[i]=="G"){
            solucion +="C";
        }
        else if(cadenaArreglo[i]=="C"){
            solucion +="G";
        }
        
    }
    return solucion;

}

module.exports = dna;