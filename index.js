function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var atCounter = katzDeliLine.shift();
    return `Currently serving ${atCounter}.`;
  }
}

function currentLine(line) {
  var update = "The line is currently: ";
  
  if(line.length === 0) {
    return "The line is currently empty.";
  } else {
    for(let i = 0; i < line.length; i++){
      var person = line[i];
      if(i === 0) {
        update += (i + 1) +". "+ person;
      } else {
        update += ", " + (i + 1) +". "+ person;
      }
    }
  }
  return update;
}