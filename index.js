//katzDeli = [];

function takeANumber(katzDeliLine,custName){
  katzDeliLine.push(custName);
  return "Welcome, " + custName + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length>0) {
    return "Currently serving " + katzDeliLine.shift() + ".";  
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var rtnStr = "The line is currently";
  if (katzDeliLine.length===0) {
    rtnStr = rtnStr + " empty."
  } else { 
      for (let i=1; i<=katzDeliLine.length; i++) {
        if (i===1) {
          rtnStr = rtnStr + ":";
        } else {
          rtnStr = rtnStr + ",";
        }
        rtnStr = rtnStr + " " + i + ". " + katzDeliLine[i-1];
      }
  }
  return rtnStr;
}