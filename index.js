
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;

  }

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  else{
    var sentence = "The line is currently: ";
    for(var i = 1; i < katzDeliLine.length; i++){
      sentence += `${i}. ${katzDeliLine[i-1]}, `;
    }
    sentence += `${i}. ${katzDeliLine[i-1]}`;
    return sentence;
  }
}
