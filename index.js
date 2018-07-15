

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var answer = "Welcome, Ada. You are number 1 in line."
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length.toString() + ' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var name = katzDeliLine.shift();
    return 'Currently serving ' + name + '.';
  } else return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var answer = 'The line is currently: ';
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        answer = answer + [i+1].toString() + ". " + katzDeliLine[i];
      } else {
        answer = answer + ', ' + [i+1].toString() + ". " + katzDeliLine[i];
      }
    }
    return answer;
  } else return "The line is currently empty."
}
