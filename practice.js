// let fruits=["grapes","apple","orange"];
// let indexOfOrange =fruits("orange");
// console.log(index);

// const multiply=function(a,b){
//     return a*b;
// }
// const product=multiply(4,6);
// console.log('Function expression - Product:',product);

// const subtract=(a,b)=>a-b;
// const difference=subtract(8,3);
// console.log('Arrow Function - Difference',difference);

// try{
//     throw new Error("An error");
// }catch(error){
//     console.error(error.message);
// }finally{
//     console.log("Cleanup code");
// }

// const delayedFunction=()=>{
//     console.log("Delayed function executed");
// };
// setTimeout(delayedFunction,5000); //5000 is in milliseconds that is 5 seconds

// const repeatedFunction=()=>{
//     console.log("Repeated function executed");
// };
// const intervalID=setInterval(repeatedFunction,2000);

function repeatedFunction(){
    console.log("executing repeated function");
}
const intervalID=setInterval(repeatedFunction,2000);
setTimeout(()=>{
clearInterval(intervalID);
console.log("Interval stopped");},5000
);


