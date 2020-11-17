var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

than = 'Спасибо'
elem = document.querySelector('footer');
var thanEl = makeElement('p', 'footer-text', than);
elem.appendChild(thanEl);

var time = setInterval(function () {
    var date = new Date();
    document.getElementById("time").innerHTML = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
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

var contBlock = document.getElementById("conts");
var hideBlock = document.getElementById("main");
var status = 0;
function showContacts() {
    if (status == 0) {
        hideBlock.style.opacity = '0.1';
        contBlock.style.visibility = 'visible';
        contBlock.style.opacity = '1';
        status = 1;
    }
    else {
        hideBlock.style.opacity = '1';
        contBlock.style.visibility = 'hidden';
        status = 0;
    }

}


var html = document.getElementsByTagName('html');
console.log("html: " + html.length);
var head = document.getElementsByTagName('head');
console.log("head: " + head.length);
var meta = document.getElementsByTagName('meta');
console.log("meta: " + meta.length);
var link = document.getElementsByTagName('link');
console.log("link: " + link.length);
var body = document.getElementsByTagName('body');
console.log("body: " + body.length);
var div = document.getElementsByTagName('div');
console.log("div: " + div.length);
var a = document.getElementsByTagName('a');
console.log("a: " + a.length);
var header = document.getElementsByTagName('header');
console.log("header: " + header.length);
var p = document.getElementsByTagName('p');
console.log("p: " + p.length);
var ul = document.getElementsByTagName('ul');
console.log("ul: " + ul.length);
var li = document.getElementsByTagName('li');
console.log("li: " + li.length);