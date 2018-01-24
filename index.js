var katzDeliLine = [];

//Build a function that a new customer will use when entering the deli.
//The function should accept the current line of people along with the
//new person's name as parameters. The function should also return
//their position in line.

function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ` + name + `. You are number ` + arr.length + ` in line.`;
}

//Build a function that returns the first person in line and then removes that
//individual from the line. If there is nobody in line, it should return:
// "There is nobody waiting to be served"

function nowServing(arr) {
   if(arr.length > 0) {
     var serving = arr[0];
     arr.shift();
     return "Currently serving " + serving + ".";
   } else {
     return "There is nobody waiting to be served!";
   }
}

//Build a functin that returns the current line. If there is nobody in line
//it should return: "The line is currently empty"

function currentLine(arr) {
  if(arr.length > 0) {
    var currentLine = "The line is currently: ";
    var num = 1;
    for(var i = 0; i < arr.length - 1; i++) {
      currentLine = currentLine + num + ". " + arr[i] + ", ";
      num++;
    }
    currentLine = currentLine + num + ". " + arr[arr.length - 1];
    return currentLine
  } else {
    return "The line is currently empty.";
  }
}
