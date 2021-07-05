var katzDeliLine=[]
function takeANumber(katzDeliLine,name){
  var position=(katzDeliLine.length +1)
  katzDeliLine.push(name)
  var response= "Welcome, "+name+". You are number "+position+" in line.";
  return response
}

function nowServing(katzDeliLine){
 if(0===katzDeliLine.length) {
  return "There is nobody waiting to be served!"
}
  else{
    var next=katzDeliLine.shift()
    return (`Currently serving ${next}.`);
  }
}
function currentLine(katzDeliLine){
  if (0===katzDeliLine.length){
    return "The line is currently empty."
  }
  else {
    var line=[]
    for (let i=0;i<katzDeliLine.length; i++){
      line.push(' '+[i+1]+'. '+ katzDeliLine[i])
    }
    return ("The line is currently:"+line)
  }
}