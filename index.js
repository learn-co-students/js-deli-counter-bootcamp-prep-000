var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return (`Welcome, ${name}. You are number ${i} in line.`);
}

function nowServing(katzDeliLine){
  var newLine = katzDeliLine.slice(0, 1);
  katzDeliLine.shift();
  if (katzDeliLine.length >= 1){
    return (`Currently serving ${newLine}.`);
  } else {
    return (`There is nobody waiting to be served!`);
  }
}

function currentLine(katzDeliLine){
  var newArray = [];
    for (let i = 0; i < katzDeliLine.length; i++){
      var el = `${i+1}. ${katzDeliLine[i]}`;
      newArray.push(el);
    }
   if (katzDeliLine.length >= 1){
    return (`The line is currently: ${newArray.join(", ")}`);
  } else {
    return (`The line is currently empty.`);
  }
}
