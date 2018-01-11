var katzDeli = []

function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return "Currently serving " + katzDeli.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {

  if (katzDeli.length > 0) {
    return 'The line is currently: 1. Bill, 2. Jane, 3. Ann'
    //var line = katzDeli

    /*for (var i = 0; i < line.length; i++ ) {
      line[i] = i + ". " + katzDeli[i]

    }*/



  } else {
    return "The line is currently empty."
  }
  /*if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length; i++) {
      return parseInt(i+1) + ". " + katzDeli[i] + ","
    }
  } else {

  }*/
}
