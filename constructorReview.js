//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  };


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
var person = function (name, age, height, gender) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.height = height;
  obj.gender = gender;
  return obj;
};


//Create a animal array and a person array.

  //code here
var animals = [];
var persons = [];
 

//Create two instances of Animal and push those into your animal array

  //code here

animals.push(new Animal('mammal', 'tiger', 4, 'orange and black', ['gazelle', 'alive meat', 'dead meat']),
            new Animal('mammal', 'elephant', 4, 'grey', ['peanuts', 'plants']));
  
//Create two instances of person and push those into your person array.

  //code here
persons.push(person('Alex', 25, '67', 'M'),
            person('Tommy', 23, '65', 'M'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

Animal.prototype.eat = function() {
    var randomFood = function () { 
    return Math.floor(Math.random() * 4)
  };
    alert(this.name + ' ate ' + this.food[randomFood()]);
  
};



//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  No. There is no prototype for the people in persons array to reference to since it was not made with a constructor. 



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    An empty object 'this' is created. This is automatically returned. A link to the constructor's prototype is created. 
  2) What's a good way to describe the keyword 'this'
    It is whatever is left of the dot when the call is made
  3) Can a normal function which creates an object and then returns that object use the prototype?
    no. That link to the prototype is only created when the 'new' keyword is used
  4) What happens if you forget to use 'new' when calling a constructor?
    A prototype link will not be created
*/