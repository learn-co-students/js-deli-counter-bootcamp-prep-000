var katzDeli=[];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else {
    return "There is nobody waiting to be served!";
  }

}

function currentLine(line){
  var newline="The line is currently:";
  if (!line.length){
    return "The line is currently empty."
  } else {
    for (let i=0;i<line.length; i++){
      newline=newline+` ${i+1}.`+` ${line[i]}`;
      if(i<line.length-1){
        newline=newline+`,`;
      }
      }
      return newline;
    }
}
