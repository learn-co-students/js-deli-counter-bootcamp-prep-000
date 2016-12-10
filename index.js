

function takeANumber (katzDeliLine, personName) {

  katzDeliLine.push(personName)

  var position = 0;

  var len = katzDeliLine.length;

  for (let i =0; i<len; i++ ) {
    if (personName === katzDeliLine[i])
      position = i+1;
  }

  var give = `Welcome, ${personName}. You are number ${position} in line.`;
  return give;
}


function nowServing (line) {

  var name = line[0];
//  line = line.shift();

  if (line.length===0) {
    return "There is nobody waiting to be served!";
  }

  else{
    line = line.shift();
    return `Currently serving ${name}.`;
  }
}


function currentLine(line) {

  var output= "The line is currently:";
  if (line.length===0) {
    return "The line is currently empty.";
  }
  else {
    for (let i=0; i<line.length; i++) {
      output+=` ${i+1}. ${line[i]}`;
      if (i+1<line.length)
        output+=","; 
  }
  return output;
}
}
