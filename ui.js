var products =	[

		{
			price: 1,
			imgUrl: "http://cache.net-a-porter.com/images/products/23453/23453_cu_pp.jpg",
			brand: "Derek Lam",
			url: "https://www.net-a-porter.com/gb/en/product/23453/"
		},

		{
			price: 2,
			imgUrl: "http://cache.net-a-porter.com/images/products/732955/732955_cu_pp.jpg",
			brand: "Derek Lam",
			url: "https://www.net-a-porter.com/gb/en/product/732955/"
		},

		{
			price: 3,
			imgUrl: "http://cache.net-a-porter.com/images/products/760890/760890_cu_pp.jpg",
			brand: "Derek Lam",
			url: "https://www.net-a-porter.com/gb/en/product/760890/"
		},
	];

loadImage("first", products[0]);
loadImage("second", products[1]);
loadImage("third", products[2]);

function loadImage(elementClass, details){
	var $carouselSlide = $("." + elementClass);
	$carouselSlide.children("img").attr("src", details.imgUrl).wrap('<a href="'+ details.url +'" />');
	$carouselSlide.children("div.carousel-caption").html(details.price);
}