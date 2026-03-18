let numID      = 9999;
let numOnline  = 9999;
let numPhone   = 99999;

let strName    = "Kaimook Fearingx"; //12
//let strGender  = "";
//let strStatus  = "";
//let urlProfile = "";

let isOnScreen = false;
let isFading   = false;
let size = 2.4;
const PZ = document.getElementById('PZ-ScoreBoard-ID');


function del() {
    if (!isFading){
    if (isOnScreen) { isOnScreen = false;  hide(); } 
    else            { isOnScreen = true;   show(); }}
}

function show() {
    isFading = true;
    let opacity = 0;
    PZ.style.opacity = opacity;
    PZ.style.display = 'block';

    const sound = document.getElementById('sound');
    sound.play();

    let fadeIn = setInterval(() => {
        opacity += 0.05;
        if (opacity >= 1) {
            opacity = 1;
            clearInterval(fadeIn);
            isFading = false; 
        }
        PZ.style.opacity = opacity;
    }, 20);
}

function hide() {
    isFading = true;
    let opacity = 1;
    PZ.style.opacity = opacity;

    let fadeOut = setInterval(() => {
        opacity -= 0.05;
        if (opacity <= 0) {
            opacity = 0;
            clearInterval(fadeOut);
            PZ.style.display = 'none';
            isFading = false;
        }
        PZ.style.opacity = opacity;
    }, 20);
}

function updateALL() {
    document.getElementById('name-id')  .textContent = strName;
    document.getElementById('id-id')    .textContent = numID;
    document.getElementById('online-id').textContent = numOnline;
    document.getElementById('phone-id') .textContent = numPhone;

    const nid = document.getElementById('name-id');
    if      (strName.length > 20) { size = 2.3 - strName.length / 20; } 
    else if (strName.length > 10) { size = 3.2 - strName.length / 10; } 

    nid.style.fontSize = `${size}vw`;
}

del(); 
updateALL();
// ================================================================================================================
// ================================================================================================================ 

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("message", (event) => {
        const e = event.data;

        if (e.type === "showScoreBoard"){ del(); } 

        if (e.type === "updateScoreBoard") {
            numOnline = e.playerCount;
            numID     = e.playerID;
            strName   = e.playerName;

            updateALL();
        }
    });
});


