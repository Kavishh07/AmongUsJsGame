//Const variables aangemaakt voor de 3 div's.
const amongUs = document.getElementById('amongUs');
const object = document.getElementById('object');
const GameScore = document.getElementById('GameScore');

//Jump-animation te gebruikt in de function om de div amongUs te laten springen.
function jump() {
//elke keer dat de amongUs springt zal de jump-animation gebruikt worden en ook weer verwijdert worden, en word na 500 millie secondes verwijdert zodat de amongUs poppetje langer omhoog springt.
    amongUs.classList.add('jump-animation');
    setTimeout(() => {    
    amongUs.classList.remove('jump-animation');
      },  500);
}
  //De addEventListener zal worden gebruik voor de keypress op het toetsenboard, en zal ook weer de jump-animation mee geven..
  document.addEventListener('keypress', (event) => {
  //De amongUs div zal u de top aan geven in pixels.
    if (!amongUs.classList.contains('jump-animation')) {
      jump();
    }
  });
  
  //De setInterval word gebruikt als het object div de amongUs div zal aanraken.
  setInterval(() => {
  //De amongUs div zal u de top aan geven in pixels.
    const amongUsTop = parseInt(window.getComputedStyle(amongUs)
      .getPropertyValue('top'));
  //In de console zult u de beweging van de amongUs div naar boven zien (top).
    console.log(amongUsTop)

  //Het object div zal u de left aangeven in pixels
    const objectLeft = parseInt(window.getComputedStyle(object)
      .getPropertyValue('left'));
  //In de console zult u de beweging van het object div naar links zien (left).
    console.log(objectLeft)
    GameScore.innerText++;
  

  //De if else statement hieronder zal ervoor zorgen dat elke keer dat het object ten einden zal komen (Ongeveer op 50 aan de linker kant bij de dino) hij de game zal stoppen.
    if (objectLeft < 0) {
      object.style.display = 'none';
    } else {
      object.style.display = '';
    }
  
    if (objectLeft < 50 && objectLeft > 0 && amongUsTop > 150) {
      alert("U heeft een GameScore van: " + GameScore.innerText + " punten" +
        "\n\nWilt u opnieuw spelen?  Druk dan op OK");
      location.reload();
    }
  }, 50);
