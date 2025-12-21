let date_instance = new Date();

let day = date_instance.toLocaleString(`default`,{
    weekday: "long"
})
console.log(day)

// let mydate = new Date(2025,3,16)
// let mydate1 = new Date("2025-04-16")
// let mydate2 = new Date("04-16-2025")

// console.log(mydate1.toDateString())
// console.log(mydate2.toDateString())
// console.log(date_instance.toDateString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleDateString())


// let a = mydate.toDateString()
// let b = a.split(" ")
// console.log(b[1])