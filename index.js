function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length > 1) {
    return "Currently serving " + katsDeliLine.shift() + ".";
    } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  if (array.length > 1) {
    let i = 0
    var array2 = []
    while (i < array.length) {
      array2.push(" " + [i+1] + ". " + array[i])
      i++
    }
    return "The line is currently:" + array2
    } else {
  return "The line is currently empty."
  }
}
