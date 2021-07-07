var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, "+ name + ". You are number " + katzDeliLine.length +" in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length >= 1 ){
    return "Currently serving " + katzDeliLine.shift() + '.'
  }
  else{
    return "There is nobody waiting to be served!"
  }
}




function currentLine(katzDeli){
  if(katzDeli.length>=1){
    var temp=[]
    for(var i=0;i<katzDeli.length;i++){
      temp[i]=parseInt(i+1) +". "+ katzDeli[i]
      }
      return "The line is currently: "+ temp.join(", ")
  }
  else{
    return "The line is currently empty."
      }
}
