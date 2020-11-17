var items = document.querySelectorAll('.skill_item');
var parent = document.querySelector('.middle-main-flex');
var SortElements = new Object();


var c = document.getElementById('desc');
var d = document.getElementById('asc');

c.onchange = function () {
    if (d.checked) {
        d.checked = false;
    }
    c.style = "background-color: #b3d7ff; border - color: #b3d7ff;"
    items.forEach(function (item, indx) {
        var itemValue = parseInt(item.querySelector('.number').textContent.replace(/\s+/g, ''));
        SortElements[itemValue] = { 'element': item, 'index': indx };
    });

    var keys = Object.keys(SortElements);

    function compareNumeric(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b) return 1;
        if (a > b) return -1;
    }

    keys.sort(compareNumeric);

    keys.map(function (key, indx) {
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
    });
    return false;
}

d.onchange = function () {
    if (c.checked) {
        c.checked = false;
    }
    items.forEach(function (item, indx) {
        var itemValue = parseInt(item.querySelector('.number').textContent.replace(/\s+/g, ''));
        SortElements[itemValue] = { 'element': item, 'index': indx };
    });

    var keys = Object.keys(SortElements);

    function compareNumeric(a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a > b) return 1;
        if (a < b) return -1;
    }

    keys.sort(compareNumeric);

    keys.map(function (key, indx) {
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
    });
    return false;
}

