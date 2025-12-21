let a = [{ name: "kirten", price: 555 }, { name: "anushka", price: 455 }]

let func = obj => { return obj.name == "kirten" }

let b = a.findIndex(func)

a[b].price+=1000

console.log(a)
