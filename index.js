// ЗАДАНИЕ №1
// удалить из строки повторяющиеся символы
// РЕШЕНИЕ

// Способ №1
var first = '1234156117181119999';

var unique = "";

for (var i = 0; i < first.length; i++) {
  if (unique.indexOf(first[i]) == -1) {
    unique += first[i];
  }
}

console.log(unique); // возвращает 123456789

// var first = '1234156117181119999';
// var unique = "";
// for (var i = 0; i < first.length; i++) {
//   if (first.lastIndexOf(first[i]) == first.indexOf(first[i])) {
//     unique += first[i];
//   }
// }
// console.log(unique); возвращает 2345678 - только те, которые встречаются не более одного раза!

// Способ №2
var first = '1234156117181119999';

let strToArr = first.split("");

let res = strToArr.reduce((prev, curr) => !prev.includes(curr) ? prev + curr : prev, "");

console.log(res);

// ЗАДАНИЕ №2
// количество слов в строке
// РЕШЕНИЕ

var second = 'Hi, i am learning javascript';

var amountOfWords = second.split(" ").length;

console.log(amountOfWords);

// ЗАДАНИЕ №3
// самое длинное слово в строке
// РЕШЕНИЕ

// Способ №1
var third = 'Hi, i am learning javascript';

third = third.split(',').join('').split(' ');
  
third.sort((a, b) => b.length - a.length);

third[0];

// Способ №2
var third = 'Hi, i am learning javascript';

third = third.split(',').join('').split(' ');

third.reduce((acc, curr) => curr.length > acc.length ? curr : acc);

// ЗАДАНИЕ №4
// удалить пробелы в строке
// РЕШЕНИЕ

// Способ №1
var fourth = 'Hi, i am learning javascript';

var result = fourth.replace(/\s/g, '');

console.log(result);

// Способ №2
var fourth = 'Hi, i am learning javascript';

var result = fourth.split(" ").join("");

console.log(result);

// Или даже так, если убрать зарятую после 'Hi'

var fourth = 'Hi, i am learning javascript';

var result = fourth.split(",").join("").split(" ").join(",");

console.log(result);

// ЗАДАНИЕ №5
// заменить пробелы на зяпятые
// РЕШЕНИЕ

// Способ №1
var fourth = 'Hi, i am learning javascript';

var result = fourth.split(" ").join(",");

console.log(result);

// Способ №2

var fifth = 'Hi, i am learning javascript';

var result = fifth.replace(/ /g, ',');

console.log(result);

// ЗАДАНИЕ №6
// Отфильтровать массив таким образом чтобы числа были не меньше 20 используя фильтр!
// РЕШЕНИЕ

var sixth = [3, 42, 234, 5, 3, 21, 53];

sixth = sixth.filter(item => item > 20);

console.log(sixth);

// ЗАДАНИЕ №7
// Вернуть новый массив из строк добавив слово месяц если к элементу если число больше 20 используя map
// [3, '42 месяца', '23 месяца', 5, 3, '21 месяца', '53 месяца']
// РЕШЕНИЕ

var seventh = [3, 42, 23, 5, 3, 21, 53];

seventh = seventh.map(item => item > 20 ? `${item} месяца` : item);

console.log(seventh);

// ЗАДАНИЕ №8
// используя reduce просуммировать элементы которые больше 3
// РЕШЕНИЕ

var eight = [3, 42, 23, 5, 3, 21, 53];

eight = eight.reduce((prevValue, item) => item > 3 ? prevValue + item : prevValue, 0);

console.log(eight);

// ЗАДАНИЕ №9
// Используя редьюс в массиве nine найти 21
// РЕШЕНИЕ

var nine = [3, 42, 23, 5, 3, 21, 53];

var res = nine.reduce((prev, item) => item === 21 ? item : prev);

console.log(res);

// ЗАДАНИЕ №10
// Используя редьюса определить все ли элементы больше 5 если да то вернуть тру иначе фолс
// РЕШЕНИЕ

// Способ №1
// Тут явно накуралесил, но работает!
var ten = [5, 42, 23, 5, 31, 21, 53];

var arrOfBoolean = [];

var res;

ten.reduce((prev, item) => {
  if (item > 5) {
    prev.push(true);
    arrOfBoolean = prev;
    return prev;
  } else {
    prev.push(false);
    arrOfBoolean = prev;
    return prev;
  }
}, []);

arrOfBoolean.includes(false) ? res = false : res = true;

console.log(res);

// Способ №1-1
// Потом сделал так
var ten = [5, 42, 23, 5, 31, 21, 53];

var arrOfBoolean = [];

var res;

ten.reduce((prev, item) => {
  if (item > 5) {
    arrOfBoolean.push(true);
  } else {
    arrOfBoolean.push(false);
  }
});

arrOfBoolean.includes(false) ? res = false : res = true;

console.log(res);

// Способ №2
// Ну и самый адекватный вариант
var ten = [5, 42, 23, 5, 31, 21, 53];

let res = ten.reduce((prev, item) => item > 5 && prev ? true : false);

console.log(res);

// ЗАДАНИЕ №11
// Ипользуя map перемножить все нечетные елементы на 2, а четные так и оставить
// РЕШЕНИЕ

// Нечётные элементы
var eleven = [12, 42, 23, 65, 352, 21, 2];

eleven = eleven.map((item, index) => index % 2 == 0 ? item * 2 : item);

console.log(eleven);

// Нечётные числа
var eleven = [12, 42, 23, 65, 352, 21, 2];

eleven = eleven.map(item => item % 2 !== 0 ? item * 2 : item);

console.log(eleven);