function takeANumber(deliLine, name){
  deliLine.push(name);
  var num = deliLine.length;
  return ("Welcome, " + name + ". You are number " + num + " in line.");
}

function nowServing(deliLine){
  if (deliLine.length >= 1){
    var name = deliLine.slice(0, 1);
    deliLine.shift();
    return ("Currently serving " + name + ".");
  } 
  return ("There is nobody waiting to be served!");
}

function currentLine(deliLine){
  if (deliLine.length >= 1){
      var line = [];
      for (var i = 0; i < deliLine.length; i++){
        if (i === 0){
          line.push((i+1) + ". " + deliLine[i]);
        } else {
          line.push( " " + (i+1) + ". " + deliLine[i]);
        }
    }
    return ("The line is currently: " + line);
  } 
  return ("The line is currently empty.");
}

// function currentLineTwo(deliLine){
//   if (deliLine.length >= 1){
//     deliLine.forEach(function(num){
      
//     });
//   } 
//   return ("The line is currently empty.");
// }