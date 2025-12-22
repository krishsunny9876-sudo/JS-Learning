let obj = {
    "username":"kirten"
}

obj["username"]="boby"
console.log(obj["username"])
Object.freeze(obj)
obj["username"]="akshay"
console.log(obj["username"])