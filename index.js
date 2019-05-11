function takeANumber(currentpeople,newname){
 currentpeople.push(newname)
 var array =['Welcome, '+  newname +'. You are number ' + (currentpeople.indexOf(newname) + 1) + 
  ' in line.']
  return array
}

/// End Question 1 Code ///

function nowServing(katzDeliLine){
var array = []
  if (katzDeliLine.length > 0 ) {
  array.push('Currently serving ' + katzDeliLine[0] + '.'); katzDeliLine.shift()
}
  else {
  array.push('There is nobody waiting to be served!')}
 
 return array
}
 
/// End Question 2 Code ///

function currentLine(line){
var array = []; 
var array2 = []
    for (var i = 0; i < line.length; i++){
    array.push( ` ${i+1}`+ ". " + line[i])}
    
    if (line.length > 0){
    array2.push("The line is currently:" + array)
    }else{ 
    array2.push("The line is currently empty.")
  }
    
    return array2.toString()
} 

/// End Question 3  Code ///

