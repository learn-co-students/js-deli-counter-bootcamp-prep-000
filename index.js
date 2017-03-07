var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katzDeli.shift()}.`;
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  var str = "The line is currently:";
  for (var i = 0; i < katzDeli.length; i++) {
    str += `${i === 0 ? '' : ','} ${i+1}. ${katzDeli[i]}`;
  }
  return str;
}
