var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
  
  /*
  var i = 0;
  var welcomeMsg = `Welcome, ${katzDeliLine[i]}. You are number ${i + 1} in line.`;
  for (let i = 0; i < katzDeliLine.length; i++) {
  katzDeliLine.push(name);
  return welcomeMsg;
  }
  */
