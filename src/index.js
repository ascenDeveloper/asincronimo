function sum(a, b) {
    return a+b;
}

function cal(a, b, callback){
    return callback(a,b);
}

console.log(cal(2,2,sum))