var katzDeli =[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    }
    while(katzDeliLine.length > 0){
      var customer = katzDeliLine[0];
      katzDeliLine.shift();
      return "Currently serving " + customer + ".";

    }

  }

  function currentLine(katzDeliLine){
    if(katzDeliLine.length === 0){
      return "The line is currently empty."

    }
    for(var i = 0; i < katzDeliLine.length; i++){
      katzDeliLine[i] = " " + (i + 1) + ". " + katzDeliLine[i];
    }
      return "The line is currently:" + katzDeliLine;
  }
