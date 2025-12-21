function isadult(value) {
    return value >= 18;
}

let arr = [30, 50, 18, 20, 25]//all are adult, so it will return true

let check = arr.some(isadult)//if there's all desirable thing in array, it return true

console.log(check)