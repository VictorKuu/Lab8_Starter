// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//tests for isPhoneNumber
test('isPhoneNumberNormal', () => {
    expect(functions.isPhoneNumber('858-538-5281')).toBe(true);
});
test('isPhoneNumberNormal', () => {
    expect(functions.isPhoneNumber('(858)-538-5281')).toBe(true);
});
test('isPhoneNumberBad', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
});
test('isPhoneNumberBad', () => {
    expect(functions.isPhoneNumber('1234567891')).toBe(false);
});


//tests for isEmail
test('isEmail', () => {
    expect(functions.isEmail('vku@ucsd.edu')).toBe(true);
});
test('isEmail', () => {
    expect(functions.isEmail('someone@google.org')).toBe(true);
});
test('isEmail', () => {
    expect(functions.isEmail('hi')).toBe(false);
});
test('isEmail', () => {
    expect(functions.isEmail('.edu')).toBe(false);
});

//tests for isStrongPassword
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('ilovecse110')).toBe(true);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('WuhHuh2')).toBe(true);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaaaaaaa')).toBe(false);
});
test('isStrongPassword', () => {
    expect(functions.isStrongPassword('!@#$')).toBe(false);
});

//tests for isDate
test('isDate', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});
test('isDate', () => {
    expect(functions.isDate('01/01/1111')).toBe(true);
});
test('isDate', () => {
    expect(functions.isDate('Jan/first/1111')).toBe(false);
});
test('isDate', () => {
    expect(functions.isDate('hallulia')).toBe(false);
});

//tests for isHexColor
test('isHexColor', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('isHexColor', () => {
    expect(functions.isHexColor('#ad34db')).toBe(true);
});
test('isHexColor', () => {
    expect(functions.isHexColor('#aaaaaaaaaaaaaaa')).toBe(false);
});
test('isHexColor', () => {
    expect(functions.isHexColor('#23')).toBe(false);
});