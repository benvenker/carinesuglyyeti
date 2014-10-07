if (Meteor.isClient) {
  // // counter starts at 0
  // Session.setDefault("counter", 0);
  // Session.setDefault("names", "Carine's Ugly Yeti");
  //
  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get("counter");
  //   }
  // });
  //
  // Template.hello.events({
  //   'click counter': function () {
  //     // increment the counter when button is clicked
  //     Session.set("counter", Session.get("counter") + 1);
  //   }
  // });

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

  /******************************* ADD ELEMENTS ********************************/
  // Refactored these functions to getElement() above

  // Add names
  function getName() {
    var newName = prompt("Add a new name", "Type name here");
    // Convert the name to uppercase and add it to the names array
    names.push(newName.toUpperCase());
    getElementsAlert(names);
  }

  // Add adjectives
  function getAdj() {
    var newAdj = prompt("Add a new adjective!", "Type adjective here");
    // Convert the name to uppercase and add it to the names array
    adjectives.push(newAdj.toUpperCase());
    getElementsAlert(adjectives);
  }

  // Add animals
  function getAnimal() {
    var newAnimal = prompt("Add a new adjective!", "Type adjective here");
    // Convert the name to uppercase and add it to the names array
    animals.push(newAnimal.toUpperCase());
    getElementsAlert(animals);
  }
}


  if (Meteor.isServer) {
    Meteor.startup(function () {
      // code to run on server at startup
    });
  }
