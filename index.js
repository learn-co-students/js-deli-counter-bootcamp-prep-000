var katzDeli=[];

/*

*/

 function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++){
      return "Welcome, "+name+". You are number " + (katzDeliLine.length-i)+ " in line."
   }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var temp=  katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + temp + "."
  }
}

function currentLine(line){
var name = ""
  if(line.length===0){
    return "The line is currently empty."
  }else {
    for(var i=0;i<line.length;i++){
      if(i===line.length - 1 ){
        name = name + " " + (i+1) +". " +line[i]
      } else{
        name = name + " " + (i+1) +". " +line[i] +","
      }
    }
      return "The line is currently:" + name
  }
}
