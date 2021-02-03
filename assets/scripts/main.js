let slider = document.getElementById('volume-slider');
let amount = document.getElementById('volume-number');
let sound = document.getElementById('horn-sound');
let play = document.getElementById('honk-btn');
let air = document.getElementById('radio-air-horn');
let car = document.getElementById('radio-car-horn');
let party = document.getElementById('radio-party-horn');
let image = document.getElementById('sound-image');
let image_v = document.getElementById('volume-image');


slider.oninput = function() {
    amount.value = this.value;

    if(amount.value < 1){
        play.disabled = true;
        image_v.src = "./assets/media/icons/volume-level-0.svg";
    }else if(amount.value >= 1 && amount.value <= 33){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-1.svg";
    }else if(amount.value >= 34 && amount.value <= 66){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-2.svg";
    }else if(amount.value >= 67 && amount.value <= 100){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-3.svg";
    }

    sound.volume = this.value/100;
}

amount.oninput = function() {
    slider.value = this.value;
    
    if(amount.value < 1){
        play.disabled = true;
        image_v.src = "./assets/media/icons/volume-level-0.svg";
    }else if(amount.value >= 1 && amount.value <= 33){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-1.svg";
    }else if(amount.value >= 34 && amount.value <= 66){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-2.svg";
    }else if(amount.value >= 67 && amount.value <= 100){
        play.disabled = false;
        image_v.src = "./assets/media/icons/volume-level-3.svg";
    }

    sound.volume = this.value/100;
}

play.onclick = function() {
    if(air.checked ){
        sound = new Audio("./assets/media/audio/air-horn.mp3");
    }
    if(car.checked ){
        sound = new Audio("./assets/media/audio/car-horn.mp3");
    }
    if(party.checked ){
        sound = new Audio("./assets/media/audio/party-horn.mp3");
    }
    sound.volume = amount.value/100;
    
    if(amount.value < 1){
        play.disabled = true;
    }else{
        play.disabled = false;
    }
    sound.play();
    return false;
};

air.onclick = function(){
    image.src = "./assets/media/images/air-horn.svg";
}

car.onclick = function(){
    image.src = "./assets/media/images/car.svg";
} 

party.onclick = function(){
    image.src = "./assets/media/images/party-horn.svg";
}




