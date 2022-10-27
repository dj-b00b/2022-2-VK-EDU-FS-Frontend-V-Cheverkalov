import "./css/header.css";
import "./css/floating_button.css";
import "./css/page.css";
import "./css/chats.css";

const chats = document.querySelectorAll(".block_chat");

chats.forEach(function (block) {
    block.addEventListener("click", goToChat);
})

function goToChat() {
    document.location.href = '../chat_page/index.html';
}




