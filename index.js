function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine (katzDeliLine) {
  
  var newString = [];
  var i;
 
  if (katzDeliLine.length > 0) {

    for (i = 0; i < katzDeliLine.length; i++) {
    
      newString.push(" " + [i+1] + ". " + katzDeliLine[i]);
  
      }
   
    } else {
   
    return 'The line is currently empty.'

  }
  
  return "The line is currently:" + newString;

}