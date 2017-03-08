var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var x = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${x} in line.`;
}

function nowServing(katzDeliLine){
        return (katzDeliLine.length > 0) ? "Currently serving " + katzDeliLine.shift() + "." : "There is nobody waiting to be served!";

}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var arrayOfStrings = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      var a =  ` ${i + 1}. ` + katzDeliLine[i] ;
        arrayOfStrings.push(a)
    }
    return "The line is currently:" + arrayOfStrings;
    }
    else {
      return "The line is currently empty.";
  }
}
