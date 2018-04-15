var katzDeliLine = [];

function takeANumber (array, name) {
  array.push(name);
  var pos = (array.indexOf(name)+1);
  return "Welcome, " +name+ ". You are number " +pos+ " in line.";
}

function nowServing (array) {
  if (array.length > 0) {
  	var serving = array.splice(0,1);
  	return "Currently serving " +serving+ ".";
  } else {
  	return "There is nobody waiting to be served!";
  }
}

function currentLine (array) {
  if (array.length > 0) {
    var intro = "The line is currently:";
    var combo = [];

  	for (var i = 0; i < array.length; i++) {
    	combo[i] = " " + (i+1) + ". " + array[i];
  	}
  	return intro + combo;
  } else {
    return "The line is currently empty.";
  }
}