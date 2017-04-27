function takeANumber(katzDeliLine, name) {
  array = [];
  array.push(`Welcome ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`);
  return array;
}
