var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var i = katzDeliLine.length;
    return (`Welcome, ${name}. You are number ${i} in line.`)
  }
