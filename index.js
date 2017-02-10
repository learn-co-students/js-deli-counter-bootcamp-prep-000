var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
   katzDeliLine.push(name);
   return `Welcome, ${name}. You are number 1 in line.`
  } else {
    katzDeliLine.push(name);
    var position = katzDeliLine.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${position} in line.`
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
}
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  } else {
    var people = []
    for (var i = 0; i < line.length; i++) {
      people.push(`${i+1}. ${line[i]}`);
    }
    var beforeColon = `The line is currently: `
    for (var i = 0; i < (line.length - 1); i++) {
      var beforeColon = beforeColon + people[i] + `, `;
    }
    var beforeColon = beforeColon + people[(people.length-1)]
    return beforeColon
  }
}
