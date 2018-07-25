var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var pos = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${pos} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return("There is nobody waiting to be served!");
  }
  else{
    var first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return("The line is currently empty.");
  }
  else{
    var str = "The line is currently:";
    for(var i = 0; i < katzDeliLine.length - 1; i++){
      str += ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    str += ` ${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`;
    return str;
  }
}