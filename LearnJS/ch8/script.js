//Access all values
let input = document.querySelector('#inpt1')
let button = document.querySelector('#btn')
let new_button = document.querySelector('#newbtn')
let pre_num = document.querySelector('#prenum')
let guess_rem = document.querySelector('#guessrem')
let result = document.querySelector('#result')
//Default CSS of result
{
result.style.fontSize = '15px'
result.style.color = 'white'
}

//Create some variable
let pre_arr = []
let attempt = 0;
let random = Math.floor(Math.random() * 100 + 1)

//Event Start
button.addEventListener('click', function (e) {
    e.preventDefault()
    let guess = parseInt(input.value)
    input.value = ''
    valid_input(guess)
})

function valid_input(guess) {
    if (guess === '' || isNaN(guess) || guess < 1 || guess > 100) {
        result.innerHTML = '<span style="Color:yellow;"><strong> Not a Valid Number!</strong></span>'
    }
    else {
        attempt++
        pre_arr.push(guess)
        check_input(guess)
        pre_num.innerHTML += `${guess} `
        guess_rem.innerHTML = `${10 - attempt}`
    }
}

function check_input(guess) {
    if (guess === random) {
        result.innerHTML = `You Won! the Number was : ${random}`
        result.style.color = 'skyblue'
        result.style.fontSize = '20px'
        end_game()
    }
    else {
        if (attempt === 10) {
            result.innerHTML = `You Lose Again! the Number was : ${random}`
            end_game()
        }
        else {
            if (guess > random) {
                result.innerHTML = `Too High!`
            }
            else if (guess < random) {
                result.innerHTML = `Too Low!`
            }

        }
    }
}

function end_game() {
    button.setAttribute('disabled', '')
    input.setAttribute('disabled', '')
}

//Start New Game
{
    new_button.addEventListener('click', function (e) {
        e.preventDefault()
        
        play = true;
        attempt = 0
        pre_num.innerHTML = ''
        guess_rem.innerHTML = 10
        result.innerHTML = ''

        //default css of result
        result.style.fontSize = '15px'
        result.style.color = 'white'

        if (input.hasAttribute('disabled')) {
            input.removeAttribute('disabled')
        }
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled')
        }
    })
}