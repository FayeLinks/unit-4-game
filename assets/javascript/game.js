
// <!-- Generate targetNumber total number for the start of each game -->

var targetNumber = Math.floor(Math.random() * 120) + 19;

$("#pathWeight").text(targetNumber);

// <!-- Create Variables for keeping score -->

var wins = 0;
var losses = 0;
var counter= 0;

var num1= Math.floor(Math.random()*3+1)
console.log(num1);
var num2= Math.floor(Math.random()*6+1)
console.log(num2);
var num3= Math.floor(Math.random()*6+1) + 6;
console.log(num3);
var num4= Math.floor(Math.random()*6+1) +6;
console.log(num4);

// <!-- Create Reset for the game after the user wins or goes over the Random Total Number * The random number shown at the start of the game should be between 19 - 120. -->

function reset() {
    console.log("Game Over");
    targetNumber = Math.floor(Math.random() * 120) + 19;

    $("#pathWeight").text(targetNumber);

    counter= 0;

    num1= Math.floor(Math.random()*3+1);
    num2= Math.floor(Math.random()*6+1);
    num3= Math.floor(Math.random()*6+1) + 6;
    num4= Math.floor(Math.random()*6+1) +6;
}

// Create click events for the images below

$("#one").on("click", function() {
    counter += num1;
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(counter);
});

$("#two").on("click", function() {
    counter += num2;
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(counter);
});

$("#three").on("click", function() {
    counter += num3;
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(counter);
});

$("#four").on("click", function() {
    counter += num4;
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(counter);
});


// This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystals").on("click", function() {
    $("#total-score").text(counter + " Pounds");

    // <!-- Keep track of wins and losses for user -->

    if (counter === targetNumber) {
      alert("You have brought wealth to your Clan!");
      $("#wins-text").text(wins= wins +1 + " Won");
      reset();
    }
// <!-- Have an alert if they lose that says: "You dug too deep!"
    else if (counter >= targetNumber) {
      alert("You dug too deep!");
      $("#losses-text").text(losses= losses +1 + " Lost");
      reset();
    }

  });