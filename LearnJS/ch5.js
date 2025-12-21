let products = [
    "kirten | laptop | 55000",
    "AMan|Phone|30000",
    "kirten|Mouse|500",
    "Bob | Laptop | 55000",
    "Kirten | Laptop | 55000",
    "Invalid Data",
    "aman | Mouse | abc",
    "aman | Keyboard | 2000",
    "boB   | MoUse    |   800"
];

let arr = []
let check_arr = []

let total_arr = []

products.forEach((product) => {
    let a = product.toLowerCase()

    if (a.includes("|")) {
        let temp_arr = a.split("|")

        let user = temp_arr[0].trim()
        let product = temp_arr[1].trim()
        let price = Number(temp_arr[2].trim())

        if (!user || !product || isNaN(price)) return;

        let obj = { "name": user, "product": product, "price": price }

        if (!check_arr.includes((user + product + price))) {
            arr.push(obj)
            check_arr.push((user + product + price))
        }
    }
})

let users = []
let final = []

arr.forEach((data) => {
    if (!users.includes(data.name)) {
        let a = { "name": data.name, "amount": data.price }
        users.push(data.name)
        final.push(a)
    }
    else if (users.includes(data.name)) {
        let index = final.findIndex(obj => obj.name == data.name)
        final[index].amount += data.price
    }
})

console.log("Overall purchsing")
console.log(arr)

console.log("User's Bill")
console.log(final)