 var katzDeli=[];
function takeANumber(katzDeli,personName){
 katzDeli.push(personName)
  for(let i=0; i<katzDeli.length; i++){
     if(katzDeli[i] == personName){
     return `Welcome, ${katzDeli[i]}. You are number ${i + 1} in line.` 
     }
  }
 }
 
function nowServing(katzDeli){
  if(katzDeli.length > 0){
    return 'Currently serving' +' '+ katzDeli[0]+'.'
     
  }else{
    return "There is nobody waiting to be served!"
  }
  katzDeli.shift();
}

function currentLine(katzDeli){
  if(katzDeli.length > 0){
    return `The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`
  }else{
    return 'The line is currently empty.'
  }
}