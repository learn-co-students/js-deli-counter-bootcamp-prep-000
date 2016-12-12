function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


  //return the first person in line and then remove that individual from the line. 
  //If there is nobody in line, it should return "There is nobody waiting to be served!"

  function nowServing(katzDeliLine){
    if(!katzDeliLine.length){
      return "There is nobody waiting to be served!";
    }
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
  const numbersAndNames = [];

    for (let i = 0, l = line.length; i < l; i++) {
      numbersAndNames.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${numbersAndNames.join(', ')}`
}
