displayPhotos('chiaroscuro-photo');



function displayPhotos(className){
	var imgs = document.getElementsByClassName('photo-container');
	for (i = 0; i < imgs.length; i++) {
    	imgs[i].style.display = "none";
    	imgs[i].style.visibility = "hidden";

	}

	var wantedImgs = document.getElementsByClassName(className);
	for (j=0; j<wantedImgs.length; j++) {
		wantedImgs[j].style.display = "inline";
		unfade(wantedImgs[j]);
	}

	var thisSquare = className + "-square"
	
	var squares = document.getElementsByClassName('small-square');

	for(var square of squares){
		if(window.getComputedStyle(square).getPropertyValue("visibility")=="visible") fade(square);
	} 

	unfade(document.getElementById(thisSquare));


}

function fade(element) {

	var op = window.getComputedStyle(element).getPropertyValue("opacity");  // initial opacity
    var fadeTimer = setInterval(function () {
        if (op <= 0.1){
        	element.style.visibility = 'hidden';
            clearInterval(fadeTimer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= 0.05;
    }, 50);
    

}

function unfade(element) {
	element.style.opacity = 0;
	element.style.visibility = 'visible'
    var op = 0.05;  // initial opacity
    element.style.display = 'block';
    var unfadeTimer = setInterval(function () {
        if (op >= 1){
            clearInterval(unfadeTimer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

