let products = [
    "  Laptop: 55000 ",
    "Phone:30000",
    "  Tablet : 15000",
    "Laptop:55000",
    "Mouse: hhg",
    " InvalidProduct ",
    "Keyboard:2000"
];

let arr = []
let check_arr = []

products.forEach((product) => {
    let a = product.toLowerCase()

    if (a.includes(":")) {
        let temp_arr = a.split(":")

        let name = temp_arr[0].trim()
        let price = Number(temp_arr[1].trim())

        if(!name||isNaN(price))return;

        let obj = { "name": name, "price": price }

        if (!check_arr.includes((temp_arr[0].trim() + temp_arr[1].trim()))) {
            arr.push(obj)
            check_arr.push((temp_arr[0].trim() + temp_arr[1].trim()))
        }
    }
})

console.log(arr)