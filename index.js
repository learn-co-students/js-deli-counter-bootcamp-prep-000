var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine.shift()}.` ;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length > 0 ){
    var newLine = [];
    for (let i =0; i < line.length; i++){
      newLine.push(`${i + 1}. ${line[i]}`);
    }
    // ["1.Bob", "2.Ana" ].join(" - ")
    // "1.Bob - 2.Ana"
    return`The line is currently: ${newLine.join(", ")}`;
  }else{
    return "The line is currently empty.";
  }
}
