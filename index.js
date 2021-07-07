function takeANumber(current, newName){
  let num = current.length + 1;
  current[current.length]=newName;
  let temp = "Welcome, " + newName + ". You are number " + num + " in line.";
  return temp;
}

function nowServing(katzDeliLine){
  let temp = "";
  if(katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!";
  }
  else{
    temp = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + temp + ".";
  }
}

function currentLine(current){
  let list="The line is currently: ";
  if(current[0]===undefined){
    return "The line is currently empty."
  }
  else {
    for(let i=0;i<current.length;i++){
      let num = i+1;
      if(i===0){
        list = list + num + ". " + current[i];
      }
      else{
        list = list + ", " + num + ". " + current[i];
      }
    }
    return list;
  }
  
}