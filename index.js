var takeANumber = function (katzDeliLine, name) {
    katzDeliLine.push(name);

    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

var nowServing = function (katzDeliLine) {
    if (katzDeliLine[0] != undefined) {

        var current = katzDeliLine[0];
        katzDeliLine.shift();
        return `Currently serving ${current}.`;


    } else {
        return "There is nobody waiting to be served!";

    };

}

var currentLine = function (katzDeliLine) {

    var message = "The line is currently:";
    if (katzDeliLine[0] != undefined) {

        for (var i = 0; i < katzDeliLine.length; i++) {
            message = `${message} ${i+1}. ${katzDeliLine[i]},`;
        }
        message = message.slice(0,-1);
        return message;
    } else {
        return "The line is currently empty."
    };
}