let ids = [
    "  kirten123@gmail.com",
    "saINikrish@gmail.com   ",
    "burger12_gmail.com",
    "boBSun12@gmail.com"
]

ids.forEach((element) => {
    let a = element.toLowerCase().trim()

    if (a.includes("@")) {
        console.log(`ID : ${a}`)
    }
    else {
        console.log(`Invalid ID : ${a}`)
    }
})
