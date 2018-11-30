

function takeANumber(line, name){
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
};

function nowServing(katzDeliLine){
      if (katzDeliLine.length < 1) {
      return "There is nobody waiting to be served!";
      }
      else {
        return `Currently serving ${katzDeliLine.shift()}.`;
        }
};

// function currentLine(line){
//   if (line.length < 1) {
//     return "The line is currently empty.";
//   }
//   else {
//     var lineCurrently = [];
//     for (var i = 0; i < line.length; i++) {
//     lineCurrently.push(`${i+1}. ${line[i]}`);
//     return `The line is currently: ${lineCurrently.join(", ")}.`;
//   }
// }
// }

function currentLine(line) {
  var lineCurrently = []
  if (line.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    for (var i = 0; i < line.length; i++) {
      lineCurrently.push(` ${i+1}. ${line[i]}`)
    }
  return (`The line is currently:${lineCurrently}`)
  }
}
