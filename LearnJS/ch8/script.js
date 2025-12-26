//Access all values
let input = document.querySelector('#inpt1')
let button = document.querySelector('#btn')
let pre_num = document.querySelector('#prenum')
let guess_rem = document.querySelector('#guessrem')
//Create some variable
let pre_arr = []
let attempt = 0;
let play = true;

if (play === true) {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = input.value
        valid_input(guess)
    })
}

function valid_input(guess) {
   if(guess===''||isNaN(guess)){
    
   }
}