var katzDeli = [];
var takeANumber = function(katzDeliLine, name){
      katzDeliLine.push(name);
      return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
var nowServing = function(katzDeliLine){
  if(katzDeliLine.length ===0){
    return "There is nobody waiting to be served!";
  }
  else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`;
  }
}
var currentLine = function(katzDeliLine){
  var line
  if(katzDeliLine.length === 0){
    line = "The line is currently empty."
  }
  else{
    line = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++){
      line +=`${i+1}. ${katzDeliLine[i]}, `
      }
      line = line.substring(0, line.length - 2);
    }
    return line
  }
