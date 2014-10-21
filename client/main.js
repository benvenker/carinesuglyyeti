if (Meteor.isClient) {
  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }

    // Generate initial title on page load
    $(replaceTitle);

    /******************  MAIN FUNCTION TO GENERATE RANDOM TITLES ******************/

    // Generate an awesome band / club / restaurant name!
    function carinesUglyYeti() {
      var namePicked = getRandomElement(names)

      if (namePicked === "THE") {
        // Format title as "The Adjective Animal"
        return namePicked + " " + getAdjsAndAnimals();

      } else if (randomNumber([0,1,2,3,4,5,6,7,8,9]) % 2 == 0) {
        // Format title as "Name's Adjective Animal"
        return namePicked + "'S " + getAdjsAndAnimals();

      } else {
        // Format the title as "Name The Adjective Animal"
        return namePicked + " " + " THE " + getAdjsAndAnimals();
      }
    }

    /***************************** Helper Functions *******************************/

    // Generate a random number
    function randomNumber(array) {
      return Math.floor(Math.random() * array.length);
    }

    // Get a random elemnt from an array
    function getRandomElement(array) {
      return array[randomNumber(array)];
    }

    // Generates a random title
    function replaceTitle() {
      $('h1').remove('.title');
      $('#main').prepend("<h1 class=title>" + carinesUglyYeti() + "</h1>");
    }

    /**************************** Refactoring Practice ***************************/

    // Generate adjectives and animals, formatted
    function getAdjsAndAnimals() {
      return getRandomElement(adjectives) + " " + getRandomElement(animals);
    }

    // Refactored Add Elements functions
    function getElement(array) {
      var newEl = prompt("Add it to the list!");
      array.push(newEl.toUpperCase());
      alert("You added " + array[array.length - 1] + " to the list!");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
