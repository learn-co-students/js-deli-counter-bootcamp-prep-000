
function takeANumber(charitysDeliLine, customerName){
/* add customer name to array */
charitysDeliLine.push(customerName);
/* accept the current line of people*/
/* return customer's position in line */
var linePosition = charitysDeliLine.length;
return `Welcome, ${customerName}. You are number ${linePosition} in line.`
}
/* the nowServing function does not have any parameters
- this function will be evaluating the array that is passed through
- tests: will pass through an array */
function nowServing(array){
  var numberOfCustomers = array.length;
  if(numberOfCustomers == 0) {
  /* if statement to check if there are customers in line */
  return "There is nobody waiting to be served!"
}
/* if there is someone in line, display "Currently serving (name of person in line)."
      access name in the array
 */
  else {
    var newCustomer = array.shift();
    return `Currently serving ${newCustomer}.`
  }
}

function currentLine(line) {
  var linePosition = line.length;

    var customer = "";
    for(var i = 0; i < line.length; i++){
        customer +=  `${i + 1}. ${line[i]}, `;
        if(i == line.length - 1) {
        customer = customer.replace(/,\s*$/, "")
    }
  }
  if(linePosition == 0) {
    return "The line is currently empty."
  }
      else {
   return `The line is currently: ${customer}`
}
}
