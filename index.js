function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var servedCustomer = katzDeliLine.shift()
    return `Currently serving ${servedCustomer}.`
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineAnnouncement = "The line is currently: "
    for(let i = 0; i < line.length; i++) {
      lineAnnouncement += `${i+1}. ${line[i]}, `
    }
    lineAnnouncement = lineAnnouncement.slice(0,-2)
    return lineAnnouncement
  }
}