var katzDeli =[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return katzDeliLine
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number 1 in line.`
}

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, name){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

var line = 0;

function currentLine(katzDeli){
  if(katzDeli.length === 0){
    return "The line is currently empty."
  } else{
    var response = 'The line is currently:'
     for (var i=0; i<katzDeli.length-1; i++){
       response += " " + Number(i+1) + ". " + katzDeli[i] + ","
          }
    response += " " + katzDeli.length + ". " + katzDeli[katzDeli.length-1]
     return response;
   }
}
