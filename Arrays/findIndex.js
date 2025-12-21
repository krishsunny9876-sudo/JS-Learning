let a = [
    { user: "kirten", id: 56 },
    { user: "himanshu", id: 34 }
]
let b = a.findIndex(obj => obj.user == "kirten")//used to find index of an array that conatins objects
console.log(b)