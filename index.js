var katzDeli = [];

function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name)

	var len = katzDeliLine.length

  return `Welcome, ${name}. You are number ${len} in line.`
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {

	return "There is nobody waiting to be served!"
	} else {

  var currentCustomer = katzDeliLine[0]

  katzDeliLine.shift()

	return `Currently serving ${currentCustomer}.`
	}
}

function currentLine(katzDeliLine) {
  var nameList = "The line is currently:"

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {

      var linePosition = i + 1

      nameList = nameList + (` ${linePosition}. ${katzDeliLine[i]},`)
    } nameList = nameList.slice(0, -1)
    return nameList
  }
}
