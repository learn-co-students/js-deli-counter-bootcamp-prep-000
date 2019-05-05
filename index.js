
function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);

  console.log(katzDeliLine);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstName = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + firstName +".";
  }
}


function currentLine(line) {
  var txt = "The line is currently: ";
  if (line.length === 0) {
    txt = "The line is currently empty."
  } else
    { for (var i = 0; i < line.length - 1; i++) {
    txt += i+1 + ". " + line[i] + ", " ;
    }
  txt += line.length + ". " + line[line.length-1]};
  return txt;
  }
