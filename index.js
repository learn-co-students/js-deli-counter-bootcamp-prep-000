



var katzDeliLine = []

function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name);
   var length = katzDeliLine.length;
   var myString = `Welcome, ${name}. You are number ${length} in line.`
   return myString

}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0 )  {
     var myString = `Currently serving ${katzDeliLine[0]}.`
     katzDeliLine.shift()
     return myString
   } else if (katzDeliLine.length === 0 ) {
     var myString = `There is nobody waiting to be served!`
     return myString
   }
}

function currentLine(katzDeliLine){
  if ( katzDeliLine.length === 0 ) {
    var myString = `The line is currently empty.`
    return myString
  } else if (katzDeliLine.length > 0) {
  var i = 0;
  var array = [];
    while (i < katzDeliLine.length){
      array.push(` ${i+1}` + `. ` + `${katzDeliLine[i]}`)
      i++;
    }
    array.join()
    var str = 'The line is currently:'
    var myString = str.concat(array.toString())
    return myString

  }
}
