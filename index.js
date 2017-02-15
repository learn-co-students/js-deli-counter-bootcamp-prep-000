function takeANumber(deli, person){
  var nextPosition = deli.length + 1;
  console.log("Welcome, " + person + ".You are number " + nextPosition + " in line.");
    deli.push(person);
}
function nowServing(deli){
  if (deli.length === 0){
      console.log("There is nobody waiting to be served!");
    }
    else {
      var person = deli.shift();
      console.log("current serving "+ person +".");
    }
  }
  function line(deli){
    if(deli.length === 0){
      console.log("the line is currently empty.");
    }else {
      var queue = [];
      deli.forEach(function(person, index){
        queue.push((index + 1).toString() + ". " + person);
      });
      console.log("The line is currently: " + queue.join(", "));
   }


