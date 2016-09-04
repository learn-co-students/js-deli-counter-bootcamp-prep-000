var katzDeliLine = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  console.log('katzDeliLine ' + katzDeliLine);
  if(katzDeliLine.length!=0){
    var perServe = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    console.log('katzDeliLine ' + katzDeliLine);
    return perServe
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  console.log('line ' + line);
  if(line.length!=0){
    // var perServe = `Currently serving ${line[0]}.`;
    // line.shift();
    var resp = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      if(i == line.length-1){
          resp = resp + `${i+1}. ${line[i]}`;
      }else{
          resp = resp + `${i+1}. ${line[i]}, `;
      }
    }
    return resp
  }else{
    return "The line is currently empty."
  }
}
