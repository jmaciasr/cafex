var mision = document.getElementById('mision');
var vision = document.getElementById('vision');
var cafex = document.getElementById('history');
var misionText = document.getElementById('misionText');
var visionText = document.getElementById('visionText');
var historyText = document.getElementById('historyText');
var displayPhoto = document.getElementById('displayPhoto');


mision.addEventListener("click", function(){
    misionText.classList.remove('hidden');
    visionText.classList.add('hidden');
    historyText.classList.add('hidden');
    vision.classList.remove('selected-display')
    cafex.classList.remove('selected-display')   
    mision.classList.add('selected-display');
    displayPhoto.src = '../img/grid-mision.jpg';
});

vision.addEventListener("click", function(){
    visionText.classList.remove('hidden');
    misionText.classList.add('hidden');
    historyText.classList.add('hidden');
    mision.classList.remove('selected-display')
    cafex.classList.remove('selected-display')   
    vision.classList.add('selected-display');
    displayPhoto.src = '../img/grid-vision.jpg';

});

cafex.addEventListener("click", function(){
    historyText.classList.remove('hidden');
    misionText.classList.add('hidden');
    visionText.classList.add('hidden');
    mision.classList.remove('selected-display')
    vision.classList.remove('selected-display')   
    cafex.classList.add('selected-display');
    displayPhoto.src = '../img/grid-history.jpg';

});