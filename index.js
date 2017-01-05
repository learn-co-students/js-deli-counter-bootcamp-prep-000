var katzDeli = [];

function takeANumber(katzDeliLine, name){
  var newCurrentLine = katzDeliLine.push(name);
  var newNumLine = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${newNumLine} in line.`;
}

function nowServing(array){
  if (array.length > 0){
    return `Currently serving ${array.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty.";
  }else{
      var positionName = [];
      for (var i = 0; i < array.length; i++){
      positionName.push(` ${i+1}. ${array[i]}`);
    }
    return `The line is currently:${positionName}`;
  }
}
  //var newObject = {[i + 1]:array[i]};
