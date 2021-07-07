var katzDeliLine = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${position +++1} in line.`;
}

function nowServing(katzDeliLine){
  if( katzDeliLine.length > 0){
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  else{
    let i=0;
    while(i<katzDeliLine.length){
      katzDeliLine[i]= " "+[i+++1]+". "+katzDeliLine[i-1];
    }
    return `The line is currently:${katzDeliLine}`;

  }
}
