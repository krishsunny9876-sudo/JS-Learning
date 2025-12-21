let products = [
    "  Laptop: 55000 ",
    "Phone:30000",
    "  Tablet : 15000",
    "Laptop:55000",
    "Mouse: 500",
    " InvalidProduct ",
    "Keyboard:2000"
];

let arr = []
let check_arr = []

products.forEach((product) => {
    let a = product.toLowerCase()

    if (a.includes(":")) {
        let temp_arr = a.split(":")

        let obj = { "Name": temp_arr[0].trim(), "price": Number(temp_arr[1].trim()) }

        if (!check_arr.includes((temp_arr[0].trim() + temp_arr[1].trim()))) {
            arr.push(obj)
            check_arr.push((temp_arr[0].trim() + temp_arr[1].trim()))
        }
    }
})

console.log(arr)