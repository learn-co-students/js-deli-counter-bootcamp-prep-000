var katzDeli = [];

function takeANumber(katzDeliLine, newname){
  //console.log(katzDeliLine);
  katzDeliLine.push(newname);
  return "Welcome, " + newname + ". You are number " + [katzDeliLine.length] + " in line.";
}

function nowServing(katzDeliLine){
//console.log(katzDeliLine);
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!";
  } else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length < 1){
    return "The line is currently empty."
  } else {
    var linelength = katzDeliLine.length;
    var newarray = []
    for (let i = 0; i < linelength; i++){
      newarray[i] = " "+ (i+1) + ". " + katzDeliLine[i];
    }
    newarray[linelength-1] = " " + linelength + ". " + katzDeliLine[linelength-1]
  }
  return "The line is currently:" + newarray;
  
}