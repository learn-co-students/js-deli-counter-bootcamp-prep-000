var takeANumber = (arr, value) => {
  const idx = arr.indexOf(value)
  if (idx === -1) {
    arr.push(value)
    return `Welcome, ${value}. You are number ${arr.length} in line.`
  }
  return `Welcome, ${value}. You are number ${idx} in line.`
}

var nowServing = (arr) => {
  if (arr.length === 0) return "There is nobody waiting to be served!"
  return `Currently serving ${arr.shift()}.`
}

const currentLine = (arr) => {
  if (arr.length === 0) return 'The line is currently empty.'
  const lined = arr.map((val, idx) => `${idx + 1}. ${val}`).join(', ')
  return `The line is currently: ${lined}`
}