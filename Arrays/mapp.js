let ids = [
    "  kirten123@gmail.com",
    "saINikrish@gmail.com   ",
    "burger12_gmail.com",
    "boBSun12@gmail.com"
]
let a = ids.map((element) => {
    return element.toLowerCase().trim()
})
console.log(a);