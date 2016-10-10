//intentionally made global by leaving out var before variable
log = console.log.bind(console);  //A variable that holds a command, for lack of better term


// Variables
var defaultName = 'Joel';

function sayHello(name)  { //function with open curly; variable name; arguements or inputs that can be used in code
    if (name === undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}

// sayHello();
// sayHello('fish');

// console.log(global);
// global.console.log('Hello');
// log('Jooooooel'); // uses new log variable

var transportationName = 'Golf';
var trasportationType = 'car';
var $cost = 'toomuch';
var _green = true;
var snake_case = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisIsOK = true;
const thisNeverChanges = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

if (true === true) {
    var ThisIsAvailableOutside = true; //this is available outside of this if because it is not a function
}

// console.log(ThisIsAvailableOutside);
// log(ThisIsAvailableOutside);


const thisCannotChange = true;
// const thisCannotChange = false;


var firstName = 'Joel';
var lastName;
log(lastName);

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = true;
var thisIsNumber = 12.34;
var thisIsString = 'Hi';
var thisIsExpression = (1 + 1);
//var thisIsInput = inputs.first_name; //Example of something coming in from backend developers

var title = "Shaun of the Dead";
var artist = "Simon Pegg and Nick Frost";
var year = '2004';
var genre = 'fantasy/action';
var isMovie = true;

// log("The title of my favorite film is: " + title);
// log("List of actors include: " + artist);
// log("Created in: " + year);
// log("Of the genre: " + genre);
// log("Is this a joke or is it really a movie?: " + isMovie);

var verb = 'ran';
var sentence = 'Flying by the tower, I ' + verb + ' to safety';
log(sentence);

var verb = 1;
var sentence = 12 + verb + 12;
log(sentence);

var verb = '1';
var sentence = 12 + Number(verb) + 12;
log(sentence);

var verb = 'fourty two';
var sentence = 12 + Number(verb) + 12; //NaN is output because not a number
log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to safety`; // string interpolation. use ticks `` to surround all text with ${variable}
log(sentence);

var on = true;
var ternary = (on ? 'The light is on.' : 'The light is off.');
console.log(ternary);
