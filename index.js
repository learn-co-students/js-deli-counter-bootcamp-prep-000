var katzDeli = [];

function takeANumber(arr, name) {
  if (typeof name == Array) {
    for(let people in name) {
      arr.push(name[people])
    }
  } else {
    let number = arr.push(name)
    return `Welcome, ${name}. You are number ${number} in line.`
  }
}

function nowServing(arr) {
  if(arr.length == 0) {
    return "There is nobody waiting to be served!"
  }

  let cs = `Currently serving ${arr[0]}.`
  arr.shift()
  return cs
}

function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty."
  }

  let str = "The line is currently: "
  for(let p in line) {
    if(p == line.length - 1) {
      str += `${parseInt(p)+1}. ${line[p]}`
    } else {
      str += `${parseInt(p)+1}. ${line[p]}, `
    }
  }
  return str
}
