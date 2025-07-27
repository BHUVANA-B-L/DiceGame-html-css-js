var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage);

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Bhuvana  Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🏅 Nayana Wins!";
} else {
  document.querySelector("h1").innerHTML = "🤝 It's a Draw!";
}