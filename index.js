katzDeli = [ ]

otherDeli = ["Ada", "Grace", "Kent"]


function takeANumber(katzDeli, otherDeli) {
    
    var welcome = [ ]
    
    var i = 0
    
    do{
      katzDeli[i] = otherDeli[i]
      welcome.push(`Welcome, ${otherDeli[i]}. You are number ${i + 1} in line.`)
      i++
    }while(i < otherDeli.length)
  
    return welcome
    
}

