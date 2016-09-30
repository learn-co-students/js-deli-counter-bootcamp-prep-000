var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  var next = katzDeliLine[0];
  katzDeliLine.shift();

  return `Currently serving ${next}.`;
}

function currentLine(katzDeliLine) {
  var answer = 'The line is currently';

  if (katzDeliLine.length === 0) {
    return answer + ' empty.';
  }

  answer += ':';
  for (let i = 0; i < katzDeliLine.length; i++) {
    answer += `${(i > 0) ? ',' : ''} ${i + 1}. ${katzDeliLine[i]}`;
  }

  return answer;
}
