//Question No. 1
function describeValue(value) {
    if (value === "" || value === 0 || value === null || value === undefined) {
        return `${typeof (value)} | falsy`;
    }
    else {
        return `${typeof (value)} | truthy`;
    }
}

//Question No. 2
function getDayType(day) {
    let dayName = day.toLowerCase();
    switch (dayName) {
        case "friday":
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
            break;
        default:
            return "Invalid Day";
    }
}

//Question No. 3
function validateUsername(user) {
    let userName = user.toLowerCase();
    let userLength = userName.length;
    if (userLength < 4) {
        return "Too Short";
    }
    else if (userName.includes(" ")) {
        return "No Space Allowed"
    }
    else if (userName.includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}

//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;
    let farePerKM = 15;
    let newFare = fare + farePerKM * (distance - 2);
    let waitingCharge = 2;
    if (distance <= 2) {
        if (waitingMinutes === 0) {
            if (isNight === false) {
                return fare;
            }
            else {
                return fare * 1.2;
            }
        }
        else {
            if (isNight === false) {
                return fare + waitingMinutes * waitingCharge;
            }
            else {
                return (fare + waitingMinutes * waitingCharge) * 1.2;
            }
        }
    }
    else {
        if (waitingMinutes === 0) {
            if (isNight === false) {
                return newFare;
            }
            else {
                return newFare * 1.2;
            }
        }
        else {
            if (isNight === false) {
                return newFare + waitingMinutes * waitingCharge;
            }
            else {
                return (newFare + waitingMinutes * waitingCharge) * 1.2;
            }
        }
    }
}

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    if (runsNeeded <= 0) {
        return "Won";
    }
    else if (ballsLeft <= 0) {
        return "Lost";
    }
    else {
        if (requiredRate <= 6) {
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`
        }
        else if (requiredRate <= 12) {
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`
        }
        else {
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`
        }
    }
}