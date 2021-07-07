function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine){
  if(katzDeliLine == 0){
    return "The line is currently empty."
  } else{
    var myArr = katzDeliLine;
    var text = "The line is currently: "
    var backText = ""
    var i;
    for(i =0; 0 < myArr.length; i++){
      if(katzDeliLine.length > 1){
        backText += `${i+1}` + ". " + myArr.shift() + ", "
      } else{
      backText += `${i+1}` + ". " + myArr.shift()
      }
    }
    return text+backText
  }
}
