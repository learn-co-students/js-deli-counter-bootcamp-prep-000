function takeANumber(katzDeli, otherDeli) {
  
    katzDeli =[ ]
    
    otherDeli = ["Ada", "Grace", "Kent"]
    
    let welcome = [ ]
    
    for(let i = 0; i < otherDeli.length; i++) {
      for(let y = 1; y < otherDeli.length; y++) {
      katzDeli.push(otherDeli[i])
      welcome.push(`Welcome, ${katzDeli[y]}. You are number ${y} in line.`)
       }
    }
    
    return welcome
    
}