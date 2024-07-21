/*
1. Прописати у html-розмітці кнопку (<button>) з будь-яким селектором (класс, id). За допомогою DOM отримати посилання на цей елемент 
та навісити на нього обробник події кліку. За кліком кнопка має викликати модальне вікно (alert) з текстом “Привіт тобі, клацальщик!”

*/

const helloButton = document.querySelector("#helloButton");

helloButton.addEventListener("click", () => {
  alert("Привіт тобі, клацальщик");
});

/* 
2. Створити посилання з текстом “клікни, аби з’явилась кнопка”. За натиснення на посилання поряд з ним має з’явитись новий елемент - кнопка.
*/

const body = document.body;

const link = document.createElement("a");
link.textContent = "Клікни, аби з’явилась кнопка";

body.append(link);

function showButton() {
  const newButton = document.createElement("button");
  newButton.textContent = "Ось і вона";
  body.append(newButton);
}

link.addEventListener("click", showButton);

/* 
3. “Лампочка”. У розмітці прописати елемент (article або div), з початковими стилями, які роблять елемент круглим, сірого кольору тла, 
з темно-сірою рамкою. Також прописати в розмітці кнопку, за натиснення на яку у елемента-лампочки мають змінитись стилі - тло має стати 
жовтим, рамка - білою.
*/

const lightButton = document.querySelector("#lightButton");

function lightOn() {
  const div = document.querySelector("#light");
  div.style.backgroundColor = "gold";
  div.style.border = "2px solid white";
}

lightButton.addEventListener("click", lightOn);
