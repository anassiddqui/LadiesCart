import cart from "./cart.js";
import products from "./products.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('containerTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}

loadTemplate();

const initApp = () => {
    // This line reads the 'category' from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const desiredCategory = urlParams.get('category');

    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;

    let productsToDisplay = products;

    // We only filter the products if a category is specified in the URL
    if (desiredCategory) {
        productsToDisplay = products.filter(product => product.category === desiredCategory);
    }
    
    productsToDisplay.forEach(product => {
       let newProduct = document.createElement('div');
       newProduct.classList.add('item');
       newProduct.innerHTML =
       `
       <a href="/productdetail.html?id=${product.id}">
       <img src="${product.image}"/>
       </a>
       <h2>${product.name}</h2>
       <div class="price">$${product.price}</div>
       <button class="addCart" data-id="${product.id}">
       Add To Cart
       </button>
       `;
    listProduct.appendChild(newProduct);
    })
}