
function takeANumber(katzDeliline, name) {
  // add person to deli line
  katzDeliline.push(name);
  // return the name and place in line
  return `Welcome, ${name}. You are number ${katzDeliline.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliline) {
  // if nobody in line
  if (katzDeliline.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
  // first person in line
  var firstPerson = katzDeliline[0];
  // remove the first person in line
  katzDeliline.shift();
  //return the person currently serviing
  return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliline) {
  // return line is empty
  if (katzDeliline.length === 0) {
    return 'The line is currently empty.'
  } else {
    // return array elements not empty
    var array = [];
   for (var i = 0; i < katzDeliline.length; i++) {
     array.push(' ' + [i+1] + '. ' + katzDeliline[i]);
   }
    return 'The line is currently:' + array;
  }
  
}