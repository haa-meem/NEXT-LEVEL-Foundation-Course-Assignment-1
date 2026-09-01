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
console.log(getDayType("Bandarban"));