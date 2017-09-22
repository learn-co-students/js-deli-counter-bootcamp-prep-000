
function takeANumber(charitysDeliLine, customerName){
/* add customer name to array */
charitysDeliLine.push(customerName);
/* accept the current line of people*/
/* return customer's position in line */
var linePosition = charitysDeliLine.length;
return `Welcome, ${customerName}. You are number ${linePosition} in line.`
}
