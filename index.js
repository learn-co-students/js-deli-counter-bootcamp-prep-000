var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.';
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length ===0){return 'There is nobody waiting to be served!'}
  else{
    var currentServing = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving '+currentServing+'.';
  }
}


/*Build a function currentLine that returns the current line.
For example, if katzDeliLine is currently ["Ada", "Grace"],
currentLine(katzDeliLine) would return "The line is currently:
1. Ada 2. Grace". If there is nobody in line, it should return
"The line is currently empty."*/
function currentLine(katzDeliLine){
  var announcement = "The line is currently"
  if(katzDeliLine.length ===0){return announcement+' empty.'}
  else{
    announcement = announcement + ': ';
    for(let i=0;i<katzDeliLine.length-1;i++){
      announcement = announcement+(i+1)+'. '+katzDeliLine[i]+', ';
    }
    announcement = announcement + katzDeliLine.length +'. '+katzDeliLine[katzDeliLine.length-1];
    return announcement;
  }
}
