const creditsBt = document.getElementById('credits-button');
const coinFront = document.getElementById('coin-front');
const coinBack = document.getElementById('coin-back');
const coin = document.getElementById('coin');
const root = document.querySelector(':root');
const flipSFX = new Audio("sound/flip-sfx.mp3"); //https://www.youtube.com/watch?v=AF13-Lw5nF4

creditsBt.addEventListener("click", ()=> {
    alert("Desenvolvido por Hygor Vinícius @ https://github.com/hv-pm\n\nCréditos:\nDime Images @ https://en.wikipedia.org/wiki/Dime_%28United_States_coin%29\nCoin Flip SFX @ https://www.youtube.com/watch?v=AF13-Lw5nF4");
    if (confirm ("Quer conhecer meu Git? ❤") == true){
        window.open("https://github.com/hv-pm", "_blank");
    }
});

coinFront.addEventListener("click", ()=> {
    flipSFX.play();
    coin.style.animation = "";
    coinFront.style.animation = "";
    coinBack.style.animation = "";
    setTimeout(() => coin.style.animation = "rotate 3s forwards", 5);
    setTimeout(() => coinFront.style.animation = "result-front 3s forwards", 5);
    setTimeout(() => coinBack.style.animation = "result-back 3s forwards", 5);
    const result = Math.floor(Math.random() * 2);
    if (result == 0){
        root.style.setProperty('--front-face','url("../img/coin_front.png")');
        root.style.setProperty('--back-face','url("../img/coin_back.png")');
    }
    else {
        root.style.setProperty('--front-face','url("../img/coin_back_reverse.png")');
        root.style.setProperty('--back-face','url("../img/coin_front_reverse.png")');
    }
});