var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    let serving = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.splice(0,1);
    return serving;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  let line = "The line is currently: ";
  if(katzDeliLine.length > 0){
    for(let i = 0; i<katzDeliLine.length; i++){
      if(i<katzDeliLine.length-1){
        line += (i+1 + ". " + katzDeliLine[i] + ", ");
      }
      else {
        line += (i+1 + ". " + katzDeliLine[i]);
      }
    }  
  }
  else {
    line = "The line is currently empty.";
  }
  return line;
}



//takeANumber(katzDeliLine, "a");
//takeANumber(katzDeliLine, "b");
//takeANumber(katzDeliLine, "c");
//takeANumber(katzDeliLine, "d");
//takeANumber(katzDeliLine, "e");
//takeANumber(katzDeliLine, "f");
//takeANumber(katzDeliLine, "g");
//takeANumber(katzDeliLine, "h");
//console.log(takeANumber(katzDeliLine, "j"));
//console.log(nowServing(katzDeliLine));
//console.log(currentLine(katzDeliLine));