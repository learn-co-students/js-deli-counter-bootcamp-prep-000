function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; 
}
function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!";
  }
  var first = line[0];
  line.shift();
  return `Currently serving ${first}.`;
}
function currentLine(line){
  var str = "The line is currently:";
  if(line.length == 0){
    return "The line is currently empty.";
  }
  for(var i = 0; i < line.length; i++){
    if(i==line.length-1){
      str += ` ${i + 1}. ${line[i]}`;
    } else {
      str += ` ${i + 1}. ${line[i]},`;
    }
  }
  return str;
}

