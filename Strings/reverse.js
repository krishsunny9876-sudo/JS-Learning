//WE can't directly use reverse function on string cuz it's built for arrays

let str = 'Kirten'

let str2 = str.split('')//Convert string to array to perform reverse function

let str3 = str2.reverse()//Now reverse the array

let str4 = str3.join('')//Now Rejoin the array to make string

console.log(str4)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//do it in one step

let reverse_string = str.split('').reverse().join('');

console.log(reverse_string)