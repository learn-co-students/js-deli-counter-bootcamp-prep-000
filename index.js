function takeANumber (line,name) {
  let number = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing (line) {
  let person;
  if ( line.length >=1 ) {
    person=line[0];
    line.shift();
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!"
  } 
}

function currentLine (line) {
  var n=0;
  while (n < line.length) {
  if (line === []) {
  return `The line is currently empty.` 
  } else {
  return `The line is currently: ${line}.`
      }
    n++;
  }
}

function currentLine (line) {
  //var n = 0;
  if (line.length === 0) {
    return `The line is currently empty.`
  } else { 
    var sentence = "The line is currently: "
    var numbers = "";
    for  (let n = 0; n < line.length; n++) {
    numbers += (n+1)+". "+line[n]+", ";
      } let completeSentence = sentence + numbers;
      return completeSentence.slice(0,completeSentence.length-2);
    }
  }
