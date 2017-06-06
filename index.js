function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if(array.length > 0) {
    var name = array[0];
    array.shift();
    return `Currently serving ${name}.`
  }
  else
    return 'There is nobody waiting to be served!';
}

function currentLine(line) {
  var current = 'The line is currently';
  if(line.length == 0)
    return current + ' empty.';
  else
    current += ':';
  var len = line.length;
  for(var i = 0; i < len; i++) {
    if(i === len-1)
      current += ` ${i+1}. ${line[i]}`
    else
    current += ` ${i+1}. ${line[i]},`
  }
  return current;
}
