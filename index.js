function takeANumber(katzDeliLine, name){
  //add person to line
  katzDeliLine.push(name);

  //return welcome message
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return (`There is nobody waiting to be served!`);
  }
  else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift()
    return (`Currently serving ${serving}.`);
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return (`The line is currently empty.`);
  }
  else {
    //create variable array to print line later.
    var print = [];
    //add each name up to final into array
    let count = 0;
    while (count < katzDeliLine.length){
      print.push(` ${count + 1}. ${katzDeliLine[count]}`)
      count++;
    }
    //return results
    return (`The line is currently:${print}`);
  }
}
