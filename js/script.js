let products = [
    {
        id: 1,
        name: "iPhone 13",
        image: "img/test.avif",
        description: "Потужний смартфон з чудовою камерою.",
        type: "phone",
        price: 28000
    },
    {
        id: 2,
        name: "MacBook Air",
        image: "img/test.avif",
        description: "Легкий та швидкий ноутбук для роботи.",
        type: "laptop",
        price: 45000
    }
];

let cart = [];

let productsContainer = document.querySelector('.products-div');
let btnGroup = document.querySelector('.btn-group');

function renderProducts(items) {
    productsContainer.innerHTML = ""
    if (items.length == 0) {
        productsContainer.innerHTML = '<p>Товарів не знайдено</p>'
        return;
    }

    items.forEach(function(item) {
        let productHTML = `
            <article class="product">
                <img src="${item.image}" alt="" class="product-img">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-description">${item.description}</p>
                <p class="product-price"><strong>${item.price} грн</strong></p>
                <button type="button" class="btn btn-primary">До кошику</button>
            </article>
        `
        productsContainer.innerHTML += productHTML
    })
}

renderProducts(products)
