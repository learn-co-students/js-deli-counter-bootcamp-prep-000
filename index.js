function takeANumber(array, name) {
  var string = "";
  //var currentIndex = parseInt(array.length);

array.push(name);
var currentIndex = parseInt(array.length);
string = "Welcome, " + name + ". You are number " + currentIndex + " in line.";
  return string;
}

  function nowServing(array) {
     if (array.length > 0) {
     var string = "Currently serving " + array[0] + ".";
     array.shift();
     return string;
   }

  if(array.length === 0) {
    return "There is nobody waiting to be served!";
  }

}

//better way than below

function currentLine(array) {

  if (array.length === 0) {
    return "The line is currently empty.";
  }

//body of string built outside as not changing in the for loop
  var output = "The line is currently: ";

//build the string but will have to take care of the period at the end
  for (var i = 0; i < array.length; i++) {

   output += i + 1 + ". " + array[i] + ", ";

}
//last one is array.length - 2 as have a character afterwards for array.length - 1
  output = output.substring(0, output.length - 2);
  return output;
}


//function currentLine(array) {
//var newArr = [];
  //if (array.length === 0) {
  //  return "The line is currently empty.";
  //}
//<<<<<<< HEAD
//body of string built outside as not changing in the for loop
  //var string = "The line is currently: ";

  //for (var i = 0; i < array.length; i++) {

    //var currentIndex = i + 1;

     //if (i < array.length - 1) {
      //var stringTwo = array[i] + ", ";
    //}
     //else {
       //stringTwo = array[i];
     //}
    //redefining string as adding the names and no in line each time
    //string = string + currentIndex + ". " + stringTwo;
    //string = string + array.join("i, , ");
  //}
//return string;
//}
