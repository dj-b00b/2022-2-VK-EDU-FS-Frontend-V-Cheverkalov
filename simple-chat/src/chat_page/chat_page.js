import "./css/form.css";
import "./css/page.css";
import "./css/chat.css";
import "./css/header.css";

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.message');
const chat = document.querySelector('.chat')

getMessagesFromLocalStorage();
form.addEventListener('submit', handleSubmit); 

function handleSubmit(event) {
  event.preventDefault();
  let message = {
    'time': new Date().toLocaleTimeString().slice(0, -3),
    'sender': 'not defined',
    'content': input.value
  };
  addMessagesMirror(message);
  saveMessagesInLocalStorage(message);
  event.target.reset();
}

function addMessagesMirror(message) {
  createMessage(message, 'message message-right');
  createMessage(message, 'message message-left');
}

function createMessage(message, sender) {
  let newMessage = document.createElement('div');
  newMessage.className = sender;
  chat.append(newMessage);

  let newMessageContent = document.createElement('p');
  newMessageContent.className = 'message_text';
  newMessageContent.innerText = message.content;
  newMessage.append(newMessageContent);

  let newMessageMetadata = document.createElement('div');
  newMessageMetadata.className = 'message_metadata';
  newMessage.append(newMessageMetadata);

  let newMessageTime = document.createElement('div');
  newMessageTime.className = 'sending_time';
  newMessageTime.innerText = message.time;
  newMessageMetadata.append(newMessageTime);

  let newMessageStatus = document.createElement('div');
  newMessageStatus.className = 'status';
  newMessageMetadata.append(newMessageStatus);
  newMessageStatus.innerHTML = "<span class='material-icons'>done_all</span>";
}

function saveMessagesInLocalStorage(message) {
  let messages = localStorage.getItem('messages');
  if (messages == '' || messages == null) {
    localStorage.setItem('messages', JSON.stringify({
      'all': []
    }));
  }
  messages = localStorage.getItem('messages');
  messages = JSON.parse(messages);
  messages.all.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function getMessagesFromLocalStorage() {
  let messages = localStorage.getItem('messages');
  if (messages != '' && messages !== null) {
    messages = JSON.parse(messages);
    for (let message of messages.all) {
      addMessagesMirror(message);
    }
  }
}

