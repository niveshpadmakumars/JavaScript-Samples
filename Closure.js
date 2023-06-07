function Addition(x){
    return function nextAddition(y){
        return x*y;
    };
}

console.log(Addition(4)(5));