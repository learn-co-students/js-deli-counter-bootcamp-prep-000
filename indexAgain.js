function takeANumber(p, n) {
    p.push(n)
    return (`Welcome, ${n}. You are number ${p.indexOf(n) + 1} in line.`)
}

function nowServing(p) {
    var counter = 0
    while (counter < p.length) {
        counter++
    } if (p.length === 0) {
        return (`There is nobody waiting to be served!`)
    } else {
        return (`Currently serving ${p.shift()}.`)
    }
}

function currentLine(p) {
    var line = []
    if (p.length === 0) {
        return (`The line is currently empty.`)
    } else {
        for (let i = 0; i < p.length; i++) {
            line.push(` ${i + 1}. ${p[i]}`)
            }
        }
        return (`The line is currently:${line}`)
    }
