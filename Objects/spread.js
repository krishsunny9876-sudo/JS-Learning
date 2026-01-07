let obj1 = { "user1": "kirten", "user2": "boby" }
let obj2 = { "user3": "dipanshu", "user4": "sunny" }

//Without spread system

let obj3={obj1,obj2}
console.log(obj3)

//With Spread system 

let obj4={...obj1,...obj2}
console.log(obj4)