function takeANumber(arr, name){
  arr.push(name);
  return "Welcome, " + name + ". You are number " + (arr.length) + " in line.";
}
function nowServing(deliLine){
  if(deliLine.length > 1 && deliLine !== undefined){
    var person = deliLine[0];
    deliLine.shift();
    return "Currently serving " + person + ".";
     
  }
  if(deliLine.length < 1 || deliLine === undefined){
    return "There is nobody waiting to be served!";
  }
}
function currentLine(line){
  var output;
  var w = 0;
  if(line.length > 1 && line !== undefined){
    output = "The line is currently: ";
    for(let i = 0; i<line.length - 1; i++){
      
      output += (w + 1) + ". " + line[w] + ", ";
      w++;
    }
    //w++;
     output += (w + 1) + ". " + line[w];
     return output;
  }
  if(line.length < 1 || line === undefined){
    return "The line is currently empty.";
  }
}