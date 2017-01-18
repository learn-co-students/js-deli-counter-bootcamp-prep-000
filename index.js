var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  var message;
  if (line.length === 0) {
    message = "There is nobody waiting to be served!";
  }
  else{
    message = "Currently serving "+line[0]+".";
    line.shift();
  }
  return message;
}

function currentLine(line){
  var message = "The line is currently"; 
  if (line.length === 0) {
    message += " empty.";
  }
  else{
    var ms2 = ":";
    for(var i = 0; i < line.length; i++){
      if(i != line.length - 1){
        ms2 += ` ${i+1}. ${line[i]},`;
      }
      else{
        ms2 += ` ${i+1}. ${line[i]}`;
      }
      
    } 
    message += ms2;
  }
  return message;
}

