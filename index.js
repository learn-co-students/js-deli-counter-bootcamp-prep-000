function takeANumber (katzDeliLine, name){
  
  var place = katzDeliLine.length+1
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + place + " in line."

}

function nowServing (katzDeliLine){
 if (katzDeliLine.length > 0){
   var report = `Currently serving ${katzDeliLine[0]}.`;
   katzDeliLine.shift();
   return report;
 } else {
   return "There is nobody waiting to be served!"
 }
}

function currentLine(katzDeli){
  var line = [];
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  }
  else{
    for (let i = 0; i < katzDeli.length; i++){
      line.push(' '+[i+1]+'. ' + katzDeli[i])
    }
    return('The line is currently:' + line)
  }
}