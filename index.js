var katzDeli = new Array();

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var numberInline = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${numberInline} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var currentCustomer = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return currentCustomer;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var line = "The line is currently:";
    for(var i = 0; i <= katzDeliLine.length -1; i++){
      if(i===0){
        line += ` ${i+1}. ${katzDeliLine[i]}`
      }else{
        line +=  `, ${i+1}. ${katzDeliLine[i]}`
      }
    }
    return line;
  } else{
    return"The line is currently empty.";
  }
}
