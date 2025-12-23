let obj1 ={"name":"kirten","roll no.":46}
let obj2={"id":23,"address":"xxyy"}

let a = Object.assign({},obj1,obj2)
let b = {...obj1,...obj2}

console.log(a)
console.log(b)