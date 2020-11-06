var items = document.querySelectorAll('.skill_item');
var parent = document.querySelector('.middle-main-flex');
var SortElements = new Object();





var a = document.getElementById('desc');
var b = document.getElementById('asc');

a.onclick = function () {
    b.textContent = "По возрастанию"
    a.textContent = "✔ По убыванию"
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

b.onclick = function () {
    b.textContent = "✔ По возрастанию"
    a.textContent = "По убыванию"
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