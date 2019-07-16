function takeANumber(katzDeli,name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
  
}

function  nowServing(katzDeliLine){
  var str = "";
  if(katzDeliLine.length > 0){
    str = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }else if(katzDeliLine.length === 0){
  str = "There is nobody waiting to be served!";
  }
 return str;
}

function currentLine(line) {
  for(var i =0; i < line.length; i++){
    line.push(''+[i+1]+'.' + line[i]);
  }if(line.length === 0){
    return "The line is currently empty.";
  }else if(line.length > 0){
    return (`The line is currently:` + line);
    
  }
}