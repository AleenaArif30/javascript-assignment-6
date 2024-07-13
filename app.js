var integer = prompt("enter  a positive integer");
document.write("number: " + integer + "<br>" + "round off value: " + Math.round(integer) + "<br>" + "floor value: " + Math.floor(integer) + "<br>" + " ciel value: " + Math.ceil(integer) + "<br> " + "<br>");
document.write("<br>");


var integer = prompt("enter  a negative integer");
document.write("number: " + integer + "<br>" + "round off value: " + Math.round(integer) + "<br>" + "floor value: " + Math.floor(integer) + "<br>" + " ciel value: " + Math.ceil(integer));

document.write("<br>");
document.write("<br>");

var abs = prompt("enter any number");
document.write("The absolute of " + abs + " is " + Math.abs(abs));

document.write("<br>");
document.write("<br>");

var dice = Math.random() * 7;
document.write("the random dice value is " + Math.floor(dice));

document.write("<br>");
var dice = Math.random() * 7;

document.write("the random dice value is " + Math.floor(dice));

document.write("<br>");
document.write("<br>");

var game = Math.random() * 2 + 1;
game = Math.floor(game);
document.write("value is " + game);
document.write("<br>");

if (game === 1) {
    document.write("random coin value tail: ")
    document.write("<br>");
}
else {
    document.write("random coin value is head: ")
}


document.write("<br>");
document.write("<br>");

var number = Math.random()*100 + 1;
document.write ("the random value between 1 and 100 is : " + Math.floor(number));

document.write("<br>");
document.write("<br>");

var weight = prompt ("enter your weight in kgs");
var newweight= parseFloat(weight);


document.write("the weight of user is " + newweight + "kgs");
document.write("<br>");
document.write("<br>");


var secret = +prompt("Enter a secret number between 1 and 10 ");
var number = Math.floor(Math.random()*10 +1 );
document.write( "the secret number is : " +number);
if(secret===number){
    alert("congrats dear you win")
}
else{
    alert('oh! try again');
}