var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

  var last = function(arr) {
  	return arr[arr.length - 1];
  };

  alert(last(threeItems));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

  for (var i = 0; i < evenArray.length; i++) {
  	if (evenArray[i] % 2 !== 0) {
  		evenArray.splice(i, 1);
  		i--;
  	}
  }

  evenArray;


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

 var compareNums = function(array) {
	var myRandomNum = getRandomArbitrary();
	console.log(myRandomNum); // not necessary but makes it easy to compare
	console.log(array); 
	if (array.indexOf(myRandomNum) !== -1) {
			alert('True');
		} else {
			alert('false');	
		}
 };

 compareNums(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

  second = first.slice(0, 5);
  second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
 //code here

var sentence = "Dev Mountain is the best"

var longest = function(sentence) {
	var array = sentence.split(" "); // split up sentence into separate elements
	var word = "";
	for (var i = 0; i < array.length; i++) {
		if (array[i].length > word.length) {
			word = array[i];
		}
	}
	return word;
};

longest(sentence);

 


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

  var capitalize = function(sentence) {
  	var newArray = sentence.split(" ");
  	for (var i = 0; i < newArray.length; i++) {
		newArray[i] = newArray[i][0].toUpperCase() + newArray[i].substr(1);	
		}
	return newArray.join(" ");
  };


capitalize(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(string) {
	var vowelCount = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || 
			string.charAt(i) === 'u') {
			vowelCount++;
		}
	}
	return vowelCount;
};

vowelCounter(theOdyssey);

			


