alert(window.innerHeight);

// заменим цвет фона на красный,
// document.body.style.background = "red";
//
// // а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Wikipedia?")) {
//     location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
// }

// alert(document.documentElement)
// alert(document.body)
// alert(document.head)

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
// }
// alert(document.body.firstChild)
// alert(document.body.lastChild )

// for (let node of document.body.childNodes) {
//     alert(node); // покажет все узлы из коллекции
// }

// alert(document.body.childNodes.filter);

// for (let i = 0; i < document.body.children.length; i++) {
//     alert( document.body.children[i] );
// }

// let elem = document.getElementById('elem');
//
// // сделать его фон красным
// elem.style.background = 'red';

// let elements = document.querySelectorAll('ul > li');
//
// for (let elem of elements) {
//     alert(elem.innerHTML);
// }

// for (let elem of document.body.children) {
//     if (elem.matches('#uniqual-id')) {
//         alert(elem );
//     }
// }
//
// let chapter = document.querySelector('.chapter'); // LI
//
// alert(chapter.closest('.book')); // UL
// alert(chapter.closest('.contents')); // DIV
//
// alert(chapter.closest('h1'));

// document.body.innerHTML = 'Новый BODY!';

// document.body.textContent  = 'Новый BODY!';

// const elements = document.querySelectorAll('.chapter')
//
// let name = prompt("Введите ваше имя?", "<b>Винни-пух!</b>");
//
// elements[0].innerHTML = name;
// elements[1].textContent = name;

// alert(document.body.className);

// document.body.classList.add('article');

// document.body.style.backgroundColor = prompt('background color?', 'green');

// const button = document.getElementById('button')
//
// button.onclick = function() {
//     alert('Спасибо');
// };
//
// button.addEventListener('click', () => alert('Спасибо'))
// button.addEventListener('click', () => alert('100%'))

// button.addEventListener('click', () => {
//     // вывести тип события, элемент и координаты клика
//     alert(event.type + " на " + event.currentTarget);
//     alert("Координаты: " + event.clientX + ":" + event.clientY);
// })

// const form = document.getElementById('form')
//
// form.addEventListener('click', (event) => {
//     console.log('this', this)
//     console.log('event.target', event.target)
// })

// const paragraph = document.getElementById('paragraph')
//
// paragraph.onclick = event => event.stopPropagation()