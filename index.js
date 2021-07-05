function takeANumber(line,newName){
  line.push(newName);
    return(`Welcome, ${newName}. You are number ${line.length} in line.`)
}

function nowServing(line){
  if(line.length === 0){
    return("There is nobody waiting to be served!")
  }
  return(`Currently serving ${line.shift()}.`)
}

function currentLine(line){
 i = 0; 
 arr = []; 
 if(line.length === 0) {
   return("The line is currently empty.")
 }
 while(i < line.length) {
   arr.push(`${i + 1}. ${line[i]}`)
   i ++;
 }
 return(`The line is currently: ${arr.to_s}`)
}