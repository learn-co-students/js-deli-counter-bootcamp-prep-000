function takeANumber(array,customer){
    array.push(customer)
    var nos=array.length
    //var nos= ++nos
    return `Welcome, ${customer}. You are number ${nos} in line.`
    }

    function nowServing(customer){
      if (customer.length==0) {
        return "There is nobody waiting to be served!"
      } else {
        for (var i = 0; i < customer.length; i++) {
          return `Currently serving ${customer.shift()}.`
        }
      }
    }

    function currentLine(line) {
      var box2 = line.length - 1
      var inline = []
      if (line.length==0) {
        return "The line is currently empty."
      } else {
    for (var i = 0; i < box2; i++) {
      var  box = i + 1

      inline.push(` ${box}. ${line[i]}`)

    }
    inline.push(` ${line.length}. ${line[box2]}`)
    return `The line is currently:${inline}`
      }
    }
