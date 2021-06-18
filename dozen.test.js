const isDozen = require ('./dozen')

test('Recognizes a dozen', () => {
    expect(isDozen(12)).toBe("Yup, it's a dozen!")
})

test('Recognizes more than a dozen', () => {
    expect(isDozen(13)).toBe("You have more than a dozen here")
})

test('Recognizes less than a dozen', () => {
    expect(isDozen(11)).toBe("Nope, you have less than a dozen")
})

test('Recognizes a negative number', () => {
    expect(isDozen(-1)).toBe("You don't have any at all!")
})

test('Recognizes a non-number', () => {
    expect(isDozen('FOO')).toBe("This is not a number")
})




