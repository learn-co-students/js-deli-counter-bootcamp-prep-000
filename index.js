var katzDeli = [];

function takeANumber(katzDeliLine,name) {
 katzDeliLine.push(name);
 var postion = katzDeliLine.length;
 return `Welcome, ${name}. You are number ${postion} in line.`
}

function nowServing() {
  if (katzDeliLine.length > 0) {
    return katzDeliLine[1]
    katzDeliLine.unshift()
  } else {
    return "The line is currently empty."
  }
}