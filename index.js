function takeANumber(array,name){
  array.push(name);
  var arrayLength=array.length;
  return "Welcome, " + name +  ". You are number " + arrayLength + " in line.";
}

function nowServing(array){
  var serving = "";
  if (array.length==0){
    return "There is nobody waiting to be served!"
  }else{
    serving =  "Currently serving " + array[0] + ".";
    array.shift();
    return serving;
  }
}

function currentLine(line){
  var i=0;
  var counter;
  var lineMembers = "The line is currently: ";
  var arrayLength=line.length;
  if (arrayLength==0){
    return "The line is currently empty."
  }else{
    for(i=0;i<arrayLength;i++){
      counter = i +1;
      lineMembers = lineMembers + counter + ". " + line[i];
      if(counter<arrayLength){
        lineMembers = lineMembers + ", ";
      }
    }
    return lineMembers;
  }
}
