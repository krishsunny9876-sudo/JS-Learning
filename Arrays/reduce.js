let ids = [10, 20, 15, 5, 16]
let multi = (a,b)=>{
   return a+b;
}
let a = ids.reduce(multi)
console.log(a);