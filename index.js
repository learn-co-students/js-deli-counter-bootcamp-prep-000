function takeANumber(customerList, newCustomer) {
  var updatedList = customerList.push(newCustomer);
  var postion = customerList.indexOf(newCustomer) + 1;
  var welcomeMessage = "Welcome, " + newCustomer + ". You are number " + postion + " in line.";
  return welcomeMessage;
}

function nowServing(customerList) {
  var currentCustomer = customerList[0];
  if (currentCustomer == undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    var currentCustomer = customerList.shift();
    return "Currently serving " + currentCustomer + "."
  }
}

function currentLine(customerList) {
  var currentCustomer = customerList[0];
  if (currentCustomer == undefined) {
    return "The line is currently empty."
  } else {
    var line = [];
    customerList.forEach(function(item, index, array) {
      line = [...line, index + 1 + ". " + item];
      });
    return "The line is currently: " + line.join(', ')
  }
}
