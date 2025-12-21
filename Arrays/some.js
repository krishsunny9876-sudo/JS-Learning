function isadult(value) {
    return value >= 18;
}

let arr = [10, 50, 15, 20, 5]

let check = arr.some(isadult)//if there's at least one desirable thing in array, it return true

console.log(check)