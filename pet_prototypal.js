/*Starting from scratch, create a Pet object using the prototypal or pseudoclassical class style
 Set default properties for a new Pet
 age to 1
 hunger to 10
 happiness to 100
 energy to 100
 Add the the ability to set the following properties when a new Pet is made
 name
 breed
 Add the following methods
 age -> increase age by 1 unit
 feed -> reduce hunger by number of units of food given*/

 //Prototypal Class Style

 var Pet = function(name, breed, food) {
  var obj = Object.create(Pet.prototype);
  obj.age = 1;
  obj.hunger = 10;
  obj.happiness = 100;
  obj.energy = 100;
  obj.name = name;
  obj.breed = breed;
  obj.food = food;
  return obj;
 };

 Pet.prototype.increasedAge = function() { this.age++; };
 Pet.prototype.feed = function() { this.hunger - this.food; };

 var dog = Pet('snuufy', 'germansheperd', 3);
 var cat = Pet('kitty', 'meow', 4);

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