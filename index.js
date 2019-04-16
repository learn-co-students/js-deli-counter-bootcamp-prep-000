function takeANumber(line, name) {
  line.push(`${name}`)
  return `Welcome, ${name}. You are number ${parseInt(line.length)} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  if (parseInt(line.length) > 0) {
    var currentCustomer = line.shift()
    return `Currently serving ${currentCustomer}.`
//    return `Currently serving ${line[0]}.`
// } if (line.length = 0) {
//     return "There is nobody waiting to be served!"}
}}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty." //notice that line doesn't become the name of the line in question because it is not inside `${}`
  }
  if (parseInt(line.length) > 0) {
    let whoseLeft = [];
     let i = -1; //had to set to -1 to make the counter work
     while (i++ < line.length-1) { // totally bodged this but it worked.
         whoseLeft.push(`${i+1}. ${line[i]}`)
         return `The line is currently: ${whoseLeft[i]}.`
         //.join(', ');
//     } return `The line is currently: ${whoseLeft[i]}.`

    // for (let i = 0; i < line.length; i++) {
    //
    // return `The line is currently: ${line[i]}.`


    // let i = 0
    // i++
    // while (i < line.length) {
    //   return `The line is currently: ${line[i]}.`
    // }


    }
  }
}
