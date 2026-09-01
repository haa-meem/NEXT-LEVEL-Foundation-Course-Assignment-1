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
console.log(validateUsername("Admin_Rahim"));