var katzDeliLine = ["Steven", "Blake", "Avi", "Grace"];

function takeANumber(katzDeliLine, person) {
    katzDeliLine.push(person);
    return ("Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length) {
    var firstPerson = katzDeliLine[0];
      katzDeliLine.shift()
      return ("Currently serving " + firstPerson + ".")
    }
    else {
      return "There is nobody waiting to be served!"
    }
  }

  // function currentLine(katzDeliLine){
  //   if (katzDeliLine.length === 0){
  //     return "The line is currently empty."
  //   }else{
  //     var lineObject = {};
  //     for (var i=0; i<katzDeliLine.length; i++){
  //       lineObject[i+1] = katzDeliLine[i]
  //     }
  //     console.log(lineObject)
  //   }
  //   var item = ''
  //   var arr = ["The line is currently: "]
  //   for (var key in lineObject){
  //     item = key + ": " + lineObject[key]
  //     arr.push(item)
  //   }
  //   return arr;
  // }

var line = [];
function currentLine(katzDeliLine) {
  for (let i=0; i < katzDeliLine.length; i++) {
    line.push(" " + [i+1] + ". " + katzDeliLine[i]);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    return ("The line is currently:" + line)
  }
}
