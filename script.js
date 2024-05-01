const aansnoep = { value: false };
const aanbloem = { value: false };
const aanhartjes = { value: false };
const aankers = { value: false };
const aanperzik = { value: false };
const aanaardbei = { value: false };
const aanblauwebes = { value: false };
const aansprinkles = { value: false };
const aanlolly = { value: false };
const aannotes = { value: false };
const aanpinkrocks = { value: false };
const aanframboos= { value: false };
const aanlemon = { value: false };
const aanstars = { value: false };
const aanmarshmellow = { value: false };
const aangrape = { value: false };


const cupcakes = document.querySelector(".cupcake-button-active");
const toppings = document.querySelector(".topping-button");
const cupcakeBar = document.querySelector("#cupcakesBar");
const toppingBar = document.querySelector("#toppingsBar");
const contentGame = document.querySelector('.content-game');

// // Hieronder is de code voor het veranderen van de achtergronden wanneer de gebruiker op cupcakes of toppings klikt. Wanneer de gebruiker op toppings klik ziet de gebruiker de topppingbar, en wanneer de gebruiker
// op de cupcakes klikt ziet hij de cupcakeBar. //
toppings.addEventListener("click", showToppings);
cupcakes.addEventListener("click", showCupcakes);

document.addEventListener("DOMContentLoaded", function() {
    showCupcakes();
    audio.play(); 
});

function showCupcakes() {
    cupcakeBar.style.display = "flex"; 
    toppingBar.style.display = "none";
    contentGame.style.backgroundImage = 'url(../images/background-bar.png)'; 
}

function showToppings() {
    cupcakeBar.style.display = "none"; 
    toppingBar.style.display = "flex";
    contentGame.style.backgroundImage = 'url(../images/background-bar-2.png)'; 
}

// De code voor het veranderen van de cupcake die in het mdiden staat.//
const cupcakeImages = document.querySelectorAll('#cupcakesBar .base');
cupcakeImages.forEach(function(cupcakeImage) {
    cupcakeImage.addEventListener('click', function(){
        const selectedCupcakeSrc = cupcakeImage.src;
        const baseVanille = document.querySelector('.base-vanille');
        baseVanille.src = selectedCupcakeSrc;
    });
});

// Hieronder is alle code geschreven voor het toevoegen en verwijderen van de toppings die op de cupcake in het midden komen te Staan.
const snoepknop = document.querySelector('#snoepknop');
snoepknop.addEventListener("click",snoep)
function snoep(){
    if(aansnoep.value === true){
        aansnoep.value = false
        document.querySelector(".snoeplos").style.display = "none";
    } else {
        aansnoep.value = true 
        document.querySelector(".snoeplos").style.display = "block";
    }
}

const bloemknop = document.querySelector('#bloemknop');
bloemknop.addEventListener("click",bloem)
function bloem(){
    if(aanbloem.value === true){
        aanbloem.value = false
        document.querySelector(".bloemlos").style.display = "none";
    } else {
        aanbloem.value = true 
        document.querySelector(".bloemlos").style.display = "block";
    }
}

const hartjesknop = document.querySelector('#hartjesknop');
hartjesknop.addEventListener("click",hartjes)
function hartjes(){
    if(aanhartjes.value === true){
        aanhartjes.value = false
        document.querySelector(".hartjelos").style.display = "none";
    } else {
        aanhartjes.value = true 
        document.querySelector(".hartjelos").style.display = "block";
    }
}

const kersknop = document.querySelector('#kersknop');
kersknop.addEventListener("click",kers)
function kers(){
    if(aankers.value === true){
        aankers.value = false
        document.querySelector(".kerslos").style.display = "none";
    } else {
        aankers.value = true 
        document.querySelector(".kerslos").style.display = "block";
    }
}

const perzikknop = document.querySelector('#perzikknop');
perzikknop.addEventListener("click",perzik)
function perzik(){
    if(aanperzik.value === true){
        aanperzik.value = false
        document.querySelector(".perziklos").style.display = "none";
    } else {
        aanperzik.value = true 
        document.querySelector(".perziklos").style.display = "block";
    }
}

const aardbeiknop = document.querySelector('#aardbeiknop');
aardbeiknop.addEventListener("click",aardbei)
function aardbei(){
    if(aanaardbei.value === true){
        aanaardbei.value = false
        document.querySelector(".aardbeilos").style.display = "none";
    } else {
        aanaardbei.value = true 
        document.querySelector(".aardbeilos").style.display = "block";
    }
}

const blauwebesknop = document.querySelector('#blauwebesknop');
blauwebesknop.addEventListener("click",blauwebes)
function blauwebes(){
    if(aanblauwebes.value === true){
        aanblauwebes.value = false
        document.querySelector(".blauwebeslos").style.display = "none";
    } else {
        aanblauwebes.value = true 
        document.querySelector(".blauwebeslos").style.display = "block";
    }
}

const sprinklesknop = document.querySelector('#sprinklesknop');
sprinklesknop.addEventListener("click",sprinkles)
function sprinkles(){
    if(aansprinkles.value === true){
        aansprinkles.value = false
        document.querySelector(".sprinkleslos").style.display = "none";
    } else {
        aansprinkles.value = true 
        document.querySelector(".sprinkleslos").style.display = "block";
    }
}

const lollyknop = document.querySelector('#lollyknop');
lollyknop.addEventListener("click",lolly)
function lolly(){
    if(aanlolly.value === true){
        aanlolly.value = false
        document.querySelector(".lollylos").style.display = "none";
    } else {
        aanlolly.value = true 
        document.querySelector(".lollylos").style.display = "block";
    }
}

const lemonknop = document.querySelector('#lemonknop');
lemonknop.addEventListener("click",lemon)
function lemon(){
    if(aanlemon.value === true){
        aanlemon.value = false
        document.querySelector(".lemonlos").style.display = "none";
    } else {
        aanlemon.value = true 
        document.querySelector(".lemonlos").style.display = "block";
    }
}

const grapeknop = document.querySelector('#grapeknop');
grapeknop.addEventListener("click",grape)
function grape(){
    if(aangrape.value === true){
        aangrape.value = false
        document.querySelector(".grapelos").style.display = "none";
    } else {
        aangrape.value = true 
        document.querySelector(".grapelos").style.display = "block";
    }
}

const framboosknop = document.querySelector('#framboosknop');
framboosknop.addEventListener("click",framboos)
function framboos(){
    if(aanframboos.value === true){
        aanframboos.value = false
        document.querySelector(".frambooslos").style.display = "none";
    } else {
        aanframboos.value = true 
        document.querySelector(".frambooslos").style.display = "block";
    }
}

const starsknop = document.querySelector('#starsknop');
starsknop.addEventListener("click",stars)
function stars(){
    if(aanstars.value === true){
        aanstars.value = false
        document.querySelector(".starslos").style.display = "none";
    } else {
        aanstars.value = true 
        document.querySelector(".starslos").style.display = "block";
    }
}

const marshmellowknop = document.querySelector('#marshmellowknop');
marshmellowknop.addEventListener("click", marshmellow)
function marshmellow(){
    if(aanmarshmellow.value === true){
        aanmarshmellow.value = false
        document.querySelector(".marshmellowlos").style.display = "none";
    } else {
        aanmarshmellow.value = true 
        document.querySelector(".marshmellowlos").style.display = "block";
    }
}

const pinkrocksknop = document.querySelector('#pinkrocksknop');
pinkrocksknop.addEventListener("click", pinkrocks);
function pinkrocks(){
    if(aanpinkrocks.value === true){
        aanpinkrocks.value = false
        document.querySelector(".pinkrockslos").style.display = "none";
    } else {
        aanpinkrocks.value = true 
        document.querySelector(".pinkrockslos").style.display = "block";
    }
}

const notesknop = document.querySelector('#notesknop');
notesknop.addEventListener("click", notes);
function notes(){
    if(aannotes.value === true){
        aannotes.value = false
        document.querySelector(".noteslos").style.display = "none";
    } else {
        aannotes.value = true 
        document.querySelector(".noteslos").style.display = "block";
    }
}

// De code om een achtergrond liedje/audio toe te voegen wanneer de gebruiker begint met het spel
const audio = document.getElementById("muziek")
document.addEventListener("DOMContentLoaded", function() {;
    audio.play();
})

// De code om het icoontje van de geluidsknop te veranderen wanneer de gebruiker de muziek aan of uit zet.
const togglebutton = document.getElementById("togglebutton");
togglebutton.addEventListener("click", muziek)
function muziek(){
     if (audio.paused) {
        audio.play();
        togglebutton.src = "../images/music-button.png";
    } else {
        audio.pause();
        togglebutton.src = "../images/music-button-off.png"
    }
};

// De benaming van de cupcakeBar, het krijgen van een cijfer en het afspelen van een geluidje
const doneButton = document.querySelector('.done-button');
const cupcakeName = document.querySelector('.cupcake-name');
const cupcakeCijfer = document.querySelector('.cijfer');
const celebration = document.getElementById('celebration')

doneButton.addEventListener('click', function(){
    const name = window.prompt('Name your cupcake...');

    if (name) {
        cupcakeName.textContent = name;
        const randomNum = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    
        if (randomNum < 5) {
            cupcakeCijfer.textContent = '5';
        } else {
            cupcakeCijfer.textContent = randomNum.toString();
        }
            cupcakeCijfer.style.display = "flex";  
            celebration.play();
    } else {
        console.log('No name entered.');
    }
});