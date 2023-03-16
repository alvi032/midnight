function calculateTimeAndDisplayResult() {
    calculateTime();
    document.getElementById("resultText").style.display = "block";
    displayTimeRemaining();
}

function displayTimeRemaining() {
    var currentTime = new Date();
    var resultTime = document.getElementById("result").innerHTML;
    var resultTimeObj = new Date(currentTime.toDateString() + " " + resultTime);

    if (resultTimeObj < currentTime) {
        resultTimeObj.setDate(resultTimeObj.getDate() + 1);
    }

    var timeRemainingMs = resultTimeObj.getTime() - currentTime.getTime();
    var timeRemaining = msToHMS(timeRemainingMs);

    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    document.getElementById("timeRemainingText").style.display = "block";
}

function msToHMS(ms) {
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    
    minutes %= 60;
    seconds %= 60;

    return `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

function calculateTime() {
    var time1 = document.getElementById("time1").value + " " + document.getElementById("time1-am").innerHTML;
    var time2 = document.getElementById("time2").value + " " + document.getElementById("time2-am").innerHTML;

    var time1Obj = new Date("01/01/2021 " + time1);
    var time2Obj = new Date("01/01/2021 " + time2);

    if (time2Obj.getTime() < time1Obj.getTime()) {
        time2Obj.setHours(time2Obj.getHours() + 24);
    }

    var minutesDiff = (time2Obj.getTime() - time1Obj.getTime()) / 1000 / 60;
    var halfDiff = minutesDiff / 2;
    var halfTime = new Date(time1Obj.getTime() + (halfDiff * 60 * 1000));

    var hours = halfTime.getHours();
    var minutes = halfTime.getMinutes();
    var amPm = hours < 12 ? "AM" : "PM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    var result = hours + ":" + minutes + " " + amPm;
    document.getElementById("result").innerHTML = result;
}

function toggleAmPm(elementId) {
    var button = document.getElementById(elementId);
    button.innerHTML = button.innerHTML === "AM" ? "PM" : "AM";
}
