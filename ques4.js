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

console.log(getCngFare(2));