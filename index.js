function takeANumber (line, name){
  let newLine =  line.push(name);

  return "Welcome, " + name + ". You are number " +  line.length +  " in line.";
}


function nowServing(katzDeliLine){
  return katzDeliLine(1);
  
  katzDeliLine.shift;
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  
}

