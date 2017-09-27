function takeANumber(katzDeliLine,name){
  for (var i=0;i<katzDeliLine.length;i++){
    if(katzDeliLine[i]==name){
      return i+1
    }
  }
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length==0) {
    return "There is nobody waiting to be served!"
  } else{
  return katzDeliLine.shift()
}
}
function currentLine(line){
  if (line.length==0){
    return "The line is currently empty."
  } else{
    var str = "The line is currently:"
    for (var i=1;i<=line.length;i++){
      str+=` ${i}. ${line[i]},`
    }
    return str.slice(0,str.length-1)
  }
}
