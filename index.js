//expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
const katzDeli = [];
function takeANumber(katzDeli, name) {
    katzDeli.push(name)
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length <= 0) {
    return 'The line is currently empty.'
  } else {
    var announcement = "The line is currently: ";
    var i = 0;
    while (i < katzDeli.length) {
      if (katzDeli[i] === katzDeli[katzDeli.length - 1]) {
        announcement += (i + 1) + ". " + katzDeli[i];
    } else {
      announcement += (i + 1) + ". " + katzDeli[i] + ", ";
    }
      i++;
    }
  }
  return announcement
}