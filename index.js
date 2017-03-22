var katzDeli1 = [];
let i = 0;
var katzDeliLine = [];

function takeANumber (katzDeliLine, katzDeli){
katzDeliLine.push (katzDeli);
  while (katzDeliLine.length>i){
      i++;
  }
   return `Welcome, ${katzDeli}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function(katzDeliLine){
  if (!katzDeliLine.length){
    return 'There is nobody waiting to be served!';
}
  else{ let person = katzDeliLine.shift ();
  return `Currently serving ${person}.`;
  }
}
var currentLine = function (katzDeliLine){
  if (!katzDeliLine.length){
    return 'The line is currently empty.'
  } else {
    var line = [];
    for (let i=0; i < katzDeliLine.length; i++){
      line.push(i+1 + '. ' + katzDeliLine[i])
    }

    return `The line is currently: ${line.join(', ')}`
  }
}
