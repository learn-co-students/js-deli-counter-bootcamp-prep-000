function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + (array.indexOf(name)+1) + " in line.";
}

function nowServing(array) {
  if (array.length === 0) {
  return "There is nobody waiting to be served!";
  }
  
  else {
    return "Currently serving " + array.shift() + ".";
  }
}

function currentLine(array) {
  if (array.length === 0) {
  return "The line is currently empty.";
  }
  
  else {
    var newArray = array.slice(0);
    for (var i=0; i<newArray.length; i++){
      newArray[i] = (i+1) + ". " + newArray[i];
    }
    return "The line is currently: " + newArray.join(', ');
    }
  }