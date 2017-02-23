var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length;
  katzDeliLine[i]=name;
  return "Welcome, " + name + ". " + "You are number " + [i+1] + " in line." ;
}

function nowServing(array){
  if (array.length === 0) return "There is nobody waiting to be served!";
  else {
    var str = array[0];
    array.shift();
    return "Currently serving " + str + ".";
  }
}

function currentLine(array){
  if (array.length === 0) return "The line is currently empty."
  else {
    var str = "The line is currently: "
    var i = 0
    for (i; i < array.length-1; i++){
      str += [i+1] + ". " + array[i] + ", ";
    }
    str += [i+1] + ". " + array[i];
    return str;
  }
}