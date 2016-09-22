// var products =	[

// 		{
// 			price: 1,
// 			imgUrl: "http://cache.net-a-porter.com/images/products/23453/23453_cu_pp.jpg",
// 			brand: "Derek Lam",
// 			url: "https://www.net-a-porter.com/gb/en/product/23453/"
// 		},

// 		{
// 			price: 2,
// 			imgUrl: "http://cache.net-a-porter.com/images/products/732955/732955_cu_pp.jpg",
// 			brand: "Derek Lam",
// 			url: "https://www.net-a-porter.com/gb/en/product/732955/"
// 		},

// 		{
// 			price: 3,
// 			imgUrl: "http://cache.net-a-porter.com/images/products/760890/760890_cu_pp.jpg",
// 			brand: "Derek Lam",
// 			url: "https://www.net-a-porter.com/gb/en/product/760890/"
// 		},
// 	];
// loadImage("first", products[0]);
var products = [];
getProductDetails(["756059", "732955", "760890"]);


function loadImage(elementClass, details){
	var $carouselSlide = $("." + elementClass);
	console.log(elementClass);
	console.log(details.url);
	$carouselSlide.children("img").attr("src", details.imgUrl).wrap('<a href="'+ details.url +'" />');
	$carouselSlide.children("div.carousel-caption").html(details.price);
}

function getProductDetails(pidsArray){
	var url = "http://lad-api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible&pids=" + pidsArray.join("%2C");
	console.log(url);
	var urlTemplate = "https://www.net-a-porter.com/gb/en/product/";
	jQuery.getJSON(url, function(data){
		
		for(let product of data.summaries){
			let productDetail = {};
			productDetail.price = product.price.amount;
			productDetail.brand = product.brandId;
			productDetail.imgUrl = product.images.urlTemplate.replace("{{scheme}}", "http:").replace("{{shot}}", "cu").replace("{{size}}", "pp");
			productDetail.url = urlTemplate + product.id;
			console.log(productDetail);
			products.push(productDetail);
		}
		loadImage("first", products[0]);
loadImage("second", products[1]);
loadImage("third", products[2]);
	});

	// for(var i = 0; i < pidsArray.length; i++){
	// 	var productDetail = requestProductDetails(pidsArray[i]);
	// 	console.log("product detail: " + productDetail);
	// 	products.push(productDetail);
	// }
}

function requestProductDetails(pid){
	var apiUrlTemplate = "http://lad-api.net-a-porter.com:80/NAP/GB/en/detail/";
	var productDetailUrlTemplate = "https://www.net-a-porter.com/gb/en/product/760890/";
	var urlTemplate = "https://www.net-a-porter.com/gb/en/product/"
	var productDetail = {};
	jQuery.getJSON(apiUrlTemplate + pid, function(data){
		productDetail.price = data.price.amount;
		productDetail.brand = data.brand.name;
		productDetail.imgUrl = data.images.urlTemplate.replace("{{scheme}}", "http:").replace("{{shot}}", "cu").replace("{{size}}", "pp");
		productDetail.url = urlTemplate + pid;
		console.log(productDetail);
	});
	console.log(productDetail);
	return productDetail;
}