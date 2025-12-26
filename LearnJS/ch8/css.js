//CSS to Body
{
    document.body.style.color = 'white'
    document.body.style.backgroundColor = 'grey'
}
{
    let main_heading = document.querySelector('#main_head')

    main_heading.style.backgroundColor = 'black'
    main_heading.style.padding = '10px 20px'
    main_heading.style.display = 'flex'
    main_heading.style.justifyContent = 'center'
    main_heading.style.alignItems = 'center'
    main_heading.style.borderRadius = '10px'
    main_heading.style.border = 'solid white 5px'
}
//CSS Content
{
    let content = document.querySelector('#content')
    content.style.backgroundColor = 'darkgreen'
    content.style.borderRadius = '10px'
    content.style.padding = '10px 10px'
    content.style.display = "flex";
    content.style.flexDirection = "column";   // 👈 KEY LINE
    content.style.justifyContent = "center";
    content.style.alignItems = "center";

    {
        let inputs = document.querySelector('#inpt1')
        let button = document.querySelector('#btn')
        let button2 = document.querySelector('#newbtn')

        inputs.style.width = '200px'
        inputs.style.height = '25px'
        inputs.style.border = 'solid 2px black'

        button.style.border = 'solid 1px black'
        button.style.padding = '5px 10px'
        button.style.color = 'white'
        button.style.backgroundColor = 'black'
        button.style.borderRadius = '5px'
        button.style.marginLeft = '75px'
        button.style.fontSize = '15px'

        button2.style.border = 'solid 1px black'
        button2.style.padding = '5px 10px'
        button2.style.color = 'white'
        button2.style.backgroundColor = 'black'
        button2.style.borderRadius = '5px'
        button2.style.marginLeft = '20px'
        button2.style.fontSize = '15px'
    }
}