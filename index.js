katzDeliLine = [];
deliLine = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");
takeANumber(katzDeliLine, deliLine[0]);
takeANumber(katzDeliLine, deliLine[1]);
takeANumber(katzDeliLine, deliLine[2]);

function nowServing(position) {
  for (let i = 0; i < (position.length + 1); i++) {
    if (position.length > 0) {
     return 'Currently serving ' + position.shift() + '.';
    } else {
       return (`There is nobody waiting to be served!`)
    }
  }
}
nowServing(katzDeliLine)

function currentLine(katzDeliLine) {
  var queue = []
  for (let n = 0; n < katzDeliLine.length; n++)
    queue = queue.concat(` ${n+1}. ${katzDeliLine[n]}`)
    if (katzDeliLine.length === 0) {
      return ('The line is currently empty.')
    }else {
      return ('The line is currently:' +queue)
    }
}
currentLine(["Bill", "Jane", "Ann"])
