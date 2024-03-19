const imges = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = imges[Math.floor(Math.random()*imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}.jpg`;

document.body.appendChild(bgImage);
