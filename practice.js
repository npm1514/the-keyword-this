//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
     // It defines the object within a method within the same object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //It must be within a method
      //It must be within the object it is referring to
      //It must be called in dot notation
      //It is only used to descibe a key within the object

  // 3) What is the difference between call and apply?

      //Answer
      //to call is to catalize a function
      //to apply is to place a function into another element

  // 4) What does .bind do?

      //Answer
      //.bind is a prototype function using the this keyword to call an object's keys



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username:"Nick",
      email: "npm1514@gmail.com",
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

Car.prototype.moveCar = function(move) {
  this.move = move;
  return this.move + 10;
}

prius.moveCar(5); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(10); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here

  Car.prototype.findYear = getYear;
  prius.findYear();
  mustang.findYear();



//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com',
  getMyUsername: function() {
    console.log(this.username);
  }
};

setTimeout(myUser.getMyUsername(), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //getMyUsername

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
