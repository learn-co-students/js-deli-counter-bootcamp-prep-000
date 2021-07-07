function takeANumber(line, name){
  var l = line.length + 1
  line.push(name)
  return `Welcome, ${name}. You are number ${l} in line.`
}


 // line ["a", b, c]
 // name ["matilda", lucrelia, cresilda]
 
 function nowServing(katzDeliLine){
   if (katzDeliLine.length < 1){
      return "There is nobody waiting to be served!"
   }
  else {
      return `Currently serving ${katzDeliLine.shift()}.`
      //katzDeliLine.shift()
   }
 }
 
 function currentLine(cline){
   if (cline.length < 1) {
   return "The line is currently empty."
   }
   else {
      var text = "The line is currently: "
      var aux
      for (var i = 0; i < cline.length; i++){
        if (i === cline.length - 1){
          aux = (i + 1) + ". " + cline[i]
        }
        else {
          aux = (i + 1) + ". " + cline[i] + ", "
        }
      text = text + aux
     }
     return text
   }
 }