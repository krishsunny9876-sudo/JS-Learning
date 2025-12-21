let users = [
    "  Kirten ",
    "bob",
    "KIRTEN",
    "Anu_shka",
    "bo",
    "Bob  ",
    "anu_shka"
];

let arr = []

users.forEach((Element) => {
    let a = Element.trim().toLowerCase()
    if (a.length > 4 && !arr.includes(a)) {
        arr.push(a)
    }
})

console.log(arr);