function isDozen(input) {
    if(input == 12) {
        return "Yup, it's a dozen!"
    }
    else if(input < 12 && input > 0) {
        return "Nope, you have less than a dozen"
    }
    else if(input > 12) {
        return "You have more than a dozen here"
    }
    else if (input <= 0) {
        return "You don't have any at all!"
    }
    else {
        return "This is not a number"
    }
}

module.exports = isDozen