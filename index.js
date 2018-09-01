 let KatzDeliLine = [];

function takeANumber (KatzDeliLine, string) {
  let i = KatzDeliLine.length - 1;
  
  KatzDeliLine.push(string);
  
  return (`Welcome, ${string}. You are number ${KatzDeliLine.length} in line.`);
}

function nowServing(deliLine) {
  if (deliLine.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    var removePerson = deliLine.shift();
      return`Currently serving ${removePerson}`+ '.';
  }
}


function currentLine(line) {
  
  let nameAndNumber = [];
  
  if (line.length === 0){
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++) {
    nameAndNumber.push(i + 1 + `. ${line[i]}`);
      
  }return `The line is currently: ${nameAndNumber.join(", ")}`;
}

