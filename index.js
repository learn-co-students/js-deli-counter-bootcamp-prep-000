katzDeli = [ ]

otherDeli = ["Ada", "Grace", "Kent"]


function takeANumber(katzDeli, otherDeli) {
    
    var welcome = [ ]
    
    for(var i = 0; i < otherDeli.length; i++) {
      katzDeli[i] = otherDeli[i]
      welcome.push(`Welcome, ${otherDeli[i]}. You are number ${i + 1} in line.`)
    }
  
    return welcome
}