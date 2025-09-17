import products from "./products.js";

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-searchbox");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value.toLowerCase();
    
    if(input.length){
        // Now it filters products from your products.js file
        result = products.filter((product) => {
            return product.name.toLowerCase().includes(input);
        });
    }
    
    display(result);
    if (!result.length && input.length) {
        resultsBox.innerHTML = '<li>No products found</li>';
    } else if (!input.length) {
        resultsBox.innerHTML = '';
    }
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