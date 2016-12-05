var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  var name = ""

  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    name = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
}

function currentLine(katzDeliLine){
  var sentence = "The line is currently: "
  if(katzDeliLine.length>0){

    for(let i=0; i<katzDeliLine.length; i++){
      sentence = sentence + (i+1) + ". "+ katzDeliLine[i] +", " 
    }
  }else{
    return "The line is currently empty."
  }
  return sentence.substring(0, sentence.length - 2)
}