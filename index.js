var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var spot = katzDeliLine.indexOf(name) + 1
var msg = `Welcome, ${name}. You are number ${spot} in line.`
return msg
}

function nowServing(katzDeliLine)
{ if (katzDeliLine.length ===0){
  var msg= "There is nobody waiting to be served!";
  return msg}
  else{
  var customer = katzDeliLine[0];
  var msg = `Currently serving ${customer}.`
  katzDeliLine.shift()
  return msg
}
}

function currentLine(katzDeliLine){
  var myArray= [];
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.")
  }
  else {
    for (var i=0; i < katzDeliLine.length; i++){
      var ppl= katzDeliLine[i]
      var math= i + 1
      var idk = ` ${math}. ${ppl}`

      myArray.push(idk)
    }
  var string= myArray.toString();
  return (`The line is currently:${string}`)
  }
}
