# Gem Collection Game

## The user, a humble Dwarf of Moria, must travel deep into their mountain home to mine the valuable treasures within. While they are filling their mining cart with gold and precious gems, they must be aware of their total load weight. This is because the bridges that span the vast canyons are only able to support a certain amount of weight or they will collapse!


## Check it out!: 
[Open Here](https://fayelinks.github.io/unit-4-game/ "Gem Collection")

## Code Example:

``` $(".crystals").on("click", function() {
    $("#total-score").text(counter + " Pounds");

    // <!-- Keep track of wins and losses for user -->

    if (counter === targetNumber) {
      alert("You have brought wealth to your Clan!");
      $("#wins-text").text(wins= 1+ wins + " Won");
      wins = parseInt(wins);
      reset();
    }
// <!-- Have an alert if they lose that says: "You dug too deep!"
    else if (counter >= targetNumber) {
      alert("You dug too deep!");
      $("#losses-text").text(losses= 1+ losses + " Lost");
      losses = parseInt(losses);
      reset();
    }

  });
```

## Built With:
* HTML
* Javascript
* JQuery
* CSS
* Bootstrap


## Future Development: 
> Add data persistence to the site so that the score can be kept or cleared by the user

> Add a countdown timer to limit the amount of time the user has to collect the gems

> Add a function for multiple users to compete against eachother to see who can load the most gems over the course of several games


## Authors: 
* Alison Kelly
