let username;
username = "   kIrteN_124  "//assuming that it is given by any user
let a = username.trim()
if ((a.length) < 7) {
    console.log("Username is Invalid due to shorter length!!")
}
else {
    console.log(`Username : ${a.toLowerCase()}`)
}