var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
//  console.log("katzDeliLine = " ,katzDeliLine);
//  console.log("katzDeliLine.length =", katzDeliLine.length);
}


function nowServing(katzDeliLine) {
  var arr = [];
  if (katzDeliLine.length === 0) {
    return ('There is nobody waiting to be served!');
  }
  else {
    arr = "Currently serving " + katzDeliLine.shift() + ".";
    return (arr);
  }
}


function currentLine(katzDeliLine) {
  var str = " ";
  if (katzDeliLine.length === 0) {
    return ('The line is currently empty.');
  }
  else {
        for ( let i = 0; i < katzDeliLine.length; i++) {
    str += `${i + 1}. ${katzDeliLine[i]}${ (i === katzDeliLine.length - 1) ? "" : ", "}`;
  }
return (`The line is currently:${str}`);
}
}
