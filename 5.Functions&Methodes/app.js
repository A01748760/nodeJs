function greet(){
    return "Hi";
}

let calculations ={
    duplicate: function(value){
        return value*2;
    },
    divide: function(value){
        return value/2;
    }
}
console.log(greet());
console.log(calculations.duplicate(5), calculations.divide(10));