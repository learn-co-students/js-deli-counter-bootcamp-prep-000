var katzDeli=[]
function takeANumber(katzDeli, name){
  var greeting="Welcome, ", info=". You are number ", line=" in line.", n=katzDeli.length+1
  katzDeli.push(name);
  return greeting+name+info+n+line
}
function nowServing(array){
  var serving="Currently serving ", period="."
  if (array.length>0){
    var nam=array[0];
    array.shift()
    return serving+nam+period;
  } else if (array=[]){
    return "There is nobody waiting to be served!"
  } else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(line){
  var dhammapada=[], open="The line is currently: ", n=1, i=0, period=". "
  if (line.length>0){
    var l=line.length
    while(l>0){
      dhammapada[i] = " " + n + period + line[i];
      n++;
      i++;
      l--
    }
    return "The line is currently:" + dhammapada
  } else if (line=[]) {
    return "The line is currently empty."
  }
}
