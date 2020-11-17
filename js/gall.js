const imgLinks = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg'
];

var a = document.getElementById('btn1');
var b = document.getElementById('btn2');
var c = document.getElementById('btn3');
var d = document.getElementById('btn4');
var e = document.getElementById('btn5');
a.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
a.checked = true;

a.onchange = function () {
    if (b.checked | c.checked | d.checked | e.checked ) {
        b.checked = false;
        c.checked = false;
        d.checked = false;
        e.checked = false;
    }
    a.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    document.getElementById('photos').src = imgLinks[0];
    currentIndex = 0;
    return false;
}

b.onchange = function () {
    if (a.checked | c.checked | d.checked | e.checked) {
        a.checked = false;
        c.checked = false;
        d.checked = false;
        e.checked = false;
    }
    b.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    document.getElementById('photos').src = imgLinks[1];
    currentIndex = 1;
    return false;
}

c.onchange = function () {
    if (a.checked | b.checked | d.checked | e.checked) {
        b.checked = false;
        e.checked = false;
        d.checked = false;
        a.checked = false;
    }
    c.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    document.getElementById('photos').src = imgLinks[2];
    currentIndex = 2;
    return false;
}

d.onchange = function () {
    if (b.checked | c.checked | a.checked | e.checked) {
        b.checked = false;
        c.checked = false;
        a.checked = false;
        e.checked = false;
    }
    d.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    document.getElementById('photos').src = imgLinks[3];
    currentIndex = 3;
    return false;
}

e.onchange = function () {
    if (a.checked | c.checked | d.checked | b.checked) {
        b.checked = false;
        c.checked = false;
        d.checked = false;
        a.checked = false;
    }
    e.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    document.getElementById('photos').src = imgLinks[4];
    currentIndex = 4;
    return false;
}
