
function takeANumber(arr, name){
      arr.push(name)
      return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr) {
  while (arr.length > 0) {
    var temp = arr[0]
    arr.shift()
    return `Currently serving ${temp}.`
  }
    return 'There is nobody waiting to be served!'
}

function currentLine(arr) {

  if (arr.length > 0) {

    let message = "The line is currently: "

    for (var i = 0; i < arr.length; i++){
      message += `${i + 1}. ${arr[i]}`
      if (i + 1 < arr.length){
        message += `, `
      }
    }
    return message

    }

  return 'The line is currently empty.'

}
