import products from "./products.js";
import cart from "./cart.js";
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// This is the updated code for index.js and productdetail.js
// Don't forget to keep the other code in those files

const loadTemplate = () => {
    fetch('/template.html')
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;
            let contentTab = document.getElementById('containerTab');
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart(); // We call the cart function here to initialize it
            initApp();
        });
};

loadTemplate();
const initApp = () =>{
    let idProduct = new URLSearchParams(window.location.search).get('id');
    let info = products.filter((value) => value.id == idProduct)[0];
    if(!info){
        window.location.href= './';
    }
    let detail = document.querySelector('.detail');

    if (detail) {
        if (detail.querySelector('.image img')) {
            detail.querySelector('.image img').src = info.image;
        }
        if (detail.querySelector('.name')) {
            detail.querySelector('.name').innerText = info.name;
        }
        if (detail.querySelector('.price')) {
            detail.querySelector('.price').innerText = '$'+ info.price;
        }
        if (detail.querySelector('.description')) {
            detail.querySelector('.description').innerText = info.description;
        }
        if (detail.querySelector('.addCart')) {
            detail.querySelector('.addCart').dataset.id = idProduct;
        }
    }


    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML= null;
    products.filter((value) => value.id != idProduct).forEach(product => {
       let newProduct = document.createElement('div');
       newProduct.classList.add('item');
       newProduct.innerHTML =
       `
       <a href="/productdetail.html?id=${product.id}">
       <img src="${product.image}"/>
       </a>
       <h2>${product.name}</h2>
       <div class="price">$${product.price}</div>
       <button class="addCart"
       data-id="${product.id}">
       Add To Cart
       </button>
       `;
    listProduct.appendChild(newProduct);
    
    })
}
function display(products) {
    if (products.length > 0) {
        const content = products.map((product) => {
            // The `onclick` now redirects to the product detail page using the product's ID
            return `<li onclick="window.location.href = '/productdetail.html?id=${product.id}'">${product.name}</li>`;
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    } else {
        resultsBox.innerHTML = '';
    }
}