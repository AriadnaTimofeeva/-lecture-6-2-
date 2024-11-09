/* 2.
Ситуация: У вас есть массив имен, и вы хотите создать новый массив, в котором каждое имя будет записано в верхнем регистре.​
Условия:​
Создайте массив names, который будет содержать следующие имена: ['alice', 'bob', 'charlie', 'david'].​
Используя метод map(), создайте новый массив upperCaseNames, который будет содержать имена из массива names, преобразованные в верхний регистр.​
Выведите новый массив upperCaseNames на экран.*/


const names = ['alice', 'bob', 'charlie', 'david'];
console.log(`Первоначальный массив: \n${names}`);

const upperCaseNames = names.map(name => name.toUpperCase());
console.log(`Преобразованный массив: \n${upperCaseNames}`);