function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }
  
 function nowServing(katzDeliline) {
  if (katzDeliline.length < 1) {
  return("There is nobody waiting to be served!")
} 
else if (katzDeliline.length >= 1) {
  return(`Currently serving ${katzDeliline.shift()}.`)
  }
}

function currentLine(katzDeliline) {
  if(katzDeliline.length === 0) {
    return("The line is currently empty.")
  } else {
    var katzDelilineArray = [];
    for (var i = 0; i < katzDeliline.length; i++);
    while(katzDeliline.length > 0) {
      katzDeliline.push(''+[i+1] +'.' + katzDeliline[i]);
    }
    return katzDelilineArray.push('The line is currently;' + katzDeliline);
  }
}