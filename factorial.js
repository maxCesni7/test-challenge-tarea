//Calcula el factorial de un numero 
function factorialNumero (num){
    return (num === 0)?1:num*factorialNumero(num-1);
}

module.exports = factorialNumero;