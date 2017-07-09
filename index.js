var katzDeliLine =[] ;

function takeANumber(katzDeliLine, customername){
  katzDeliLine.push (customername)
  return `Welcome, ${customername}. You are number ${katzDeliLine.length} in line.`
}
var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}
