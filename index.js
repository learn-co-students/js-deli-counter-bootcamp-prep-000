const katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.length - 1;
  return `Welcome, ${name}. You are number ${parseInt(placeInLine) + 1} in line.`;
  };

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine.shift(0);
    return `Currently serving ${firstPerson}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length < 1){
    return "The line is currently empty."
  } else {
    const lineMembers = []
      for ( let i = 0; i < line.length; i++) {
        lineMembers.push(`${i + 1}. ${line[i]}`)
        }
   return `The line is currently: ${lineMembers.join(', ')}`
  }

}
