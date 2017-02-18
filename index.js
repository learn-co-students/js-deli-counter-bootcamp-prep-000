//creates global variable
var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(line){
  if(line.length==0){
    return "The line is currently empty."
  }else {
    var myString = "The line is currently:";
    for(var i = 0; i<line.length; i++){
      myString = myString + ` ${i+1}. ${line[i]}`;
      if(i<line.length-i){
        myString = myString + ",";
      }
    }
    return myString;
  }
}
