var names = [
  "JAMES",
  "JOHN",
  "ROBERT",
  "MICHAEL",
  "MARY",
  "WILLIAM",
  "DAVID",
  "RICHARD",
  "CHARLES",
  "JOSEPH",
  "THE",
  "THE",
  "THE",
];

var adjectives = [
  "UGLY",
  "SWEATY",
  "HOT",
  "FIRM",
  "MOIST",
  "COLD",
  "BOLD",
  "LAZY",
  "DUMB",
  "HORRIFIC",
  "LABILE",
  "OUTRAGEOUS",
  "HUMOURLESS",
  "DIZZY",
  "PENSIVE",
  "SUICIDAL"
  ];

var animals = [
  "YETI",
  "ZEBRA",
  "LION",
  "HUMMBINGBIRD",
  "CAT",
  "DOG",
  "LEMUR",
  "TIGER"
  ]

// Generate a random number
function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

// Get a random elemnt from an array
function getRandomElement(array) {
  return array[randomNumber(array)];
}

// Generate an awesome band / club / restaurant name!
function carinesUglyYeti(name, adjective, animal) {
  var namePicked = getRandomElement(name);

  if (namePicked === "THE") {
    return namePicked + " " +
           getRandomElement(adjective) + " " +
           getRandomElement(animal) + " ";
  } else {
  return namePicked + "'S " +
         getRandomElement(adjective) + " " +
         getRandomElement(animal) + " ";
  }
}

console.log(carinesUglyYeti(names, adjectives, animals));



  
