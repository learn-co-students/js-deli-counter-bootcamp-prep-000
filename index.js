function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift()
  return (`Currently serving ${nowServing}.`)
  } else {
    return `There is nobody waiting to be served!`
  }
  }
  

  function currentLine(people){
  var line = [];
    for (let i = 0; i < people.length; i++) {
    line.push(" " + [i + 1] + "." + " " + people[i])
  }
  if (people.length === 0) {
  return "The line is currently empty."
    
  } else {
    return ("The line is currently:" + line)
  }
  }