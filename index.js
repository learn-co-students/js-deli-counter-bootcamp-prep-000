var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name)

  return 'Welcome, ' +name+'. You are number '+
  katzDeli.length+' in line.'
}
function nowServing(line){
  if (line.length>0){
    return 'Currently serving ' +
    line.shift(0)+'.'
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line) {
 var list = []
 var i=0
 for(i=0; i<line.length; i++){
 list = list + (i+1)+'. '+line[i];
 if(i<line.length-1){
   list = list + ', '
 }
 }
 if(line.length>1){
 return 'The line is currently: '+list
 }
 else {
   return 'The line is currently empty.'
 }
}
