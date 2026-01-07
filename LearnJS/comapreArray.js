function compareArrays(arr1, arr2) {

    let checkarr_1 = arr1.map(ele => {
        if (isNaN(ele)) {
            return ele.trim().toUpperCase()
        }
        else {
            return ele
        }
    })
    let checkarr_2 = arr2.map(ele => {
        if (isNaN(ele)) {
            return ele.trim().toUpperCase()
        }
        else {
            return ele
        }
    })

    checkarr_1 = checkarr_1.sort()
    checkarr_2 = checkarr_2.sort()

    let str1 = checkarr_1.join('')
    let str2 = checkarr_2.join('')

    let isequal = str1 == str2 ? true : false

    return isequal;
}

let arr1 = ['e', 'a', '2', 'd']
let arr2 = ['a', '1', 'D', 'E']

let arr3 = ['1', '3', '2', '4']
let arr4 = ['4', '2', '1', '3']

console.log(compareArrays(arr1, arr2))
console.log(compareArrays(arr3, arr4))