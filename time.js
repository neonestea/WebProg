//$(window).load(function () {

//    $(".loader_inner").fadeOut();
//    $(".loader").delay(400).fadeOut("slow");

//});

var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    if (className == "delete") {
        element.onclick = removeMessage;
    }
    return element;
};

than = 'Спасибо'
elem = document.querySelector('footer');
var thanEl = makeElement('p', 'footer-text', than);
elem.appendChild(thanEl);


var intlShortDateFormat = new window.Intl.DateTimeFormat("ru-RU",
    {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });

var intlShortTimeFormat = new window.Intl.DateTimeFormat("ru-RU",
    {
        hour: "numeric",
        minute: "2-digit",
    });

var time = setInterval(function () {
    document.getElementById("time").innerHTML = intlShortDateFormat.format(new Date());

}, 1000);

var i = 0;

var image = document.getElementById("ava");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var imgs = new Array('/images/lama2.jpg', '/images/lama3.jpg', '/images/lama4.jpg');
function imgPlus() {
    i++;
    if (i > imgs.length - 1) {
        i = 0;
    }
    image.src = imgs[i];
}

function imgMinus() {
    i--;
    if (i < 0) {
        i = imgs.length - 1;
    }
    image.src = imgs[i];
}

const contBlock = document.getElementById("conts");
const main = document.querySelector('main');
let stat = 0;

function showContacts() {
    contBlock.style.visibility = 'visible';
    main.style.filter = 'blur(10px)';
    document.body.style.overflow = 'hidden';
    stat = 1;
}



function hideContacts() {
    contBlock.style.visibility = 'hidden';
    main.style.filter = 'blur(0px)';
    document.body.style.overflow = 'auto';
    stat = 0;
}


document.onclick = function (ev) {
    if (ev.target.id != contBlock.id && contBlock.style.visibility == 'visible') {
        hideContacts();
    }
}

function getTags() {
    const els = document.getElementsByTagName('*');
    const tags = []
    for (let i = 0; i < els.length; i++) {
        tags.push(els[i].tagName);
    }

    let uniqTags = Array.from(new Set(tags));

    for (let i = 0; i < uniqTags.length; i++) {
        let num = 0;
        for (let j = 0; j < tags.length; j++) {
            if (uniqTags[i] == tags[j]) {
                num++;
            }
        }
        uniqTags[i] = uniqTags[i] + " : " + num;
        if (num > 0) {
            console.log(uniqTags[i]);
        }
    }

}

setTimeout(getTags(), 1000);


function sendMessage() {
    
}

const objs = new Array('я', 'слон', 'котик', 'дерево', 'Илон Маск', 'Мадонна', 'снег');
const defs = new Array('Красивый', 'Милый', 'Деревянный', 'Лесной', 'Хороший', 'Плохой', 'Противный');
const verbs = new Array('гуляет', 'сидит', 'мычит', 'бегает');

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


document.getElementById("btn").onclick = function (e) {
    let text = document.getElementById("text");
    let val = text.value;
    elem = document.getElementById("chat");
    text.value = "";
    let answer = arrayRandElement(defs) + ' ' + arrayRandElement(objs) + ' ' + arrayRandElement(verbs);
    if (val == '') {
        answer = 'Очень интересно, но непонятно';
    }

    else {

        let message = makeElement('div', 'message', val);
        let close = makeElement('img', 'delete', '');
        
        close.src = "/images/close.jpg";
        message.appendChild(close);
        
        elem.appendChild(message);
        let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
        elem.appendChild(time);


    }
    
    if (val == 'Как дела?') {
        answer = 'Хорошо, у тебя как?';
    }
    if (val == 'Привет') {
        answer = 'Привет';
    }
    let closeAns = makeElement('img', 'delete', '');
    closeAns.src = "/images/close.jpg";
    let messageAns = makeElement('div', 'answer', answer);
    messageAns.appendChild(closeAns);
    
    elem.appendChild(messageAns);
    let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
    elem.appendChild(time);
}

document.getElementById("btn2").onclick = function (e) {
    let text = document.getElementById("text");
    let val = text.value;
    text.value = "";
    let result = "";
    let state = 1;
    if (val == '' || isNaN(eval(val))) {
        result = "Хм...";
        state = 0;
    }
    else {
        result = eval(val);
    }


    
    elem = document.getElementById("chat");
    if (state == 1) {
        let message = makeElement('div', 'message', val);
        let close = makeElement('img', 'delete', '');
        close.src = "/images/close.jpg";
        message.appendChild(close);
        elem.appendChild(message);
        let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
        elem.appendChild(time);
    }
    
   
    let closeAns = makeElement('img', 'delete', '');
    closeAns.src = "/images/close.jpg";

    let messageAns = makeElement('div', 'answerW', result);
    messageAns.appendChild(closeAns);
    
    elem.appendChild(messageAns);
    let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
    elem.appendChild(time);

}








function removeMessage() {
    let message = this.parentElement;
    let time = message.nextSibling;
    time.remove();
    message.remove();
    
}