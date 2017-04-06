

function takeANumber(katzDeliLine, name){
  if(katzDeliLine.length == 0){
    katzDeliLine[0] = name;
  }else{
    katzDeliLine.push(name);
  }
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(line){

  if(line.length === 0){
    return "The line is currently empty."
  }
  var s = "The line is currently: "
  for(var i = 0; i < line.length; i++){
    s += `${i+1}. ${line[i]}${line.length == i+1 ? '' : ','}${line.length == i+1 ? '' : ' '}`
  }
  return s

}
