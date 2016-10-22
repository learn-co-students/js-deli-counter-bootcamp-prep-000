function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine[katzDeliLine.length - 1]}. You are number ` + katzDeliLine.length + ' in line.'
}

function nowServing(deliLine) {

  {
 var lined = deliLine[0];
 }

  if (deliLine.length > 0) {
   deliLine.shift();
    return "Currently serving " + lined + "."




  } else {
    return "There is nobody waiting to be served!"
  }


}

function currentLine(katzDeliLine) {
  var k = [];
  if (katzDeliLine.length > 0) {
                               {
  for (var i = 0; i < katzDeliLine.length; i++) {
  k.push(`${i + 1}. ${katzDeliLine[i]}`)   }
    var k2 = k.join(', ');
    return `The line is currently: ${k2}`
  }



}
  else {
    return "The line is currently empty." }

  }
