var katzDeli= [];

function takeANumber(katzDeliLine, name){
  var position= katzDeliLine.length+1
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number "+ position +" in line."
}

function nowServing (line){
 if(line.length == 0){
   return "There is nobody waiting to be served!"
 }
 var name = line.shift()
 return "Currently serving "+ name + "."
 }


 function currentLine (katzDeliLine){
    if(katzDeliLine.length == 0){
      return "The line is currently empty."
    }

  var strings = [];
  for(let i = 0; i<katzDeliLine.length; i++){
    strings.push(`${i+1}. ${katzDeliLine[i]}`)
  }
return  `The line is currently: ${strings.join(', ')}`
}

//var months = ['Jan', 'Feb', 'Mar', 'Apr'];
//months.toString(); // "Jan, Feb, Mar,Apr"
