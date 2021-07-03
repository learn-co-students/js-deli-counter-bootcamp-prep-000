// var katzDeli = [];

// var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.shift();
    return  `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
  return katzDeliLine;
}

var currentLine = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var phrase = [];
    let i = 0;
      while (i < katzDeliLine.length) {
          phrase.push(` ${i + 1}. ${katzDeliLine[i]}`);
        i++;
        }
      return `The line is currently:${phrase}`;
    }
  return "The line is currently empty.";
}

// } else {
//   phrase.push(`${i + 1}. ${katzDeliLine[i]}`)
//   i++
// }
