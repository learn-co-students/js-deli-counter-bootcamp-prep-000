var katzDeli = [];

function takeANumber(katzDeliLine,name){ //katzDeliLine= current line array?
  katzDeliLine.push(name)
  var number =katzDeliLine.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var katzDeliCopy = katzDeliLine.slice(0)
    katzDeliLine.shift(1)
    return `Currently serving ${katzDeliCopy[0]}.`
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length>0){
    var string = "The line is currently: "//1. Ada, 2. Grace"
    for(var i=0;i<katzDeliLine.length;i++){
      string = string + (i>0 ? `, ${i+1}. ${katzDeliLine[i]}` : `${i+1}. ${katzDeliLine[i]}`)
    }
    return string
  }else{
    return "The line is currently empty."
  }

}
