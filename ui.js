// var products = [];
// getProductDetails(pidArray);


// function loadImage(elementClass, details){
// 	var $carouselSlide = $("." + elementClass);
// 	console.log(elementClass);
// 	console.log(details.url);
// 	$carouselSlide.children("img").attr("src", details.imgUrl).wrap('<a href="'+ details.url +'" />');
// 	$carouselSlide.children("div.carousel-caption").html(details.price);
// }

// function getProductDetails(pidsArray){
// 	var url = "http://lad-api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible&pids=" + pidsArray.join("%2C");
// 	console.log(url);
// 	var urlTemplate = "https://www.net-a-porter.com/gb/en/product/";
// 	jQuery.getJSON(url, function(data){
		
// 		for(let product of data.summaries){
// 			let productDetail = {};
// 			productDetail.price = product.price.amount;
// 			productDetail.brand = product.brandId;
// 			productDetail.imgUrl = product.images.urlTemplate.replace("{{scheme}}", "http:").replace("{{shot}}", "cu").replace("{{size}}", "pp");
// 			productDetail.url = urlTemplate + product.id;
// 			console.log(productDetail);
// 			products.push(productDetail);
// 		}
// 		loadImage("first", products[0]);
// 		loadImage("second", products[1]);
// 		loadImage("third", products[2]);
// 		loadImage("fourth", products[2]);
// 		loadImage("fifth", products[2]);
// 		loadImage("sixth", products[2]);
// 		loadImage("seventh", products[2]);
// 	});
// }