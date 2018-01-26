var katzDeli=[];

function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ` + name + `. You are number ` + arr.length + ` in line.`;
}
function nowServing(arr) {
   if(arr.length > 0) {
     var serving = arr[0];
     arr.shift();
     return "Currently serving " + serving + ".";
   } else {
     return "There is nobody waiting to be served!";
   }
}
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
