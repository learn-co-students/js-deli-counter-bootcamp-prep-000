var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeli=katzDeliLine.push(name)
  var line = katzDeliLine.length;
  var welcome = `Welcome, ${name}. You are number ${line} in line.`
  return welcome;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!";
  }else{
    var currently=`Currently serving ${katzDeliLine[0]}.`;
    var newline= katzDeliLine.shift();
    return currently;
  }
}

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  }else{
    var array=[];
    var sentence ="The line is currently:"
    for (var i=0; i<line.length; i++){
    var one = i+1;
    array.push(" "+one +". "+line[i])
      }
    }
    return sentence+array;
    }
