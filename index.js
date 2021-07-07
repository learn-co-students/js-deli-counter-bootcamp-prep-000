function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
  }

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
      return `Currently serving ${katzDeliLine.shift()}.`
    } else {
      return 'There is nobody waiting to be served!'
    }
  }

  function currentLine(katzDeliLine) {
    var str = 'The line is currently:';
    if (katzDeliLine.length > 0) {
      for (var i = 0; i < katzDeliLine.length; i++) {
        str += ` ${[i +1]}. ${katzDeliLine[i]},`
      } return str.slice(0, -1);
    }  else {
      return 'The line is currently empty.'
    }

  }

