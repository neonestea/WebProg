const image = document.getElementById("ava");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let imgs = new Array('/images/autumn.jpg', '/images/winter.jpg', '/images/pion.jpg', '/images/dog.jpg');
let prices = new Array('6500 р.', '6000 р.', '9000 р.', '3000 р.');
let names = new Array('Осенний венок', 'Зимний венок', 'Пионы', 'Такса');
let i = 0;
const price = document.getElementById("price");
const name = document.getElementById("name");


var intlShortTimeFormat = new window.Intl.DateTimeFormat("ru-RU",
    {
        hour: "numeric",
        minute: "2-digit",
    });


function imgPlus() {
    i++;
    if (i > imgs.length - 1) {
        i = 0;
    }
    image.src = imgs[i];
    price.textContent = prices[i];
    name.textContent = names[i];
}

function imgMinus() {
    i--;
    if (i < 0) {
        i = imgs.length - 1;
    }
    image.src = imgs[i];
    price.textContent = prices[i];
    name.textContent = names[i];
}


var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    if (className == "delete") {
        element.onclick = removeComment;
    }
    return element;
};


const commentBox = document.getElementById("comms");
const chatBtn = document.getElementById("btn");
const text = document.getElementById("text");


text.oninput = function () {
    chatBtn.disabled = false;
    if (text.value == '') {
        chatBtn.disabled = true;
    }
};



text.oninput = function () {
    chatBtn.disabled = false;
    if (text.value == '') {
        chatBtn.disabled = true;
    }
};


function makeDelete() {
    let close = makeElement('img', 'delete', '');
    close.addEventListener('onclick', removeComment);
    close.src = "/images/close.jpg";
    return close;
}

function createComment(text, newFlag = '') {
    let comment = makeElement('div', 'comment', text);

    comment.appendChild(makeDelete());
    let counter = localStorage.getItem('commentsCount');
    if (counter == null) {
        counter = 0;
    }
    let commentNumber = 'commentN' + counter;

    if (newFlag != '') {
        localStorage.setItem('commentsCount', ++counter);
        let jsonComment = { text: comment.textContent, num: commentNumber };
        let json = JSON.stringify(jsonComment);
        localStorage.setItem(commentNumber, json);
        comment.id = commentNumber;
    }
    return comment;
}




function addComment(comment, time = '') {
    commentBox.appendChild(comment);
    if (time) {
        let time = makeElement('div', 'messageTime', intlShortTimeFormat.format(new Date()));
        commentBox.appendChild(time);
    }
}



function getCommentText() {
    let val = text.value;
    text.value = "";
    return val;
}

function showAllComments() {
    let new_keys = Object.keys(localStorage);

    let keys = new Array();
    for (let i = 0; i < new_keys.length; i++) {
        if (new_keys[i].includes('commentN')) {
            keys.push(new_keys[i]);
        }
    }
    keys = keys.sort();
    for (let i = 0; i < keys.length; i++) {

        let retrievedComment = localStorage.getItem(keys[i]);
        let commentJSON = JSON.parse(retrievedComment);
        let commentText = commentJSON.text;
        let commentNumber = commentJSON.num;
        let comment = createComment(commentText);
        comment.id = commentNumber;
        addComment(comment);
        
    }
}

showAllComments();

document.getElementById("btn").onclick = function (e) {
    let text = getCommentText();
    let comment = createComment(text, "new");
    addComment(comment, 'time');
    chatBtn.disabled = true;
}


function removeComment() {
    let comment = this.parentElement;
    let toRemove = document.getElementById(comment.id);
    localStorage.removeItem(comment.id);
    let time = comment.nextSibling;
    if (time != null && time.className == 'messageTime') {
        time.remove();
    }
    toRemove.remove();
}

(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();