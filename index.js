var katzDeliLine = [];

function takeANumber(katzDeliLine, person_name){
  katzDeliLine.push(person_name); //current line of people
  return `Welcome, ${person_name}.` + ` You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }else{
    var output = `The line is currently: 1. ${katzDeliLine[0]}`;

    for(var i = 1; i < katzDeliLine.length; i++) {
      output = `${output}, ${i+1}. ${katzDeliLine[i]}`;
    }
  return output;
  }

  // if (katzDeliLine.length == 0) {
  //   return "The line is currently empty."
  // }else{
  //    if (var i = 0; i < katzDeliLine.length; i++){
  //     return `The line is currently: 1. ${katzDeliLine[i-1]}` `, ${i+1}. ${katzDeliLine[i]}`
  //   }
  // }
}
