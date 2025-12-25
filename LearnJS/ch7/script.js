//CSS to body
{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

//Data
const products = [
    {
        name: "Laptop",
        price: 55000,
        brand: "HP",
        inStock: true
    },
    {
        name: "Phone",
        price: 30000,
        brand: "Samsung",
        inStock: false
    },
    {
        name: "Mouse",
        price: 500,
        brand: "Logitech",
        inStock: true
    },
    {
        name: "Keyboard",
        price: 800,
        brand: "Acer",
        inStock: true
    },
    {
        name: "RTX 4050 GPU",
        price: 28000,
        brand: "Gigabyte",
        inStock: true
    },
    {
        name: "Monitor",
        price: 10000,
        brand: "Zebronics",
        inStock: false
    }
];

//Logic
{
    let div_head = document.createElement('div')

    //Default Body Content
    {
        let main_heading = document.createElement("h1")
        main_heading.textContent = "Product Store"
        main_heading.style.marginLeft = '100px'
        main_heading.style.marginBottom = '50px'
        div_head.appendChild(main_heading)
    }

    let product_count = 0;
    let available_product = 0;

    products.forEach((product) => {

        product_count++;
        if (product.inStock) available_product++;

        let divs = document.createElement('div')
        let head1 = document.createElement('h2')
        let head2 = document.createElement('h2')
        let head3 = document.createElement('h2')
        let head4 = document.createElement('h2')

        head1.textContent = `Product name : ${product.name.trim().toUpperCase()}`
        head2.textContent = `Brand : ${product.brand}`
        head3.textContent = `Price : ₹${product.price}`
        head4.textContent = `Status : ${product.inStock == true ? "Available" : "Out of Stock"}`

        //CSS to divs
        {
            divs.style.backgroundColor = product.inStock == true ? 'green' : 'red'
            divs.style.width = '500px'
            divs.style.height = '210px'
            divs.style.borderWidth = "2px";
            divs.style.borderStyle = "solid";
            divs.style.borderColor = "white";
            divs.style.borderRadius = '10px'
            divs.style.marginLeft = '100px'
            divs.style.marginBottom = '20px'
        }

        divs.appendChild(head1)
        divs.appendChild(head2)
        divs.appendChild(head3)
        divs.appendChild(head4)

        div_head.appendChild(divs)
    })

    //Final Calculations
    {
        let final_info1 = document.createElement('h3')
        let final_info2 = document.createElement('h3')

        final_info1.textContent = `Total Products : ${product_count}`;
        final_info2.textContent = `Available Products : ${available_product}`;

        div_head.appendChild(final_info1)
        div_head.appendChild(final_info2)
    }

    document.body.appendChild(div_head)
}