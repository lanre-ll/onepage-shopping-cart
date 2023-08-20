const products = [{
	id: 1,
	image: 'images/zara-1.jpg',
	title: 'TVXO WONDER',
	price: 25
}, {
	id: 2,
	image: 'images/zara-2.jpg',
	title: 'TVXO MAGIC',
	price: 30
}, {
	id: 3,
	image: 'images/zara-3.jpg',
	title: 'TVXO FABULOSO',
	price: 37
},{
	id: 4,
	image: 'images/zara-4.jpg',
	title: 'TVXO SUPERB',
	price: 42
},{
	id: 5,
	image: 'images/zara-5.jpg',
	title: 'TVXO INCREDIBLE',
	price: 10
},{
	id: 6,
	image: 'images/zara-6.jpg',
	title: 'TVXO AMAZING',
	price: 45
},{
	id: 7,
	image: 'images/zara-7.jpg',
	title: 'TVXO FIRE',
	price: 37
},{
	id: 8,
	image: 'images/zara-8.jpg',
	title: 'TVXO MIGHTY',
	price: 73
}];

let productsHTML = '';

products.forEach((product) => {
	productsHTML+= `
		<div class="product-box">
			<img class="product-img" src="${product.image}">
			<h2 class="product-title"><h2>${product.title}</h2>
			<span class="price">$${product.price}</span>
			<img class="add-cart" src="images/checkout-lock-icon.png">
		</div>
	`;
});

document.querySelector('.js-shop-content').innerHTML = productsHTML;














