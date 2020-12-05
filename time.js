class stacker {
    constructor(size = 100) {
        this.size = size;
        this.items = [];
        this.top = -1; // we can also is -> this.items.length
    }

    // Getters for stack below

    get lastIndex() {
        // this return the index of last item
        return this.top;
    }

    get stackLen() {
        return this.items.length;
    }

    get leftSize() {
        return this.size - this.stackLen;
    }

    get peek() {
        if (this.isEmpty() == true) {
            return console.log("stack is empty");
        }
        else {
            return console.log(this.items[this.top]), this.items[this.top];
        }
    }

    // Setters for stack below
    getItem(index) {
        if (index > this.top || index < 0) {
            return console.log("Wrong Index")
        }
        else {
            return this.items[index], console.log(this.items[index]);
        }
    }
    isFull() {
        if (this.top == this.size - 1) {
            return true;
        }
        else {
            return false;
        }
    }

    isEmpty() {
        if (this.top < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    push(element) {
        if (this.isFull() == true) {
            return console.log("Stack is Full Now");
        }
        else {
            this.top++;
            this.items[this.top] = element;
            return true;
        }

    }

    pop() {
        var data;
        if (this.isEmpty() == true) {
            return false;
        }
        else {
            // data = this.items[this.top];
            // this.items[this.top] = undefined;
            // or we can use 
            data = this.items.splice(this.top, 1); // this will return an array with single element more efficient
            this.top--;
            return data[0];
        }
    }

    traverse() {
        return this.items;
    }


}

// INFIX TO POSTFIX

function precidencer(item) {
    /*
    precedence are :
            * > ^ > / > % > + > - > ) > ( > any operand
    */
    var operators = ['', '(', ')', '-', '+', '%', '/', '*', '^'];

    for (var j = 0; j < operators.length; j++) {
        if (item == operators[j]) {
            return j;
        }
    }

    return 0;
}

// Infix to postfix conversion
function infixToPostfix(expression, tab = 0) {
    var postfixExpression = "", current;
    var table = {
        exp: [],
        stak: [],
        conexp: [],
    };
    // step 1: put a ')' at the end of expression
    expression += ')';

    // creating a stack
    var infixStack = new stacker();

    // step 2: push '(' to stack
    infixStack.push('(');

    // traversing whole expression now
    for (var i = 0; i < expression.length; i++) {
        current = expression[i];
        if (precidencer(current) == 1) {
            infixStack.push('(');
        }

        else if (precidencer(current) == 0) {
            postfixExpression += current;
        }

        else if (precidencer(current) == 2) {
            while (infixStack.peek != '(') {
                postfixExpression += ' ';
                postfixExpression += infixStack.pop();
            }
            if (infixStack.peek == '(') {
                infixStack.pop();
            }
        }
        else if (precidencer(current) > 2) {
            if (precidencer(current) >= precidencer(infixStack.peek)) {
                infixStack.push(current);

            }
            else {
                while (infixStack.peek != '(') {

                    postfixExpression += infixStack.pop();
                }
                infixStack.push(current);

            }
        }

        if (tab == 1) {
            table.exp[i] = current;
            table.stak[i] = infixStack.traverse().join("");
            table.conexp[i] = postfixExpression;
        }
    }

    return postfixExpression;
}




function postfixEval(expression) {
    expression += ' )';
    expression = expression.split(" ");
    console.log(expression);
    var stak = new stacker(), table = {
        char: [], s: [],
    };

    for (let i = 0; i < expression.length; i++) {
        let A, B;
        if (precidencer(expression[i]) < 1) {
            stak.push(expression[i]);
        }
        else if (precidencer(expression[i]) > 2) {
            A = stak.pop(), B = stak.pop();
            stak.push(eval(B + expression[i] + A).toString());
        }
        table.char[i] = expression[i];
        table.s[i] = stak.traverse().toString();
    }
    table.char.pop();
    table.s.pop();
    let res = table.s;
    return res[res.length - 1];
}



function checker(expression) {
    if (precidencer(expression[0]) > 2) {
        return 1;
    }
    else {
        return 0;
    }
}
function cleanDoubleSpaces(str) {
    return str.replace(/\s{2,}/g, ' ');
}

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

//function getTags() {
//    const els = document.getElementsByTagName('*');
//    const tags = []
//    for (let i = 0; i < els.length; i++) {
//        tags.push(els[i].tagName);
//    }

//    let uniqTags = Array.from(new Set(tags));

//    for (let i = 0; i < uniqTags.length; i++) {
//        let num = 0;
//        for (let j = 0; j < tags.length; j++) {
//            if (uniqTags[i] == tags[j]) {
//                num++;
//            }
//        }
//        uniqTags[i] = uniqTags[i] + " : " + num;
//        if (num > 0) {
//            console.log(uniqTags[i]);
//        }
//    }

//}

//setTimeout(getTags(), 1000);



const objs = new Array('я', 'слон', 'котик', 'дерево', 'Илон Маск', 'Мадонна', 'снег');
const defs = new Array('Красивый', 'Милый', 'Деревянный', 'Лесной', 'Хороший', 'Плохой', 'Противный');
const verbs = new Array('гуляет', 'сидит', 'мычит', 'бегает');

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function getRandomAnswer() {
    return (arrayRandElement(defs) + ' ' + arrayRandElement(objs) + ' ' + arrayRandElement(verbs))
}

const chatBox = document.getElementById("chat");
const chatBtn = document.getElementById("btn");
const text = document.getElementById("text");


text.oninput = function () {
    chatBtn.disabled = false;
    if (text.value == '') {
        chatBtn.disabled = true;
    }
};


function makeDelete() {
    let close = makeElement('img', 'delete', '');
    close.addEventListener('onclick', removeMessage);
    close.src = "/images/close.jpg";
    return close;
}

function createMessage(text, type, newFlag='') {
    let message = makeElement('div', 'message', text);
    if (type == "outcome") {
        if (newFlag != '') {
            message.textContent = getRandomAnswer();
        }
        message.classList.add('answer');
       
    }
    else if (type == "calculation") {
        message.classList.add('answer');
    }
    message.appendChild(makeDelete());
    let counter = localStorage.getItem('messagesCount');
    if (counter == null) {
        counter = 0;
    }
    let messageNumber = 'message' + counter;
    
    if (newFlag != '') {
        localStorage.setItem('messagesCount', ++counter);
        let jsonMessage = { type: type, text: message.textContent, num: messageNumber};
        let json = JSON.stringify(jsonMessage);
        localStorage.setItem(messageNumber, json);
        message.id = messageNumber;
    }
    return message;
}




function addMessage(message,time='') {
    chatBox.appendChild(message);
    if (time) {
        let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
        chatBox.appendChild(time);
    }
}




function checkIfCalculatable(text) {
    let res = true;
    let tmp = text.replace(/[.\?,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    tmp = tmp.replace(/\s/g, '');
    if (tmp.match("^[a-zA-Zа-яА-я0-9]+$")) {
        res = false;
    }
    return res;
}


function calculate(text) {
    let postfixString = infixToPostfix(text);
    postfixString = cleanDoubleSpaces(postfixString);
    return postfixEval(postfixString);
}

function getMessageText() {
    let val = text.value;
    text.value = "";
    return val;
}

function showAllMessages() {
    let keys = Object.keys(localStorage);
    keys = keys.sort();
    for (let i = 0; i < keys.length; i++) {
        
        let retrievedMessage = localStorage.getItem(keys[i]);
        let messageJSON = JSON.parse(retrievedMessage);
        let messageType = messageJSON.type;
        let messageText = messageJSON.text;
        let messageNumber = messageJSON.num;
        if (messageText) {
            let message = createMessage(messageText, messageType);
            message.id = messageNumber;
            addMessage(message);
        }
    }
}
showAllMessages();

document.getElementById("btn").onclick = function (e) {
    let text = getMessageText();

    let message = createMessage(text, "income", "new");
    addMessage(message,'time');
    if (checkIfCalculatable(text)) {
        text = calculate(text);
        let answer = createMessage(text, "calculation", "new");
        addMessage(answer, 'time');
    }
    else {
        let answer = createMessage('', "outcome", "new");
        addMessage(answer, 'time');
    }
    chatBtn.disabled = true;
}


function removeMessage() {
    let message = this.parentElement;
    let toRemove = document.getElementById(message.id);
    localStorage.removeItem(message.id);
    let time = message.nextSibling;
    if (time != null && time.className == 'messageTime') {
        time.remove();
    }
    toRemove.remove();
}

