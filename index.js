function takeANumber (orderln, name) {
  orderln.push(name);
  return `Welcome, ${name}. You are number ${orderln.length} in line.`;
}

function nowServing (orderln) {
  if(!orderln.length) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${orderln.shift()}.`;
}

function currentLine (orderln) {
  if(!orderln.length) {
    return 'The line is currently empty.'
  }
  var nameNum = [];
  for (var idx = 0; idx < orderln.length; idx++) {
    nameNum.push(`${idx + 1}. ${orderln[idx]}`);
  }
  return `The line is currently: ${nameNum.join(', ')}`;
}
