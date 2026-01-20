let numofbtn = 0;

function createButton() {
    numofbtn++;
    let new_button = document.createElement('button')
    let new_line = document.createElement('br')
    new_button.innerHTML = `Button${numofbtn}`
    new_button.setAttribute('class', 'btn')
    new_button.classList.add('button')
    document.querySelector('#newbtn').appendChild(new_button)
    document.querySelector('#newbtn').appendChild(new_line)

    addevent(new_button)
}

function addevent(buton) {
    buton.addEventListener('mouseover', event => {
        event.preventDefault()
        event.target.classList.toggle('hover')
    })
    buton.addEventListener('mouseout', event => {
        event.preventDefault()
        event.target.classList.toggle('hover')
    })
    buton.addEventListener('click', event => {
        event.preventDefault()
        if (event.target.classList.contains('button')) {
            createButton()
            event.target.classList.replace('button', 'clicked')
        }
        else {
            event.target.classList.replace('clicked', 'button')
        }
    })
}

createButton()