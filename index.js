var katzDeliLine = new Array;
var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = function(katzDeliLine){
  var person =  (katzDeliLine.length > 0 ?
    `Currently serving ${katzDeliLine[0]}.` :
    "There is nobody waiting to be served!");
    katzDeliLine.shift();
    return person;
}

var currentLine = function(katzDeliLine){
  var line = 'The line is currently: ';
  if(katzDeliLine.length > 0){
    for(let i = 0; i < katzDeliLine.length; i++){
      if(i < katzDeliLine.length - 1){
        line += `${i+1}. ${katzDeliLine[i]}, `;
      }
      else{
        line += `${i+1}. ${katzDeliLine[i]}`;
      }
    }
    return line;
  }
  else{
    return "The line is currently empty."
  }
}
