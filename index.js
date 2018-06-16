var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if(katzDeliLine[0] === undefined){
    return(`There is nobody waiting to be served!`);
  }
  else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${name}.`)
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine === undefined) {
    console.log('The line is currently empty.')
    }
  else {
    var line = 'The line is currently: ';
    for(var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1){
        line += (`${i + 1}. ${katzDeliLine[i]}`)

      }
      else {
        line += (`${i + 1}. ${katzDeliLine[i]} `)
      }
    }
  }
    return line;
}
