/* 5.
Ситуация: Вы разрабатываете приложение для управления ​задачами. Вам нужно создать список дел и реализовать ​несколько функций для работы с ним.​
Условия:​
Создайте массив tasks, содержащий три строки, представляющие задачи: "Купить продукты", "Сделать домашнее задание", "Позвонить другу".​
Выведите длину массива в консоль.​
Добавьте новую задачу "Убраться в комнате" в конец массива.*/


const tasks = ["Купить продукты"," Сделать домашнее задание"," Позвонить другу "];
console.log(`Первоначальный массив: ${tasks}`);

console.log(`Длина массива: ${tasks.length}`);

tasks.push(" Убраться в комнате");
console.log(`Обновленный массив: ${tasks}`);