
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var stored= "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
  return stored
}

function nowServing(entry){
  if(entry.length>0){
    var stored2= "Currently serving "+entry.shift()+"."
    return stored2
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
  if(array.length === 0){
    var msg ="The line is currently empty.";
    return msg
  }else{
    for (let i = 0; i<array.length; i++){
      array[i] = " "+(i+1)+". "+array[i];
    }
    var stored3 = "The line is currently:"+array
    return stored3
  }
}