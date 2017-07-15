var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + position + " in line."
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextinline=katzDeliLine.shift();
    return(`Currently serving ${nextinline}.`)
  } else {
    return "There is nobody waiting to be served!";
  }

};

// katzDeliLine = [Bill, Jane, Ann]
function currentLine(line) {
  var i =0;
  var message = 'The line is currently: ';
  if (line.length === 1) { // if the line length is 1
    return `The line is currently: ${[i+1]}. ${line[i]}` // return the person in line
  }
  else if (line.length >1) { // otherwise, if the line length is greater than 1, check the following:
    while (line.length >= (i+1)) { // as long as the line length is equal to or greater than the variable
      if (line.length > (i+1)){ 
        message = message + `${i+1}. ${line[i]}, `
        i++
      }
      else {
        message = message + `${i+1}. ${line[i]}`
        i++
      }
}
return message
}
  else {
    return "The line is currently empty."
  }
}
