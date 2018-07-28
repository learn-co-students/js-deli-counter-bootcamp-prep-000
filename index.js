
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}




function nowServing(deliLine) {
  var firstname = deliLine[0]
	if (deliLine.length === 0) {
   return "There is nobody waiting to be served!"
        }
      else {
        deliLine.shift()
    return `Currently serving ${firstname}.`
          }
        }



function currentLine(katzDeliLine){
  // if (i === 0) {
     if (katzDeliLine.length === 0) {
     return "The line is currently empty."
        }
      else {
        var return_string = "The line is currently: "
        var strings_array = []
        for (let i = 0; i < katzDeliLine.length; i++) {
           var string = (i+1) + ". " + katzDeliLine[i]  
          strings_array.push(string)
      }
      var customers_string = strings_array.join(", ")
}
return return_string + customers_string
}
