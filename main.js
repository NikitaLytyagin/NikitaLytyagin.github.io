alert('Суть программы в том, что пользователь вводит число от 0 до 999, а программа раскладывает число на сотни, десятки и единицы')

let value = prompt('Введите число от 0 до 999', );

splitToDigits(value);

function splitToDigits (number) {
    let digits = [];

    if (number > 999 || number < 0) {
        alert('Число не подходит! Введите число от 0 до 999');
        //console.log(digits);
    } else if (number == 0) {
        digits.единицы = 0;
        digits.десятки = 0;
        digits.сотни = 0;
        console.log(digits);
    } else if (!parseInt(number)) {
        alert('Это не число! Введите число от 0 до 999');
    } else {
        let units = number % 10;
        digits.единицы = units;
        let dozens = (parseInt(number/10)) % 10;
        digits.десятки = dozens;
        let hundreds = parseInt(number/100);
        digits.сотни = hundreds;
        console.log(digits);
    }
}