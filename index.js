var randomNumber1 = Math.floor((Math.random() * 6) + 1); //random number 1-6

var imageSource1 = "images/dice" + randomNumber1 + ".png"; //source of our dice 1 image variable string

document.querySelectorAll('img')[0].setAttribute("src", imageSource1); //setting attribute source

var randomNumber2 = Math.floor((Math.random() * 6) + 1); //random number 1-6

var imageSource2 = "images/dice" + randomNumber2 + ".png"; //source of out dice 2 image variable string

document.querySelectorAll('img')[1].setAttribute("src", imageSource2); //setting attribute source
    // heading change

if(randomNumber1>randomNumber2){
  document.querySelector('h1').textContent = "❤️Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector('h1').textContent = "Player 2 Wins❤️";
}
else{
  document.querySelector('h1').textContent = "DRAW";
}
