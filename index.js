function takeANumber(customersInLine, newCustomerName) {
  customersInLine.push(newCustomerName)
  return "Welcome, " + newCustomerName + ". You are number " + customersInLine.length + " in line."
}
function nowServing(customersInLine) {
  let nextCustomerName = customersInLine.shift()
  // makes a variable to store the next customer name while simultaneously removing them from the array
  if (nextCustomerName) {
    return "Currently serving " + nextCustomerName + "."
  } else return "There is nobody waiting to be served!"
}
function currentLine(customersInLine) {
  if (customersInLine.length === 0) {
    return "The line is currently empty."
  } else {
    var announcementMessage = "The line is currently: "
    for (let customerIndex = 0; customerIndex < customersInLine.length; customerIndex++){
      announcementMessage += (customerIndex + 1) + ". " + customersInLine[customerIndex]
      //trim the last ", " off the end in an extremely roundabout way...
      if (customerIndex != customersInLine.length - 1){
        announcementMessage += ", "
      }
    }
  }
  
  return announcementMessage
}