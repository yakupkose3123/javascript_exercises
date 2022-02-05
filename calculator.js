/*let num1 = +prompt("Enter number1:");
let proces= prompt("Enter proces:");
let num2 = +prompt("Enter number1:");

switch(proces){
    case "+" :
         console.log(num1+num2);
    case "-" :
         console.log(num1-num2);
    case "*" :
         console.log(num1*num2);
    case "/" :
         console.log(num1/num2);
}*/


let calculater = prompt("");
var n;
var islem = ""
for(var i=0;i<calculater.length;i++){
    if(calculater.charAt(i) === "/" || calculater.charAt(i) === "*" || calculater.charAt(i) === "+" || calculater.charAt(i) === "-"  ){
        n=i;
        islem = calculater.charAt(i); 
    }
}

let num1 = +(calculater.slice(0,n));
let num2 = +(calculater.slice(n+1,));

switch(islem){
   case "+":
       var sonuc = num1+num2;
       console.log(`${num1}+${num2}:`+ sonuc);
       break
   case "-":
       sonuc = num1-num2;
       console.log(`${num1}-${num2}:`+ sonuc);
       break
   case "*":
       sonuc = num1*num2;
       console.log(`${num1}*${num2}:`+ sonuc);
       break
   case "/":
       sonuc = num1/num2;
       console.log(`${num1}/${num2}:`+ sonuc);
       break    
}
 