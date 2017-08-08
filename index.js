

function takeANumber(deliLine, name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`;
}



function nowServing(deliLine){
  if(!deliLine.length){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${deliLine.shift()}.`
  }
}

function currentLine(deliLine){
  if(!deliLine.length){
    return "The line is currently empty."
  } else {

    var namesAndNumbers = [];

    for(var i = 0, people = deliLine.length; i < people; i++){
      namesAndNumbers.push(`${i + 1}. ${deliLine[i]}`);
    }

    return `The line is currently: ${namesAndNumbers.join(', ')}`;


  }
}
