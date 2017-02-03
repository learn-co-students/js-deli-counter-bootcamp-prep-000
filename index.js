var katzDeli = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  for(let i = 0; i<katzDeliLine.length; i++){
    if(katzDeli[i]=name){
      var x = i
    }
    x++
  }
  return "Welcome, " + name + ". You are number "+x + " in line."
}

function nowServing(katzDeli) {
   if (katzDeli.length > 0) {
       var nowServing = katzDeli[0]
            katzDeli.shift()
     return `Currently serving ${nowServing}.`
   } else {
    return `There is nobody waiting to be served!`
   }
}

function currentLine(DeliLine){
  if(DeliLine.length === 0){
    return 'The line is currently empty.'
  } else{
    var line = []
    for (var i = 0;i<DeliLine.length;i++){
      line.push(` ${i+1}. ${DeliLine[i]}`)
    }
    return 'The line is currently:' + line
  }
}