

var userNumber = 0;
var wins= 0;
var losses= 0;

var slurmNumber = Math.floor(Math.random() * 12)+1;

var fishyNumber = Math.floor(Math.random() * 12)+1;

var bachNumber = Math.floor(Math.random() * 12)+1;

var manwichNumber = Math.floor(Math.random() * 12)+1;

function targetNumber(x, y){
    return (Math.floor(Math.random() * x) + y);
};

var randomNumber = targetNumber(102, 19);
console.log(randomNumber)
// displays the random number the user is supposed to reach
$("#randoNum").text(randomNumber);

// checks logic on slurm to make sure a number between 1-12 comes out
console.log(slurmNumber);
console.log(fishyNumber);
console.log(bachNumber);
console.log(manwichNumber);

//assign numbers to images

//make it so that when clocked it updates total

// assign the value to slurm button and set it to display on the counter
$("#slurm").click(function(){
    userNumber += slurmNumber;
    $("#userGuess").html(userNumber);
    check()
});
//assign the value to the fishy button and set it to display on the counter
$("#fishy").click(function(){
    userNumber += fishyNumber;
    $("#userGuess").html(userNumber);
    check()
});
//assign the value to the bachelor button and set it to display on the counter
$("#bachelor").click(function(){
    userNumber += bachNumber;
    $("#userGuess").html(userNumber);
    check()
});
//assign the value to the manwhich button and set it to display on the counter
$("#manwich").click(function(){
    userNumber += manwichNumber;
    $("#userGuess").html(userNumber);
    check()
});
//When the number is guessed account for a win if the number is exceeded account for a loss

var check = function() {

    if(userNumber == randomNumber)
    {
        wins++;
        $("#wins").html(wins)
        reset();
    }

    if(userNumber > randomNumber)
    {
        losses++;
        $("#losses").html(losses)
        reset();
    }
};

var reset = function () {
    //reset random number for user to guess
    randomNumber = targetNumber(102, 19);
    $("#randoNum").text(randomNumber);

    //reset userNumber
    $("#userGuess").text("0");
    userNumber = 0;

    //reset numbers for each food item
    slurmNumber = Math.floor(Math.random() * 12) + 1;

    fishyNumber = Math.floor(Math.random() * 12) + 1;

    bachNumber = Math.floor(Math.random() * 12) + 1;

    manwichNumber = Math.floor(Math.random() * 12) + 1;



}