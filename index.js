function takeANumber(katzDeli, katzDeliLine) {
var  katzDeli = []
var i = 0
  while ( katzDeli.length> i) {
    if ( i>0 ) {
      var string = 'Welcome, ' + katzDeliLine[i] + '. You are number '+ katzDeli[i] +' in line.'
      katzDeli.push(string)
      i ++
      return katzDeli
    }else {
      return 'The line is currently empty.'
    }
  }
}
function nowServing(katzDeliLine,katzDeli) {
  var  katzDeli = []
  var i = 0
  while (katzDeli.length> i) {
    if (i >0) {
      var string = 'Currently serving ' + katzDeliLine[i]
      katzDeli.pop()
      i ++
      return katzDeli
    }else {
      return 'There is nobody waiting to be served!'

    }
  }
}
