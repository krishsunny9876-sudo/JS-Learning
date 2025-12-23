let obj = {"name":"kirten","roll no.":46}

let mapp=new Map();
mapp.set("name","kirten")
mapp.set("roll no.",46)

////////////////////////
console.log("Object :")
for (const key in obj) {
    console.log(key);
}
console.log()

////////////////////////
console.log("Map :")
for (const [key] of mapp) {
    console.log(key);
}
console.log()

/////////////////////////
console.log("Map without '[]' :")
for (const key of mapp) {
    console.log(key);
}