
// <!-- Create Variables for keeping score -->

// <!-- Generate Random total number for the start of each game -->

var targetNumber = Math.floor(Math.random() * 120) + 19;
console.log(targetNumber);

$("#pathWeight").text(targetNumber);

var wins = 0;
var losses = 0;
var counter= 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (var i = 8; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("id1", "id2" ,"id3", "id4");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/gems.jpg");
    
    imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".id1").on("click", function() {

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

// for (var i = 0; i < numberOptions[Math.floor(Math.random() * numberOptions.length)];

// for ( i = 0; i < 25; i++ ) {
//     var numberOptions = 0;
//     var numberOptions = Math.floor(Math.random() * 5);
//      $("p").append(" "+numberOptions);
//      console.log(numberOptions);
// }


// <!-- Create Reset for the game after the user wins or goes over the Random Total Number * The random number shown at the start of the game should be between 19 - 120. -->

// <!-- Create images of the crystals * Each crystal should have a random hidden value between 1 - 12.-->




// <!-- Keep track of wins and losses for user -->

