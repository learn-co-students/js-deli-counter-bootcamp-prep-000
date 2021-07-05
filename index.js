var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    return 'Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line."
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length !== 0){
    var currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentPerson}.`;
  }else{
    return `There is nobody waiting to be served!`
  }
}
function currentLine(katzDeliLine) {
  var defMsg = `The line is currently:`
  var some = []
    if (katzDeliLine.length !== 0) {
      for (var i=0; i< katzDeliLine.length; ++i) {
     some.push( `${i+1}. ${katzDeliLine[i]}`); 
      }
     return `${defMsg} ${some.join(', ')}`
    }
    else {
       return "The line is currently empty.";
    }
 }