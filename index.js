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

function currentLine(array) {
var newArr = [];
  if (array.length === 0) {
    return "The line is currently empty.";
  }
//body of string built outside as not changing in the for loop
  var string = "The line is currently: ";

  for (var i = 0; i < array.length; i++) {

    var currentIndex = i + 1;

     if (i < array.length - 1) {
       var stringTwo = array[i] + ", ";
     }
     else {
       stringTwo = array[i];
     }
    //redefining string as adding the names and no in line each time
    string = string + currentIndex + ". " + stringTwo;
  }
return string;
}

//var string = "The line is currently: " + [i] + ". " + array[i];
//newArr.push(string + [i] + ". " + array[i]);
//return string;
