const fs = require("fs");

let images = fs.readdirSync("./images");
let videos = fs.readdirSync("./videos");
let used = JSON.parse(fs.readFileSync("blacklist.json"));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function toBlackList(type, element) {
	switch(type) {
		case "images":
			used.images.push(element);
			break;
		case "videos":
			used.videos.push(element);
			break;
	}
	return fs.writeFileSync("blacklist.json", JSON.stringify(used));
}
function isUsed(type, element) {
	let sent = false;
	switch(type) {
		case "images":
			used.images.forEach(image => {
				if(image == element) {
					sent = true;
				}
			})
			return sent;
			break;
		case "videos":
			used.videos.forEach(video => {
				if(video == element) {
					sent = true;
				}
			})
			return sent;
			break;
	}
}

// COMANDOS
let command = process.argv[2];
let elementNumber = process.argv[3];
let lengthImg = images.length - 1;
let lengthVideo = videos.length - 1;
let number = 0;

switch(command) {
    case "img":
    	if(elementNumber) {
    		if(isUsed("images", images[elementNumber])) {
    			console.log("La imágen " + elementNumber + " es repetida, archivo: " + images[elementNumber]);
    		} else {
    			toBlackList("images", images[elementNumber]);
    			console.log("Imagen: " + elementNumber + ", archivo: " + images[elementNumber]);
    		}
    	} else {
    		number = getRandomInt(0, lengthImg);
    		let sentImg = isUsed("images", images[number]);
    		while(sentImg) {
	    		console.log("Salió la imágen " + number + " repetida, tirando los dados de nuevo...");
	    		number = getRandomInt(0, lengthImg);
	    		sentImg = isUsed("images", images[number]);
	    	}
	    	toBlackList("images", images[number]);
	        console.log("Imágen: " + number + ", archivo: " + images[number]);
    	}
        break;
    case "video":
    	if(elementNumber) {
    		if(isUsed("videos", videos[elementNumber])) {
    			console.log("El video " + elementNumber + " es repetido, archivo: " + videos[elementNumber]);
    		} else {
    			toBlackList("videos", videos[elementNumber]);
        		console.log("Video: " + elementNumber + ", archivo: " + videos[elementNumber]);
    		}
    	} else {
			number = getRandomInt(0, lengthVideo);
	    	let sentVideo = isUsed("videos", videos[number]);
	    	while(sentVideo) {
	    		console.log("Salió el video " + number + " repetido, tirando los dados de nuevo...");
	    		number = getRandomInt(0, lengthVideo);
	    		sentVideo = isUsed("videos", videos[number]);
	    	}
	    	toBlackList("videos", videos[number]);
	        console.log("Video: " + number + ", archivo: " + videos[number]);
    	}
        break;
    default:
    	console.log("=====================");
        console.log(" Comando incorrecto!");
        console.log(" Las opciones son:");
        console.log(" - img");
        console.log(" - img (numero)");
        console.log(" - video");
        console.log(" - video (numero)");
        console.log("=====================");
        break;
}