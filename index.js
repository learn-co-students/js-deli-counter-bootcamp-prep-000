
function takeANumber(line, newPerson){
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if( katzDeliLine.length !== 0 ){
    let temp = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return `Currently serving ${temp}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if(line.length !== 0 ){
    let string = "The line is currently: ";
    for(let i=0;i<line.length;i++){
      string = string + `${i+1}. ${line[i]}`;
      
      if(i != line.length-1){
        string += ", "
      }
    }
    return string;
  }else{
    return "The line is currently empty.";
  }
}