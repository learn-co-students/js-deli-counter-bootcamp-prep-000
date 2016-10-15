var katzDeli = []
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(array) {
  var name
  if(array.length > 0) {
    name = array[0]
    array.shift()
    return (`Currently serving ${name}.`)
  }
  else return("There is nobody waiting to be served!")
}

function currentLine(arr) {
    if (arr.length === 0) {
        return "The line is currently empty.";
    }
    else {
        let ret = "The line is currently: ";
        for (let i = 0; i < arr.length; i++) {
            if (i !== arr.length - 1) {
              ret = ret + `${i+1}. ${arr[i]}, `;
            }
            else {
              ret = ret + `${i+1}. ${arr[i]}`;
            }
        }
        return ret;
    }
