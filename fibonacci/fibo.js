
function fib(son){
    let arrFibonacci = [0,1];
    var sum = 0;
    for(var i=0; sum < son;i++){
        sum = arrFibonacci[i]+arrFibonacci[i+1];
        arrFibonacci.push(sum);
    }
    arrFibonacci.pop()
    return console.log(arrFibonacci);
}

fib(1000)


