function takeANumber (line, newCust) {
  line.push(newCust);
  var custNum = line.indexOf(newCust) + 1;

  return `Welcome, ${newCust}. You are number ` + custNum + " in line.";
}

function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstCust = line[0];
    line.shift();
  }

  return `Currently serving ${firstCust}.`;
}

function currentLine (line) {
  var customerStr = "The line is currently: ";

  if (line.length === 0){
    return "The line is currently empty.";
  }

  for (var i = 0; i < line.length; i++){
    var cust = line[i];

    if (i === line.length - 1){
      customerStr += i + 1 + `. ${cust}`;
    } else {
        customerStr += i + 1 + `. ${cust}, `;
    }
  }

  return customerStr;
}
