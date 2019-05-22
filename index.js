function takeANumber(lineArray, newName) {
  lineArray.push(newName);
  return `Welcome, ${newName}. You are number ${lineArray.length} in line.`
}

function nowServing(lineArray) {
  if(lineArray.length > 0) {
    var person = lineArray[0];
    lineArray.shift();
    return `Currently serving ${person}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(lineArray) {
  if(lineArray.length > 0) {
    return "The line is currently: " + lineArray
                                            .map((currentVal,index) => `${index + 1}. ${currentVal}`)
                                            .join(", ");
    /*var newLine = [];
    for(var i = 0; i < lineArray.length; i++) {
      newLine.push(`${i + 1}. ${lineArray[i]}`)
    }
    return `The line is currently: ${newLine.join(", ")}`;*/
  } else {
    return 'The line is currently empty.';
  }
}