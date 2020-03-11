function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var result=[]
  if(line.length > 0){
    for(var i=0;i<line.length;i++){
      result += (i+1) + ". " + line[i] + ", "
    }
    result = result.slice(0,result.length - 2)
    return "The line is currently: " + result;
  }else{
   return  "The line is currently empty."
  }
}