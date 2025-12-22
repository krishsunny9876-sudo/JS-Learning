let obj1 = { "user1": "kirten", "user2": "boby" }
let obj2 = { "user3": "dipanshu", "user4": "sunny" }
let obj3 = { "user5": "raju", "usre6": "vijay" }

Object.assign(obj1, obj2, obj3)//it will add all values of obj2 and obj 3 in obj1

let obj4 = Object.assign({},obj1,obj2,obj3)//it will add all value of obj1,obj2 and obj3
// in {}(empty object) and then it wil assign to obj4

console.log(obj1);
console.log(obj4);