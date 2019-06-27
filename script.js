function Pet (name, species, color){
  this.name = name;
  this.species = species;
  this.color = color;
  this.goodboye = true;

}

function Owner (name){
  this.name = name;
  this.goodboye = true;
}

Pet.prototype.sayHello = function(){
  if (this.species === "snake") {
      console.log("sssssssss");
  }else if (this.species === "cat") {
      console.log("meow!");
  }else if (this.species === "dog") {
      console.log("woof woof!");
  }else {
      console.log("Uhhhh hello?");
  }
}

function Kennel (looksnice, ischeap){
  this.looksnice = looksnice;
  this.ischeap = ischeap;
  this.yard = [];
}

Kennel.prototype.boardPet = function(pet){
  this.yard.push(pet);
}

Kennel.prototype.giveMeInfo = function (){
  this.yard.forEach(function(x){
    console.log(x.species);
  })
}



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////



var E = new Pet ("Ellie", "cat", "gray");
var F = new Pet ("Frederic", "snake", "brown spotted");
var J = new Pet ("Juneau", "dog", "brown");
var N = new Pet ("Napoleon", "miniature horse", "white");

var Hugh = new Owner("Hugh");

var hitPawz = new Kennel (false, true);

hitPawz.boardPet(E);
hitPawz.boardPet(F);
hitPawz.boardPet(J);
hitPawz.boardPet(N);


var lawnMower = "brrm";

// THIS does a lot of the same stuff as the prototype, but it just works on
// an object instead of being an inherent trait of the object
function punish (pet){
    pet.goodboye = false;

}
