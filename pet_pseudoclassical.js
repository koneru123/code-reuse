/*Advanced Content
 Add the following methods
 play -> accept unit of time and increase happiness by number of units of time until zero energy
 Age the pet once during play
 nap -> accept unit of time and increase energy by number of units of time until 100 energy
 Age the pet for every cycle of 100 units of time used by playing or napping.
 Create a traits property as an array of objects (initially empty)

  traits: [
            { eyeColor: "purple"},
            { hairLength: "long" },
            ... etc
          ]
 Create a method to add traits to a pet.

 Create the ability for your pet to create a child
 Have the pet inherit at least 1 trait from the parent.*/

//Pseudoclassical class style

var Pet = function(name, breed, food) {
  this.age = 1;
  this.hunger = 10;
  this.happiness = 100;
  this.energy = 100;
  this.name = name;
  this.breed = breed;
  this.food = food;
}

Pet.prototype.increasedAge = function() { this.age++; };
Pet.prototype.feed = function() { this.hunger - this.food; };

var dog = Pet('snuufy', 'germansheperd', 3);
var cat = Pet('kitty', 'meow', 4);