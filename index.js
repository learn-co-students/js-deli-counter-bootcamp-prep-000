function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.length
  return(`Welcome, ${name}. You are number ${number} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return(`Currently serving ${current}.`)
  } else { 
    return('There is nobody waiting to be served!')
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      var num = i + 1;
      var name = katzDeliLine[i];
      line.push(` ${num}. ${name}`)
      }
      return(`The line is currently:${line}`)
    } else {
      return ('The line is currently empty.')
    }
}