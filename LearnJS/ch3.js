let users = [
    "  Kirten ",
    "bob",
    "KIRTEN",
    "Ram_saini",
    "bo",
    "Bob  ",
    "Ram_sainI"
];

let arr = []

users.forEach((Element) => {
    let a = Element.trim().toLowerCase()
    if (a.length > 4 && !arr.includes(a)) {
        arr.push(a)
    }
})

console.log(arr);