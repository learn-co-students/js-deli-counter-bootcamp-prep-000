function takeANumber(list,name){
 list.push(name) 
  return `Welcome, ${name}. You are number ${list.length } in line.`
}

function nowServing(list){
  if (list.length !=0) {
   let food =  list.shift()
   food = `Currently serving ${food}.`
   return food
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(list){
  let line = ''
  for(let i = 0; i < list.length;i++){
    line = line + ` ${i+1}. ${list[i]}${i==2? '':','}`;
  }
  line = "The line is currently:"+ line
  
  
  if (list.length==0){
    return 'The line is currently empty.'
  
  }
  
  else {
    return line 
  }
  
  
  
}