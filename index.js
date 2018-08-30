//anruiz23

function takeANumber(line,newPerson){
  var num = line.length+1
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${num} in line.`;
}

function nowServing(currLine){
  var first;
  if(currLine.length > 0){
    first = 'Currently serving '+currLine.shift()+'.';
  }else{
    first = "There is nobody waiting to be served!";
  }
  return first;
}

function currentLine(line){
  var desc = "The line is currently:";
  var i = 0;
  if(line.length > 0){
    while(i < line.length){
      desc=desc+` ${i+1}. ${line[i]}`;
      if(i!=line.length-1){
        desc=desc+','
      }
      i++;
    }
  }else{
    desc="The line is currently empty.";
  }
  return desc;
  
}