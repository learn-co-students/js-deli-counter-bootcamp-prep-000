function takeANumber(katzDeli, newName){
  katzDeli.push(newName);
  var customerNumber = katzDeli.length;
  return `Welcome, ${newName}. You are number ${customerNumber} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
    if (line.length > 0){
        let i = 0;
        let o = 1;
        var lineOrder = [];
        while (i < line.length){
            lineOrder.push(` ${o}. ${line[i]}`);
            i++;
            o++;
            lineOrder;
        } return "The line is currently:" + lineOrder.toString();
    } else if (line.length === 0){
        return "The line is currently empty.";
    }
}













