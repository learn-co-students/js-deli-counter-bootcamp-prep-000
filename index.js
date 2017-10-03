function takeANumber( katzDeliLine, name ) {
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine( line ) {
  if ( line.length === 0 ) {
    return "The line is currently empty.";
  } else {
    var saysWho = `The line is currently: 1. ${line[0]}`;
    for ( var i = 1; i < line.length; i++ ) {
      saysWho += `, ${i + 1}. ${line[i]}`;
    }
    return saysWho;
  }
}
