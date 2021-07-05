
  var katzDeli=[]

  
function takeANumber(line, name){


  line.push(name)
return "Welcome, "+name+". You are number "+ line.length +" in line."
}


function nowServing(line){
  if(line.length<1){
   return "There is nobody waiting to be served!"
  }else{
    var name = line.shift()
    return "Currently serving "+name+"."
  }
}

function currentLine(line){
  var newDeliLine=[]
  if((line===undefined)||(line.length<1)){
    return "The line is currently empty."
  }else{
    for(let i =0;i<line.length;i++){
   newDeliLine.push((i+1)+". "+line[i])
    }
    return "The line is currently: "+newDeliLine.join(", ")
  }
  
}

