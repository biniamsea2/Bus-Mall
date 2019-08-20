'use strict'

var container = document.getElementById('all');
var newSet = [];
var lastSet = [];
var allImages = [];

function randomizeImage(){
    for (var i= 0; i<allImagesArray.length; i++){
        var randomizeImage = Math.floor(Math.random()* allImagesArray.length);
        ImageEntryElement.src = allImagesArray[randomizeImage].src;
        ImageEntryCaption.textContent = allImagesArray[randomizeImage].name;
    }
}

function ImageEntry(name, url) {
    this.id = Math.random();
    this.name = name;
    this.src = url;
    this.numClicks = 0;
    this.numViews = 0;

    allImages.push(this);
}

ImageEntry.prototype.updateViews = function(){ //create function that updates the number of views.
    this.numViews++;
}
ImageEntry.prototype.updateClicks = function(){ //create function that updates the number of clicks.
    this.numClicks++;
}

function loadImageEntry(){

    new ImageEntry('bag', '/assets/images/bag.jpg');
    new ImageEntry('banana', '/assets/images/banana.jpg');
    new ImageEntry('bathroom', '/assets/images/bathroom.jpg');
    new ImageEntry('boots', '/assets/images/boots.jpg');
    new ImageEntry('breakfast', '/assets/images/breakfast.jpg');
    new ImageEntry('bubblegum', '/assets/images/bubblegum.jpg');
    new ImageEntry('chair', '/assets/images/chair.jpg');
    new ImageEntry('cthulhu', '/assets/images/cthulhu.jpg');
    new ImageEntry('dog-duck', '/assets/images/dog-duck.jpg');
    new ImageEntry('dragon', '/assets/images/dragon.jpg');
    new ImageEntry('pen', '/assets/images/pen.jpg');
    new ImageEntry('pet-sweep', '/assets/images/pet-sweep.jpg');
    new ImageEntry('scissors', '/assets/images/scissors.jpg');
    new ImageEntry('shark', '/assets/images/shark.jpg');
    new ImageEntry('sweep', '/assets/images/sweep.png');
    new ImageEntry('tauntuan', '/assets/images/tauntaun.jpg');
    new ImageEntry('unicorn', '/assets/images/unicorn.jpg');
    new ImageEntry('usb', '/assets/images/usb.gif');
    new ImageEntry('water-can', '/assets/images/water-can.jpg');
    new ImageEntry('wine-glass', '/assets/images/wine-glass.jpg');
}

function setupImageContainer(numImages){
    for (var i=1; i<=numImages;i++){
        var img = document.createElement('img');
        img.id = `image-${i}`;
        container.appendChild(img);
    }
}

function getListener(){
    container.addEventListener('click', clickHandler);
}

function clickHandler(e){
    var imgName = e.target.alt;
    for(var i=0; i<allImages.length;i++){
        if (allImages[i].name === imgName){
            allImages[i].updateClicks();
        }
    }
    showRandomImages(3);
}

function showRandomImages(numImages) {
    newSet = {};

    for(var i = 1; i<=numImages; i++){
        var id = `image-${i}`;
        var img = document.getElementById(id);

        var imgObject = getRandomImage();

        img.src = imgObject.src;
        img.alt = imgObject.name;

    }

    lastSet = newSet; //set new set to last set, to prevent an image appearing again in the new set.
    console.log(allImages);
}

function getRandomImage(){
    var found = false;
    while(!found){
        var temp = Math.floor(Math.random()* allImages.length);
        if (!newSet[temp] && !lastSet[temp]){
            found = allImages[temp];
            allImages[temp].updateViews();
                newSet[temp] = true;
        }
    }
    return found;
}

//call functions
loadImageEntry();
setupImageContainer(3);
getListener();
showRandomImages(3);






// function randomProduct() {
//     var getRandomnum = Math.floor(Math.random() * productArray.length);
// //if not in previous set or current set, we found it, put that in current set.
// }


// var firstRandom, secondRandom, thirdRandom;

//     firstRandom = randomProduct();
//     firstImage.setAttribute('src', firstRandom[0].path);
//     var firstImage = document.getElementById('image1');


//     secondRandom = randomProduct();
//     while (firstRandom[1] === secondRandom[1]) {
//         secondRandom = randomProduct();
//     }
//     secondImage.setAttribute('src', secondRandom[0].path);
//     var secondImage = document.getElementById('image2');


//     thirdRandom = randomProduct();
//     while (secondRandom[1] === thirdRandom[1] || thirdRandom[1] === firstRandom[1]) {
//         thirdRandom = randomProduct();
//     }

//     thirdImage.setAttribute('src', thirdRandom[0].path);
//     var thirdImage = document.getElementById('image3');


//     justShown = [];
//     justShown.push(firstRandom[1]);
//     justShown.push(secondRandom[1]);
//     justShown.push(thirdRandom[1]);

// }

// // firstImage.addEventListener('click', function () {
// //     firstRandom.clicked += 1;
// //     counter += 1;
// //     console.log('count clicks:', counter);

// //     showRandomImages();
// // });
// // secondImage.addEventListener('click', function () {
// //     secondRandom.clicked += 1;
// //     counter += 1;
// //     console.log('count clicks:', counter);

// //     showRandomImages();
// // });

// // thirdImage.addEventListener('click', function () {
// //     thirdRandom.clicked += 1;
// //     counter += 1;
// //     console.log('count clicks:', counter);

// //     showRandomImages();
// // });
// // showRandomImages();