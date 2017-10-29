//First Task

var katzDeli = [];
var katzDeliLine = [];

function takeANumber(array, name){
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line.";

}

//Second Task

function nowServing(array){
  if (array.length === 0){
   return "There is nobody waiting to be served!"
 } else {
   var serving = array[0]
   array.shift();
   return "Currently serving " + serving + "."
 }

}



//Third Task

function currentLine(array){
    if (array.length === 0){
    return "The line is currently empty."
  } else {
      var line = []
      for( var i = 0; i < array.length; i++){
        var position = " " + (i+ 1) + ". " + array[i];
        line.push(position)
        }
          }
          return "The line is currently:" + line
        }
