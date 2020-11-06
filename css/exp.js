var radio = document.getElementById('radio');
var check = document.querySelectorAll('.check');
var items = document.getElementById('exp');

radio.addEventListener('change', function () {
    var val = this.value;
    var item = items.querySelectorAll('.timeline_block');
    for (var i = 0; i < item.length; i++) {
        if (item[i].classList.contains(val)) {
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }
    }
    for (i = 0; i < check.length; i++) {
        var ch = check[i];
        if (ch.value === val || this.value === "timeline_block") {
            ch.classList.add('checked'); 
            ch.chosen = true;
        } else {
            ch.classList.remove('checked');
            ch.chosen = false;
        }
    }
});

for (var i = 0; i < check.length; i++) {
    check[i].chosen = true;
    check[i].addEventListener('click', function () {
        this.chosen = !this.chosen;
        this.classList.toggle('checked');
        var item = items.querySelectorAll('.' + this.value);
        for (var u = 0; u < item.length; u++) {
            item[u].style.display = this.chosen ? 'flex' : 'none';
        }
    });
}