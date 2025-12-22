let mysym = Symbol("Key")
let obj = {
    "name": "kirten",
    [mysym]: "boby",
    "numbers": 54
}
obj.greeting = function () {
    console.log("Hello World")
}
obj.greeting()
console.log(obj)