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

