let x= 12345;
let y=0;
while(x!==0){
    const digit = x%10;
    y=y*10+digit;
    x=Math.floor(x/10);
}

console.log(y);

//age code 
function age(x){
    if(x>=13 && x<=19)
    {
        return ("teen");
    }else if (x>19)
    {
        return ("Adult");
    }else
    {
        return ("kid");
    }
}
let z= age(15)
console.log(z);
//Fibonacci Series

function fibonacci(term){
    let term1 = 0, term2 = 1;
          console.log("Fibonacci Series of "+ term+" is");
           for (var i = 0; i < term; i++) {
               console.log(term1 + " ");
    
               let term3 = term2 + term1;
               term1 = term2;
               term2 = term3;
           }
   }
   fibonacci(10)
//FizzBuzz Program
   function fizzbuzz(number)
{
    for(var i=0;i<=number;i++)
    {
    
    if(i%3==0 && i%5==0)
    {
        console.log("Fizz Buzz");
    }else if(i%3==0){
        console.log("fizz");
    }else if (i %5 ==0)
    {
        console.log("Buzz");
    }else
    {
        console.log(i);
    }
    
    }
    
}
fizzbuzz(100)

//Printing Pattern

var rows = 5;
for(let i = 0; i < rows; i++) {
    let row = "";
    for(let j = 0; j < rows; j++) {
        if(i + j < rows - 1)
            row += "+ ";
        else
            row += "- ";
    }
    console.log(row);
}