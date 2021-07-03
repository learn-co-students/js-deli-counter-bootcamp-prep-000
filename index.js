var katzDeli = [];

function takeANumber(katzDeliLine, newPerson){
  
  katzDeliLine.push(newPerson);
  var index = katzDeliLine.length;
   return "Welcome, "+newPerson+". You are number " +index+ " in line.";
}

function nowServing(katzDeliLine) {
  var name=katzDeliLine.shift();
  if(katzDeliLine.length>0) {
    return  'Currently serving ' +name+'.';
  }else{
    return "There is nobody waiting to be served!";
  }
}  

function currentLine(katzDeli) {
  var line = [];
  for (let i = 0; i < katzDeli.length; i++) {
   line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
 return `The line is currently:` + line;
}