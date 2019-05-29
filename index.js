var katzDeliLine = [];

 function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    var line = [];
    katzDeliLine.forEach(function(name,index) {
        var num = index + 1;
         line.push(` ${num}. ${name}`);
       });
       return "The line is currently:" + line;
  }
}
