var katzDeli = [];

function takeANumber(line, newName){
  line.push(newName);
  return "Welcome, " + newName + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
}



function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
 	var str = "The line is currently: ";
 	var list = "";

  for (var i=1; i <= line.length; i++) {
	var num =  i + ". " + line[i-1] + ", ";
	list += num;
	  }
  	return str + list.slice(0,-2);
  }
}
