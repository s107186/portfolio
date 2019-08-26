// hier komt je code
// console.log("Hallo wereld!");

//functie aanmaken
let mijnHoofd = function() {
  let mijnAfbeeldingen = document.querySelectorAll('img');
  let mijnArray = [];

  //loop schrijven
  let i = 0;
  while (i < mijnAfbeeldingen.length) {
    mijnArray[i] = mijnAfbeeldingen[i].getAttribute('src');
    i = i + 1
  }
  console.log(mijnArray);

  let i2 = 0;

  //loop schrijven
  while (i2 < mijnAfbeeldingen.length) {
    if (i2 === 3) {
      mijnAfbeeldingen[i2].setAttribute("src", mijnArray[0]);
    } else {
      mijnAfbeeldingen[i2].setAttribute("src", mijnArray[i2+1]);
    }
    i2 = i2+1;
  }
}

setInterval(mijnHoofd,2500);

let paneel1 = document.querySelector(".paneel1");
let paneel2 = document.querySelector(".paneel2");

window.addEventListener("scroll", function() {
  scrollPositiePx = window.pageYOffset;
  paneel1Pos = -(honderdVw - scrollPositiePx*2);
  if (paneel1Pos <= 0) {
          paneel1.style.right = paneel1Pos + "px";
  } else {
    paneel1.style.right = 0;
  }

  if (scrollPositiePx > honderdVh) {
      paneel2Pos = (honderdVw - ((scrollPositiePx-honderdVh)*2));
  if (paneel2Pos >= 0) {
      paneel2.style.right = paneel2Pos + "px";
      console.log(paneel2Pos);
  } else {
      paneel2.style.right = 0;
   }
  }
