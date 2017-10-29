function takeANumber(katzDeliLine, name){
    let positionInLine = katzDeliLine.length + 1; //first instance the length = 0

    katzDeliLine = katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${positionInLine} in line.`
}

function nowServing(deliLine){
  if (deliLine.length !== 0){
    let firstPerson = deliLine.shift();
    return `Currently serving ${firstPerson}.`;  //first person in line has index = 0
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  for (let i = 0; i < line.length; i++){
    if (i===0){
      line[i] = `${i+1}. ` + line[i]; //first person is index plus 1
    } else {
      line[i] = ` ${i+1}. ` + line[i];
    }
  };

  if (line.length > 0){
    return `The line is currently: ${line}`
  } else {
    return "The line is currently empty."
  }
}
