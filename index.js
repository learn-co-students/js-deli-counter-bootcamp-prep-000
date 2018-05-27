var katzDeli = [];
function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  var position = katzDeli.indexOf(newPerson)+1;
  return `Welcome, ${newPerson}. You are number ${position} in line.`;
}
function nowServing(katzDeli){
  if (katzDeli.length>0){
    var firstPerson = katzDeli[0];
    katzDeli.splice(0,1);
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeli){
  if (katzDeli.length>0){
    var line ="";
    var position;
    for (var i = 0; i < katzDeli.length; i++){
      position = i+1;
      if (i === katzDeli.length-1){
        line = `${line}${position}. ${katzDeli[i]}`;
      } else {
        line = `${line}${position}. ${katzDeli[i]}, `;
      }
    }
    return `The line is currently: ${line}`;
  } else {
    return "The line is currently empty.";
  }
}