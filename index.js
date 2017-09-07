var katzDeliLine = [];

function takeANumber(newArr, newPersonName) {
  newArr.push(newPersonName);
  for (var  x = 0; x <= newArr.length; x++) {
    if (newArr[x] === newPersonName) {
      var personNumber = x + 1;
      return "Welcome, " + newPersonName + ". You are number " + personNumber + " in line.";
    }

}
}

function nowServing(newArr) {
  if (newArr.length === 0) {
      return 'There is nobody waiting to be served!';
    }
  else {
    	var first = newArr.shift();
      	return "Currently serving " + first + ".";
    }
    newArr;
}

function currentLine(newArr) {
  if (newArr.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var name = " "
    for (var x = 0; x < newArr.length; x++){
      var number = x + 1;
      var last = newArr.length;
      if (number != last) {
        name += number + ". " + newArr[x] + ", ";
      }
      else {
   	    name += number + ". " + newArr[x];
      }
    }
    return "The line is currently:" + name;
  }
}
