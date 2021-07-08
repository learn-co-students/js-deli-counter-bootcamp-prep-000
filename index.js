var katzDeli = [];

function takeANumber(katzDeli, customerName){
  katzDeli.push(customerName);
  return `Welcome, ${customerName}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
    for (var i = 0; i < katzDeli.length; i++) {
      str+= (i+1) + `. ${katzDeli[i]}, `
    }
    var newStr = str.slice(0, str.length - 2);
    return newStr;
  }
}