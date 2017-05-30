var katzDeli = [];

function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
takeANumber(katzDeli,"Steve")

function nowServing(line) {
  if (line.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    var current = line.shift()
    return `Currently serving ${current}.`
  }
}
nowServing(katzDeli)

function currentLine(line) {
  if (line.length < 1) {
    return 'The line is currently empty.'
  } else {
    var i;
    var l = `The line is currently: `;
    for (i = 0; i < line.length - 1; i++) {
      l = l + `${i + 1}. ` + line[i] + `, `;
   }
    return `${l}${i + 1}. ${line[i]}`;
  }

}
currentLine(katzDeli)
