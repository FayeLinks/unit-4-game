
// <!-- Generate targetNumber total number for the start of each game -->

var targetNumber = Math.floor(Math.random() * 120) + 19;

$("#pathWeight").text(targetNumber);

// <!-- Create Variables for keeping score -->

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var wins = 0;
var losses = 0;
var counter= 0;

// <!-- Create Reset for the game after the user wins or goes over the Random Total Number * The random number shown at the start of the game should be between 19 - 120. -->



// Create click events for the images below
// This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystals").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);


    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // <!-- Keep track of all numbers added together that user has guessed -->
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#total-score").text(counter + " Pounds");

    // <!-- Keep track of wins and losses for user -->

    if (counter === targetNumber) {
      alert("You have brought wealth to your Clan!");
      $("#wins-text").text(wins= wins +1 + " Won");
    }
// <!-- Have an alert if they lose that says: "You dug too deep!"
    else if (counter >= targetNumber) {
      alert("You dug too deep!");
      $("#losses-text").text(losses= losses +1 + " Lost");
    }

  });