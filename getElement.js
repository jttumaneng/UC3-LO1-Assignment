//getElementById
var banner = document.getElementById('page-banner');
console.log(banner);

//getElementByClassName
var titles = document.getElementsByClassName('title');
console.log(titles[0]);
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
Array.from(titles).forEach(function(item) {
    console.log(item);
})

//getElementByTagName
// var lis = document.getElementsByTagName('li');
// console.log(lis);