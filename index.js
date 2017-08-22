var katzDeliLine = []

var takeANumber = function (katzDeliLine, name) {
  katzDeliLine.push(name)
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

var nowServing = function(test) {
  if (test.length > 0) {
  return "Currently serving " + test.shift() + "."
    } else {
      return "There is nobody waiting to be served!"
}

}

var currentLine = function(test2) {
  var testArray = [];

  if (test2.length === 0) {
    return "The line is currently empty."
      } else {
        for (var i = 0; i < test2.length; i++) {
          var j = i + 1
          var queen = j + ". " + test2[i]
          testArray.push(queen)
    }
}

  return "The line is currently: " + testArray.join(", ")
}
