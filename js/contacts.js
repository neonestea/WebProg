const chatBtn = document.getElementById("btn");
const text = document.getElementById("text");
const h = document.getElementById("h");

text.oninput = function () {
    chatBtn.disabled = false;
    if (text.value == '') {
        chatBtn.disabled = true;
    }
};

function SignUp() {
    chatBtn.style.visibility = "hidden";
    text.style.visibility = "hidden";
    h.textContent = "Вы подписаны на обновления";

    //почта будет добавляться в БД для рассылки

}


