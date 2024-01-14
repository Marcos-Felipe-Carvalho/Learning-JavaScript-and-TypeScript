const verificarNumero = (num) =>{
    if(typeof num === "string" || (num % 3 !== 0 && num % 5 !== 0)){
        return num
    }

    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    }else if(num % 3 === 0){
        return "Fizz"
    }else if(num % 5 === 0){
        return "Buzz"
    }
};

for(let i = 1; i<=100;i++){
    console.log(verificarNumero(i));
}