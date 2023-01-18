"use strict";

function arabicToRoman(number) {
    let result = "";
    while (number >= 1000) {
        result += "M";
        number -= 1000;
    }
    if (number >= 900) {
        result += "CM";
        number -= 900;
    }
    while (number >= 500) {
        result += "D";
        number -= 500;
    }
    if (number >= 400) {
        result += "CD";
        number -= 400;
    }
    while (number >= 100) {
        result += "C";
        number -= 100;
    }
    if (number >= 90) {
        result += "XC";
        number -= 90;
    }
    while (number >= 50) {
        result += "L";
        number -= 50;
    }
    if (number >= 40) {
        result += "XL";
        number -= 40;
    }
    while (number >= 10) {
        result += "X";
        number -= 10;
    }
    if (number === 9) {
        result += "IX";
        number -= 9;
    }
    while (number >= 5) {
        result += "V";
        number -= 5;
    }
    if (number === 4) {
        result += "IV";
        number -= 4;
    }
    while (number > 0) {
        result += "I";
        number--;
    }

    return result;
}

module.exports = arabicToRoman;

// https://cyber-dojo.org/kata/edit/gBcL61
