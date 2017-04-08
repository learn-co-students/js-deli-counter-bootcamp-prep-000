function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var currentPos
  currentPos = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${currentPos} in line.`
}

function nowServing(array) {
  if (array.length === 0) {
    return `There is nobody waiting to be served!`
  } else return `Currently serving ${array[0]}.`
  array.shift();
}
