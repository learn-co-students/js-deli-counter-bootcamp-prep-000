
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return position;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return `The line is currently empty.`;
  }else{
    var string = "The line is currently:";
    for (var i=1; i<=katzDeliLine.length; i++){
      string = `${string} ${i}. ${katzDeliLine[i-1]}`;
      if (i<katzDeliLine.length){
        string = string + ","
      }
    }
    return string;
  }
}
