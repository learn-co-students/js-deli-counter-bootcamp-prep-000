function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.';
}

//shift removes the first element from an array and returns that removed element.

function nowServing(katzDeliLine) {
  var name;
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  name = katzDeliLine.shift();
  return "Currently serving " + name + ".";
}

function currentLine(katzDeliLine) {
  var position = [];
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  
  for(var i = 0; i < katzDeliLine.length; i++) {
    position.push(` ${i + 1}. ${katzDeliLine[i]}`);
  }
  return 'The line is currently:' + position;
}