var katzDeli = []

function takeANumber(katzDeli, name) {

    katzDeli.push(name)

      return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli){

  if (katzDeli.length >= 1) {
    return "Currently serving " + katzDeli.shift() + "."
      ;
  }

  else if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(line) {



   if (line.length < 1) {
     return "The line is currently empty."
   }
   else if (line.length > 0) {

     return  "The line is currently: " + "1. " + line[0] + ", " + "2. " + line[1] + ", " + "3. " + line[2]
     }


}
