function fizzbuzz(num) {

    switch (true) {
        case (num%3===0 && num%5===0):
            return "FizzBuzz"
        case (num%3===0):
            return "Fizz"
        case (num%5===0):
            return "Buzz"    
        default:
            return num;
    }
}

module.exports = fizzbuzz;

// 1. Write a function that takes in a number and returns one of the following:
//         - If the number is divisible by 3, return 'Fizz'.
//         - If the number is divisible by 5, return 'Buzz'.
//         - If the number is divisible by 3 and 5, return 'FizzBuzz'
//         - Else, return the number passed as an argument