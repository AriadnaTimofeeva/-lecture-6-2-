/* 6.
Ситуация: Вы разрабатываете систему фильтрации сообщений, и вам нужно проверить, содержит ли сообщение какое-либо из запрещённых слов.​
Условия:​ 
Создайте массив forbiddenWords, который будет содержать запрещённые слова: ['spam', 'advertisement', 'scam'].​
Создайте переменную message, в которой будет храниться текст сообщения, например: "This is a spam message".​
Используя метод includes(), проверьте, содержит ли сообщение хотя бы одно из запрещённых слов.​
Выведите результат на экран: true, если сообщение содержит запрещённое слово, и false в противном случае.​
Удалите первую задачу из массива.​
Выведите все оставшиеся задачи на экран. */


const forbiddenWords = ['spam', 'advertisement', 'scam'];
const message = "This is a spam message.";
const isSpam = forbiddenWords.some((word) => message.includes(word));

// Исходные данные:
console.log(`Первоначальный массив запрещенных слов: ${forbiddenWords}`);
console.log(`Проверяемое предложение: ${message}`);
console.log("Содержание запрещенного слова:", isSpam);

forbiddenWords.shift();
const isSpam1 = forbiddenWords.some((word) => message.includes(word));

// Измененные данные:
console.log(`\nНовый массив запрещенных слов: ${forbiddenWords}`);
console.log(`Проверяемое предложение: ${message}`);
console.log("Содержание запрещенного слова:", isSpam1);