function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.indexOf(name) +1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "There is nobody waiting to be served!";
  } else {
    let person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  }
}
  function currentLine (katzDeliLine) {
    let line = [];
    if (katzDeliLine.length ===0) {
      return "The line is currently empty.";
    } else {
       for (let i=0; i<katzDeliLine.length; i++) {
         line.push(` ${i+1}. ${katzDeliLine [i]}`) ;
       }
          return (`The line is currently:${line}`);
  }
  }