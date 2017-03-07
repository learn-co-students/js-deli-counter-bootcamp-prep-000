var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var a = katzDeliLine.length;
  katzDeliLine[a] = name;
  return "Welcome, " + name + ". " + "You are number " + [a + 1] + " in line." ;
}

function nowServing(array) {
  if (array.length === 0) 
  return "There is nobody waiting to be served!";
  else {
    var string = array[0];
    array.shift();
    return "Currently serving " + string + ".";
  }
}

function currentLine(array) {
  if (array.length === 0) 
  return "The line is currently empty.";
  else {
    var string = "The line is currently: "
    var a = 0
    for (a; a < array.length-1; a++){
      string += [a+1] + ". " + array[a] + ", ";
    }
    string += [a+1] + ". " + array[a];
    return string;
  }
}