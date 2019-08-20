'use strict'

var totalClicks = 0;
var justShown = []; //keep track of which image shown last.
var productArray = [];
var productName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pen-sweep', 'scissors', 'shark', 'sweep', 'tauntuan', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Product(productName, path) {
    this.productName = name;
    this.path = path;
    this.shown = 0;
    this.clicked = 0;

    productArray.push(this);
}

var bag = new Product('bag', './img/bag.jpg');
var banana = new Product('banana', './img/banana.jpg');
var bathroom = new Product('bathroom', './img/bathroom.jpg');
var boots = new Product('boots', './img/boots.jpg');
var breakfast = new Product('breakfast', './img/breakfast.jpg');
var bubblegum = new Product('bubblegum', './img/bubblegum.jpg');
var chair = new Product('chair', './img/chair.jpg');
var cthulhu = new Product('cthulhu', './img/cthulhu.jpg');
var dogduck = new Product('dog-duck', './img/dog-duck.jpg');
var dragon = new Product('dragon', './img/dragon.jpg');
var pen = new Product('pen', './img/pen.jpg');
var pensweep = new Product('pen-sweep', './img/pen-sweep.jpg');
var scissors = new Product('scissors', './img/scissors.jpg');
var shark = new Product('shark', './img/shark.jpg');
var sweep = new Product('sweep', './img/sweep.jpg');
var tauntuan = new Product('tauntuan', './img/tauntuan.jpg');
var unicorn = new Product('unicorn', './img/unicorn.jpg');
var usb = new Product('usb', './img/usb.jpg');
var watercan = new Product('water-can', './img/water-can.jpg');
var wineglass = new Product('wine-glass', './img/wine-glass.jpg');


function randomProduct() {
    var getRandomnum = Math.floor(Math.random() * productArray.length);
    return [productArray, getRandomnum];
}

var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');

var firstRandom, secondRandom, thirdRandom;

function showRandomImages() {
    firstRandom = randomProduct();
    console.log(firstRandom);
    firstImage.setAttribute('src', firstRandom[0].path);

    secondRandom = randomProduct();
    while (firstRandom[1] === secondRandom[1]) {
        secondRandom = randomProduct();
    }
    secondImage.setAttribute('src', secondRandom[0].path);

    thirdRandom = randomProduct();
    while (secondRandom[1] === thirdRandom[1] || thirdRandom[1] === firstRandom[1]) {
        thirdRandom = randomProduct();
    }

    thirdImage.setAttribute('src', thirdRandom[0].path);

    justShown = [];
    justShown.push(firstRandom[1]);
    justShown.push(secondRandom[1]);
    justShown.push(thirdRandom[1]);

}

firstImage.addEventListener('click', function () {
    firstRandom.clicked += 1;
    counter += 1;
    console.log('count clicks:', counter);

    showRandomImages();
});
secondImage.addEventListener('click', function () {
    secondRandom.clicked += 1;
    counter += 1;
    console.log('count clicks:', counter);

    showRandomImages();
});

thirdImage.addEventListener('click', function () {
    thirdRandom.clicked += 1;
    counter += 1;
    console.log('count clicks:', counter);

    showRandomImages();
});
showRandomImages();